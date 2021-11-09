const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
const pokemon = require("./models/pokemon")

const connection = mongoose.connect("mongodb://localhost:27017/pokedex")

app.use(cors());

app.use(express.json());

app.get("/get/pokemon", async (_, res) => {
    const result = await pokemon.find()
    return res.json(result)
});


app.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;
    console.log(name)
    const result = await pokemon.find({ name: new RegExp(name, 'i') })
    res.json(result)
    console.log(result);
});
app.listen(4322, () => {
    console.log('AEHOOOOOO')
})






