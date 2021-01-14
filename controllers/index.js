const Paragraph = require("../models/Data.js")

const getAllParagraph = async ( req, res, next ) => {
	if(!req.query.paragraphNO) {
		try{
			const paragraphs = await Paragraph.find();
			res.json(paragraphs)
		}catch(err){
			console.log(err)
		}
	} 
	const paragraphNumber = req.query.paragraphNO
	try{
	const paragraphs = await Paragraph.find().limit(paragraphNumber).lean()
	res.json(paragraphs)
	}catch(err){
		console.err(err)
	}
}

module.exports = getAllParagraph
