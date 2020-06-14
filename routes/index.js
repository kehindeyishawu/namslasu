const  express = require("express"),
	  router = express.Router();

router.get("/", (req, res)=>{
	res.render("index")
})


router.get("/login", (req, res)=>{
	res.render("sample")
})



module.exports=router;