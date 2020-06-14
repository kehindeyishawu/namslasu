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


// // requiring routes
// const routes = require("./routes/index.js");

// // using routes
// app.use(routes)


// routes
app.get("/", (req, res)=>{
	res.render("index")
})
app.get("/login", (req, res)=>{
	res.render("sample")
})

// sever setup
app.listen(process.env.PORT || 3000, (req, res)=>{
	console.log("server is running on port 3000")
})