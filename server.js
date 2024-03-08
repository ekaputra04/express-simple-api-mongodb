const express = require("express");
const cors = require("cors");
const db = require("./app/model");
const app = express();

const PORT = process.env.PORT || 3000;

const corsOption = {
  origin: "*",
};

// register cors midleware
app.use(cors(corsOption));
app.use(express.json());

// connect ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("berhasil connect"))
  .catch((err) => {
    console.log("gagal connect");
    process.exit();
  });

// memanggil route mahasiswa
require("./app/routes/mahasiswa.route")(app);

app.listen(PORT, () => {
  console.log("server start on port " + PORT);
});
