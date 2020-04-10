const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionModel');

//GET
router.get("/", (req,res) => {
    db.get().then(action => {
        res.status(200).json(action)
    })
})

//GET BY ID
router.get("/:id", validateActionID, (req, res) => {
    const id = req.params.id;
    db.get(id)
      .then(actions => {
        res.status(200).json({ actions });
      })
      .catch(err => {
        res.status(500).json({ err: err });
      });
  });
  

  
  //middleware
  function validateActionID(req, res, next) {
    const { id } = req.params;
  
    Actions.get(id).then(action => {
      if (action) {
        next();
      } else {
        res.status(400).json({ message: "Please provide a valid ID" });
      }
    });
  }

module.exports = router;