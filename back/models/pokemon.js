const mongoose = require("mongoose")

const pokemon = mongoose.model("pokemon", {
    pokedex_id: String,
    name: String,
    type_1: String,
    type_2: String,
    total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    speed_atk: Number,
    speed_def: Number,
    speed: Number,
    generation: String,
    legendary: Boolean,
})

module.exports = pokemon;
