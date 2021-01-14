const mongoose = require("mongoose")

const DataSchema = mongoose.Schema({
	paragraph: {type: String, required: true}})

module.exports = mongoose.model("Paragraph", DataSchema)
