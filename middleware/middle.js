const {fresher, sop, senior, junior, User} = require("../models/model.js");



const middleware = {
	verifyMatric : function(req, res, next){
		User.findOne({matric: req.body.matric}, (err, found)=>{
			if (err){
				console.log(`Error: ${err.message}`)
				next()
			}
			
			let mat = req.body.matric;
			let micro = mat.slice(3,6)
			let check = Number(req.body.matric);
			
			if ( check && mat.length === 9 ){
				if(micro === "561" ){
					next()
				}else{
					res.render("usernew", {error: "Only microbiology students can create account"})
				}
			}
			
			res.render("usernew", {error: "Matric number Is Incorrect"})
		})
	}
}