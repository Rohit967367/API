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

app.get("/api", (req, res) => {
  res.send("hello rohit");
});

// app.get("/hakuna-matata", (req, res) => {
//   const API_KEY = "2e817630-b783-455a-acb9-b836fe712bba";
//   const SECRET_KEY =
//     "0a2d3a665153637278fcd10c8f9ad51e8660e65d747dd20b88a7fcb3dbe49d43";

//   const options = { expiresIn: "10m", algorithm: "HS256" };

//   const payload = {
//     apikey: API_KEY,
//     Permissions: ["allow_join", "allow_mod"],
//   };

//   const token = jwt.sign(payload, SECRET_KEY, options);

//   res.json({ token });
// });

app.listen(PORT, () => {
  console.log(`API server listening at http://locahost:${PORT}`);
});
