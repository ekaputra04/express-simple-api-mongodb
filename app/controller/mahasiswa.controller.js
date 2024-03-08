const db = require("../model");
const mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  mahasiswa
    .create(req.body)
    .then(() =>
      res.send({ message: "Data successfully created", data: req.body })
    )
    .catch((err) => res.send({ status: 500, message: err.message }));
};

exports.findAll = (req, res) => {
  mahasiswa
    .find()
    .then((data) => res.send(data))
    .catch((err) => res.send({ status: 500, message: err.message }));
};

exports.show = (req, res) => {
  let id = req.params.id;
  mahasiswa
    .findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.send({ status: 500, message: err.message }));
};

exports.update = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  let id = req.params.id;
  mahasiswa
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.send({ status: 404, message: err.message });
      }
      res.send({
        status: 200,
        message: "Data has  been updated",
        data: req.body,
      });
    })
    .catch((err) => res.send({ status: 500, message: err.message }));
};

exports.delete = (req, res) => {
  let id = req.params.id;

  mahasiswa
    .findOneAndDelete({ _id: id })
    .then((data) => {
      if (!data) {
        res.status(404).send({ status: 404, message: err.message });
      }
      res.status(200).send({
        status: 200,
        message: "Data has been deleted",
      });
    })
    .catch((err) =>
      res.status(500).send({ status: 500, message: err.message })
    );
};
