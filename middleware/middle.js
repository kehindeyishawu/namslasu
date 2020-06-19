const {fresher, sop, senior, junior, User} = require("../models/model.js");



const middleware = {
	verifyMatric : function(req, res, next){
		User.find({matric: req.body.matric}, (err, found)=>{
			if (err || !found){
				console.log(`Error: ${err.message}`)
				next()
			}
			console.log(found)
			if(found.length > 0){
				res.render("usernew", {error:"There is a user with that matric number already"})
			}else{
				
				
				let mat = req.body.matric;
			    let micro = mat.slice(2,6)
			    let check = Number(req.body.matric);
			
				if ( check && mat.length === 9 ){
					if(micro === "0561" ){
						next()
					}else{
						res.render("usernew", {error: "Only microbiology students can create account"})
					}
				}else{
					res.render("usernew", {error: "Matric number Is Incorrect"})
				}
			
				
			}
			
		})
		
			
	},
	
	isLoggedIn : function(req, res, next) {
        if(req.isAuthenticated()){
           return next()
        }
        req.flash("error", "You must be a loggedin to do this")
        res.redirect("/login")
    },
	
	isSignin : function(req, res, next) {
        if(req.isAuthenticated()){
           req.flash("error", "You are already signed in")
           res.redirect("/")
        }
    }
}

module.exports = middleware;