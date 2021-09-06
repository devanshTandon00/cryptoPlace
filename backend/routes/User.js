const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const express = require("express");
const router = express.Router();

router.get("/", async (req,res) => {
    res.send("hello")
})

router.post("/register", async (req, res) => {
    console.log(req.body, "register")
    const user = req.body;
    
    const takenUsername = await User.findOne({username: user.username})
    const takenEmail = await User.findOne({email: user.email})
  
    if(takenUsername || takenEmail){
        res.json({message: 'Username or email has already been taken'})
    }
    else{
        user.password = bcrypt.hash(req.body.password, 512)
  
        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })
  
        dbUser.save()
        res.json({message: "Success"})
    }
  })

router.post("/login", async(req,res) => {
    const userInfo = req.body;

    /**
     * Check to see if user with username exists in the DB, if no user, send err msg.
     * If user, compare the password with bcrypt, and and if it is valid, sign using JWT.
     */
    User.findOne({username: userInfo.username})
    .then(dbUser => {
        if(!dbUser){
            return res.json({
                message: "Invalid username or password. Try again!"
            })
        }
    })

    bcrypt.compare(userInfo.password, dbUser.password)
    .then(isValid => {
        if(isValid){
            const payload = {
                id: dbUser._id,
                username: dbUser.username,
            }

            jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 90000}, (err, token) => {
                if(err) return res.json({message: err})
                return res.json({
                    message:"success",
                    token: "Bearer " + token
                })
            })
        }
        else{
            return res.json({
                message: "Invalid username or password"
            })
        }
    })
} )

module.exports = router

