const express = require("express"),
	  router = express.Router(),
	  {fresher, sop, senior, junior} = require("../models/model.js");


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

router.get("/login", (req, res)=>{
	res.render("login")
})

router.get("/signup", (req, res)=>{
	res.render("usernew")
})

module.exports = router;