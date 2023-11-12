const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const bookRouter = require("./routes/bookRoute");
require("dotenv").config();

// database connection
connectDB();

// use the middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/books", bookRouter);

module.exports = app;
