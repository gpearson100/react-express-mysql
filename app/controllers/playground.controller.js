const db = require("../models");
const Playground = db.playgrounds;
const Op = db.Sequelize.Op;

// Create and Save a new Playground
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pgName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Playground
  const playground = {
    pgName: req.body.pgName,
    pgDescription: req.body.pgDescription,
    isIpemaCertified: req.body.isIpemaCertified
      ? req.body.isIpemaCertified
      : false,
  };

  // Save Playground in the database
  Playground.create(playground)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Playground.",
      });
    });
};

// Retrieve all Playgrounds from the database.
exports.findAll = (req, res) => {
  const pgName = req.query.pgName;
  var condition = pgName ? { pgName: { [Op.like]: `%${pgName}%` } } : null;

  Playground.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving playgrounds.",
      });
    });
};

// Find a single Playground with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Playground.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Playground with id=" + id,
      });
    });
};

// Update a Playground by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Playground.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Playground was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Playground with id=${id}. Maybe Playground was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Playground with id=" + id,
      });
    });
};

// Delete a Playground with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Playground.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Playground was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Playground with id=${id}. Maybe Playground was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Playground with id=" + id,
      });
    });
};

// Delete all Playgrounds from the database.
exports.deleteAll = (req, res) => {
  Playground.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Playgrounds were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all playgrounds.",
      });
    });
};

// find all published Playground
exports.findAllIpemaCertified = (req, res) => {
  Playground.findAll({ where: { isIpemaCertified: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving playgrounds.",
      });
    });
};
