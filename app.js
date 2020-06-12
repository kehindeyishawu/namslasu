// Requiring packages
const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"),
	  methodOverride = require("method-override");

// Database config
mongoose.connect("mongodb+srv://nams:executivepass@cluster0-wog0h.mongodb.net/web?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(()=>{
	console.log("connected to DB!")
}).catch(err => {
	console.log("Error", err.message)
})

// configuring packages
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

// routes
app.get("/", (req, res)=>{
	res.render("index")
})

// sever setup
app.listen(process.env.PORT, (req, res)=>{
	console.log("server is running on port 3000")
})