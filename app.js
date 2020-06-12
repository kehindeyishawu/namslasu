// Requiring packages
const express = require("express"),
	  app = express(),
	  bodyParser = express("body-parser"),
	  mongoose = require("mongoose")
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


// routes
app.get("/", (req, res)=>{
	res.send("sometimes is this thing on????")
})

// sever setup
app.listen(3000, (req, res)=>{
	console.log("server is running on port 3000")
})