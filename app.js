// Requiring packages
const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"),
	  passport  = require("passport"),
	  LocalStrategy = require("passport-local"),
	  passportLocalMongoose = require("passport-local-mongoose"),
	  flash = require("connect-flash"),
	  session = require("express-session"),
	  middle = require("./middleware/middle.js"),
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
const {fresher, sop, junior, senior, User} = require("./models/model.js");

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

// passport & connect-flash config
app.use(require("express-session")({
  secret: "good",
  resave: false,
  saveUninitialized: false
}))

// flash config
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())
// ********************

// Passing global Values Into Routes
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
// ***************

// requiring and using routes
const routes = require("./routes/index.js");
app.use(routes)

// sever setup
app.listen(process.env.PORT || 3000, (req, res)=>{
	console.log("server is running on port 3000")
})