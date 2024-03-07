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
    console.log("berhasil connect");
    process.exit();
  });

// membuat route
app.get("/", (req, res) => {
  res.json({ message: "Hello Eka" });
});

app.listen(PORT, () => {
  console.log("server start on port " + PORT);
});