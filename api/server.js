const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const doctorRoutes = require('./routes/doctor');

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ROUTING 
app.use(doctorRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
