const express = require('express');
const router = express.Router();
const Collectible = require('../models/Collectible')

// GET
router.get('/getCollectibles', (req, res) => {
  Collectible.find({}).then(collectibles => res.json(collectibles));
});

// ADD
router.post('/addCollectible', (req, res) => {
  const newCollectible = new Collectible({
    //Whatever attributes are in the schema and you want to pass in, example below
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    list_date: req.body.list_date
  });

  Collectible.create(newCollectible, (err, collectible) => {
    if (err) {
      return res.send(err)
    }
    return res.json(collectible);
  });
});

// EDIT
router.post('/editCollectible', (req, res) => {
  Collectible.findById({ _id: req.body._id })
    .then(collectible => {
      // Whatever attributes you need to pass in, example below
      // collectible.attr1 = req.body.attr1 || collectible.attr1,
      collectible.name = req.body.name || collectible.name;
      collectible.description = req.body.description || collectible.description;
      collectible.price = req.body.price || collectible.price;
      collectible.list_date = req.body.list_date || collectible.list_date;
      collectible.save()
        .then(ret => {
          res.json(ret);
        })
        .catch(err => {
          res.send(err);
        }
        );
    })
    .catch(err => {
      res.send({ err, message: 'Collectible not found' });
    }
    )
});

// DELETE
router.post('/deleteCollectible', (req, res) => {
  Collectible.deleteOne({ _id: req.body._id }, (err, collectible) => {
    if (err) {
      return res.send(err);
    }
    return res.json(collectible);
  })
});

module.exports = router;
