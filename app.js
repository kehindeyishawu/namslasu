// Requiring packages
const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"),
	  passport  = require("passport"),
	  LocalStrategy = require("passport-local"),
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

// requiring models
const {fresher, sop, junior, senior} = require("./models/model.js");

// for(let i=0; i<4; i++){
// 	fresher.create({code:"MIC 301", title:"intro"}, (err, courses)=>{
// 		if(err){
// 			console.log(err.message);
// 			return
// 		}
// 		console.log("collection created")
// 	})
	
// 	sop.create({code:"MIC 301", title:"intro"}, (err, courses)=>{
// 		if(err){
// 			console.log(err.message);
// 			return
// 		}
// 		console.log("collection created")
// 	})
	
// 	junior.create({code:"MIC 301", title:"intro"}, (err, courses)=>{
// 		if(err){
// 			console.log(err.message);
// 			return
// 		}
// 		console.log("collection created")
// 	})
	
// 	senior.create({code:"MIC 301", title:"intro"}, (err, courses)=>{
// 		if(err){
// 			console.log(err.message);
// 			return
// 		}
// 		console.log("collection created")
// 	})
// }
// requiring and using routes
const routes = require("./routes/index.js");
app.use(routes)

// sever setup
app.listen(process.env.PORT || 3000, (req, res)=>{
	console.log("server is running on port 3000")
})