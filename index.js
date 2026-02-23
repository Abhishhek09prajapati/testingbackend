require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ✅ Middlewares */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ✅ Test Route */
app.get("/", (req, res) => {
    res.send("Server Running ✅");
});

/* ✅ Example API */
app.get("/api", (req, res) => {
    res.json({ message: "API Working ✅" });
});

/* ✅ MongoDB Connect */
// mongoose.connect()
//     .then(() => console.log("MongoDB Connected ✅"))
//     .catch(err => console.log("Mongo Error:", err));

/* ✅ Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} 🚀`);
});