const express = require("express"),
	  router = express.Router(),
	  passport = require("passport"),
	  {fresher, sop, senior, junior, User} = require("../models/model.js");


router.get("/template", (req, res)=>{
	res.render("template")
})

router.get("/", (req, res)=>{
	res.render("index")
})

router.get("/fresher", (req, res)=>{
	fresher.find({}, (err, courses)=>{
		if(err){
			console.log(err.message)
			res.redirect("/")
			return
		}
		
		res.render("courses/fresher/index", {course:courses, level:"100"})
	})
	
})

router.get("/sop", (req, res)=>{
	sop.find({}, (err, courses)=>{
		if(err){
			console.log(err.message)
			res.redirect("/")
			return
		}
		
		res.render("courses/fresher/index", {course:courses, level:"200"})
	})
	
})

router.get("/junior", (req, res)=>{
	junior.find({}, (err, courses)=>{
		if(err){
			console.log(err.message)
			res.redirect("/")
			return
		}
		
		res.render("courses/fresher/index", {course:courses, level:"300"})
	})
	
})

router.get("/senior", (req, res)=>{
	senior.find({}, (err, courses)=>{
		if(err){
			console.log(err.message)
			res.redirect("/")
			return
		}
		
		res.render("courses/fresher/index", {course:courses, level:"400"})
	})
	
})


// login form
router.get("/login", (req, res)=>{
	res.render("login")
})
// login logic

// **********************

// signup form
router.get("/signup", (req, res)=>{
	res.render("usernew")
})
// signup logic
router.post("/signup", (req, res)=>{
	res.render("template")
})


module.exports = router;