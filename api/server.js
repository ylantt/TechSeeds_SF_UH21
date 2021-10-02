const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middlewares/error");
const cookieParser = require("cookie-parser");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route file
const auth = require("./routes/auth");
const users = require("./routes/user");
const doctors = require("./routes/doctor");
const problems = require("./routes/problem");
const medicines = require("./routes/medicine");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Enable CORS
app.use(cors());

// Mount routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", users);
app.use("/api/v1/doctors", doctors);
app.use("/api/v1/problems", problems);
app.use("/api/v1/medicines", medicines);

app.use(errorHandler);

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
