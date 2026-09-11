const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AuthRouter = require("./Router/authRouter");
const PaymentRouter = require("./Router/paymentRouter");
const RegisterRouter = require("./Router/registerRouter");
const Customer_support = require("./Router/customerRouter");

require("dotenv").config();

const app = express();

// Middleware
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.krashakinnovativesolution.com",
      "https://krashakinnovativesolution.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Routes
app.use("/auth", AuthRouter);
app.use("/payment", PaymentRouter);
app.use("/register", RegisterRouter);
app.use("/customer_support", Customer_support);

// Database
const DB_URL = process.env.MONGODB_URI;

mongoose.connect(DB_URL);

const connect = mongoose.connection;

connect.once("open", () => {
  console.log("Successfully connected to database");
});

connect.on("error", () => {
  console.log("Failed to connect to database");
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello From Server");
});

// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on ${PORT}`);
});