require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { default: fetch } = require("node-fetch");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello rohit");
});

app.get("/hakuna-matata", (req, res) => {
  const API_KEY = process.env.API_KEY;
  const SECRET_KEY = process.env.SECRET_KEY;

  const options = { expiresIn: "10m", algorithm: "HS256" };

  const payload = {
    apikey: API_KEY,
    Permissions: ["allow_join", "allow_mod"],
  };

  const token = jwt.sign(payload, SECRET_KEY, options);

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`API server listening at http://locahost:${PORT}`);
});
