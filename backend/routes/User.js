const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const express = require("express");
const router = express.Router();

function verifyJwt(req, res, next) {
  const token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed to Authenticate",
          err: error,
        });

      console.log(decoded, "decoded");
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({
      message: "Incorrect token/Token is undefined",
      isLoggedIn: false,
    });
  }
}

router.get("/getUsername", verifyJwt, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

router.get("/users", (req, res) => {
  console.log("Inside users");
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/register", async (req, res) => {
  console.log(req.body, "register");
  const user = req.body;

  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    res.json({ message: "Username or email has already been taken" });
  } else {
    user.password = await bcrypt.hash(req.body.password, 512);

    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });

    dbUser.save((error) => {
      if (error) {
        res.status(500).json({ msg: "error!" });
      } else {
        res.status(200).json({
          msg: "No error! Your message has been saved!",
        });
      }
    });
  }
});

router.post("/login", async (req, res) => {
  const userInfo = req.body;

  /**
   * Check to see if user with username exists in the DB, if no user, send err msg.
   * If user, compare the password with bcrypt, and and if it is valid, sign using JWT.
   */
  const dbUser = await User.findOne({ username: userInfo.username });

  if (!dbUser) {
    return res.status(400).json({
      message: "Invalid username or password. Try again!",
    });
  }

  bcrypt.compare(userInfo.password, dbUser.password).then((isValid) => {
    if (isValid) {
      const payload = {
        id: dbUser._id,
        username: dbUser.username,
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 90000 },
        (err, token) => {
          if (err) return res.json({ message: err });
          // console.log("Token", token);
          return res.json({
            message: "success",
            token: token,
          });
        }
      );
    } else {
      return res.json({
        message: "Invalid username or password",
      });
    }
  });
});

// router.post('/editUser', (req, res) => {
//   User.findOne({ username: req.body.username })
//     .then(user => {
//       // Whatever attributes you need to pass in, example below
//       user.username = req.body.username || user.username;
//       user.token = req.body.token || user.token;
//       user.save()
//         .then(ret => {
//           res.json(ret);
//         })
//         .catch(err => {
//           res.send(err);
//         }
//         );
//     })
//     .catch(err => {
//       res.send({ err, message: 'User not found' });
//     }
//     )
// });

router.post('/findUserByAddress', (req, res) => {
  User.findOne({ address: req.body.address }).then(user => res.json(user));
});

router.post('/logout', (req, res) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      // Whatever attributes you need to pass in, example below
      user.username = req.body.username || user.username;
      user.token = undefined;
      user.save()
        .then(ret => {
          res.json(ret);
        })
        .catch(err => {
          res.send(err);
        }
        );
    })
    .catch(err => {
      res.send({ err, message: 'User not found' });
    });
});

router.post('/addUser', async (req, res) => {
  console.log(req.body, "add");
  const user = req.body;
  const userExists = await User.findOne({ address: user.address });

  if (userExists) {
    res.json({ message: "User already exists. Logging in as normal." });
  } else {
    const dbUser = new User({
      address: user.address,
    });

    dbUser.save((error) => {
      if (error) {
        res.status(500).json({ msg: "Error!" });
      } else {
        res.status(200).json({
          msg: "User has been saved!",
        });
      }
    });
  }
});

router.post('/editUser', (req, res) => {
  User.findOne({ address: req.body.address })
    .then(user => {
      // Whatever attributes you need to pass in, example below
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.save()
        .then(ret => {
          res.json(ret);
        })
        .catch(err => {
          res.send(err);
        }
        );
    })
    .catch(err => {
      res.send({ err, message: 'User not found' });
    }
    )
});

module.exports = router;
