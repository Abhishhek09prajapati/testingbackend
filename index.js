require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const mongodb = require("mongodb")
const cors = require("cors");
const { ok } = require("node:assert");
const path = require('path')
const userschema = require("./schema/joob.js")

const app = express();

/* ✅ Middlewares */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ✅ Test Route */
app.get("/", (req, res) => {
    res.send("Server Running ✅");
});

/* ✅ Example API */
// mongodb+srv://Mywork:XTBk8BJ4jQQDooXh@myproject.25lhwvw.mongodb.net/joobearning
/* ✅ MongoDB Connect */
mongoose.connect("mongodb://127.0.0.1:27017/joobearning")
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => { console.log("Mongo Error:", err) });



const Promocode = mongoose.model("Promocodes", userschema);
const User = mongoose.model("User", userschema);




app.get('/mek', async (req, res) => {
    try {
        const user = await Promocode.find();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false });
    }
});


/* ✅ Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} 🚀`);
});