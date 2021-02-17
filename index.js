
const express = require("express");
const cors = require("cors");
const Paragraph = require("./models/Data");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");  
const dotenv = require("dotenv")
const data = require("./Data")
const getAllParagraph = require("./controllers/index")


const app = express()

//middlewares  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config()

const dbUrl = process.env.DB_CONNECTION
                                                
const connectionParams = {
        useNewUrlParser: true,                       
	useUnifiedTopology: true,
        useCreateIndex: true
}

mongoose.connect(dbUrl, connectionParams)                               .then(() => {
                console.log('connected to db')
        })
        .catch((err) => {
                console.log(err)                                        })


app.get("/", getAllParagraph)

app.get("/api", (req,res) => {
	res.json(data)
})

const savePara = async () => {
	data.map(async (item) => {
const para = await new Paragraph({paragraph: item});
para.save((err, saved) => {
	if (err) {console.error(err)}
	else{
		console.log('saved')
	}});
})};

app.use(cors({origin:true,credentials: true}));

const PORT = 5000 || process.env.PORT

app.listen( PORT, () => {
	console.log(`server started at port: ${PORT}`)
})
