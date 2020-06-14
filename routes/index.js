const express = require("express"),
	  router = express.Router();


router.get("/template", (req, res)=>{
	res.render("template")
})

router.get("/", (req, res)=>{
	res. render("index")
})

router.get("/fresher", (req, res)=>{
	res.render("courses/fresher/index")
})

module.exports = router;