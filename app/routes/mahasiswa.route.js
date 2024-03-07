module.exports = (app) => {
  const mahasiswa = require("../controller/mahasiswa.controller");
  const router = require("express").Router();

  router.get("/", mahasiswa.findAll);
  router.get("/:id", mahasiswa.show);
  router.post("/", mahasiswa.create);
  router.put("/:id", mahasiswa.update);
  router.delete("/:id", mahasiswa.delete);

  app.use("/mahasiswa", router);
};
