require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ok } = require("node:assert");

const app = express();

/* ✅ Middlewares */
app.use(express.json());
app.use(cors({ origin: "*" }));

/* ✅ Test Route */
app.get("/", (req, res) => {
    res.send("Server Running ✅");
});

/* ✅ Example API */


const userschema = new mongoose.Schema({
    amount: String,
    promocode: String,
    status: String
}
);

const Promocode = mongoose.model('promocodes', userschema)


/* ✅ MongoDB Connect */
mongoose.connect('mongodb://127.0.0.1:27017/joobearning')
    .then(() => console.log("MongoDB Connected ✅"))
    .catch(err => console.log("Mongo Error:", err));


app.get('/data', async (req, res) => {
    const okkk = await Promocode.find();
    res.json(okkk)
})

app.get("/api", (req, res) => {
    const okkk = await Promocode.find();
    res.json(okkk)
});


/* ✅ Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} 🚀`);
});