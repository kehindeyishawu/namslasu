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
	matric: {type: String, required: true},
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

// model.senior.create({
// 	code: "MIC 413",
// 	title: "Principles of Epidemiology and Public Health",
// 	urlOne: "https://drive.google.com/drive/folders/11VUl9gTbyfmmV7pmsjmAHzUDyggfnAF0?usp=drive_link",
// 	urlTwo: "https://drive.google.com/drive/folders/13ViA7AbqB3AJN78UToAb67anqYuLcbEs?usp=drive_link"
// }).then((course)=>{console.log(`Course Created \n ${course}`)}).catch((err)=>{console.log("error" +"\n" + err.message)})

module.exports = model