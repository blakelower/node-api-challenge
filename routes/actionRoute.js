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
router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.get(id)
      .then(actions => {
        res.status(200).json({ actions });
      })
      .catch(err => {
        res.status(500).json({ err: err });
      });
  });

  //PUT 
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;
  
    db.update(id, changes)
      .then(update => {
        res.status(200).json(update);
      })
      .catch(err => {
        res.status(500).json({ message: "PUT failed" });
      });
  });

  //POST
  router.post("/", (req, res) => {
    db.insert(req.body).then((action) =>
      res
        .status(200)
        .json({ message: "Updated" })
        .catch(err =>
          res.status(500).json({ message: "Unavailable" })
        )
    );
  });

  //DELETE
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    db.remove(id).then(response => {
      res.status(200).json({
        Deleted: "Deleted Successfully"
      });
    });
  });

module.exports = router;