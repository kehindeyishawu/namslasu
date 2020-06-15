const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
   code: String,
   title: String,
   createdAt: { type: Date, default: Date.now }
});

const model = {
	fresher: mongoose.model("Fresher", courseSchema),
	sop: mongoose.model("Sop", courseSchema),
	junior: mongoose.model("Junior", courseSchema),
	senior: mongoose.model("Senior", courseSchema)
}



module.exports = model