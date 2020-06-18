const mongoose = require("mongoose"),
	  passportLocalMongoose = require("passport-local-mongoose");


// courseSchema
const courseSchema = new mongoose.Schema({
   code: String,
   title: String,
	urlOne: String,
	urlTwo: String,
   createdAt: { type: Date, default: Date.now }
});

// userSchema
const UserSchema = new mongoose.Schema({
    username: String,
	firstname: String,
	lastname: String,
	matric: {type: String, unique: true, required: true},
	phone: String,
    password: String,
    status: {type: String, default: "student"},
	dateCreated: {type: Date, default: Date.now}
});

UserSchema.plugin(passportLocalMongoose)
// ***********************


const model = {
	fresher: mongoose.model("Fresher", courseSchema),
	sop: mongoose.model("Sop", courseSchema),
	junior: mongoose.model("Junior", courseSchema),
	senior: mongoose.model("Senior", courseSchema),
	User: mongoose.model("User", UserSchema)
}



module.exports = model