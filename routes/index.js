const express = require("express"),
	  router = express.Router();


router.get("/template", (req, res)=>{
	res.render("template")
})

router.get("/", (req, res)=>{
	res. render("index")
})

module.exports = router;