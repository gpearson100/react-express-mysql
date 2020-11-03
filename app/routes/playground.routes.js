module.exports = (app) => {
  const playgrounds = require("../controllers/playground.controller.js");

  var router = require("express").Router();

  // Create a new Playground
  router.post("/", playgrounds.create);

  // Retrieve all Playgrounds
  router.get("/", playgrounds.findAll);

  // Retrieve all published Playgrounds
  //router.get("/isIpemaCertified", playgrounds.findAllIpemaCertified);

  // Retrieve a single Playground with id
  router.get("/:id", playgrounds.findOne);

  // Update a Playground with id
  router.put("/:id", playgrounds.update);

  // Delete a Tutorial with id
  router.delete("/:id", playgrounds.delete);

  // Delete all Tutorials
  router.delete("/", playgrounds.deleteAll);

  app.use("/api/playgrounds", router);
};
