const express = require("express");
const router = express.Router();
const db = require("../data/helpers/projectModel");

//GET
router.get("/", (req, res) => {
  db.get(req.params.id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//GET BY ID
router.get("/:id", (req, res) => {
  const projects = req.projects;
  if (projects) {
    res.status(200).json(projects);
  } else {
    res.status(500).json({ message: "Can not find" });
  }
});

//POST
router.post("/", (req,res) => {
    const project = req.body;

    db.insert(project)
    .then(proj => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({message: "fail to get post"})
    })
})

//PUT
router.put("/:id", (req, res) => {
    db.update(req.id, req.body)
      .then(updates => {
        res.status(204).json({ message: "Updated" });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to update" });
      });
  });

  //DELETE
  router.delete("/:id", (req, res) => {

    db.remove(req.id)
      .then(() => {
        res.status(200).json({ message: "Delete successful" });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete project" });
      });
  });
  
  //GET BY ACTION ID
  router.get("/:id/actions", (req, res) => {
    db.getProjectActions(req.id)
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        res.status(500).json({ message: "Could not find" });
      });
  });
  
  

module.exports = router;
