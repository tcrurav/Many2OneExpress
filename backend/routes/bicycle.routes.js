module.exports = app => {
  const bicycles = require("../controllers/bicycle.controller.js");

  var router = require("express").Router();

  router.post("/", bicycles.create);
  router.get("/", bicycles.findAll);
  router.get("/:id", bicycles.findOne);
  router.put("/", bicycles.update);
  router.delete("/:id", bicycles.delete);

  app.use("/api/bicycles", router);
}