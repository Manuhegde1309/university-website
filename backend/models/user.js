const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
});

const courseSchema = new mongoose.Schema({
    userId: String,
    courseId: String,
    cover: String,
    name: String,
    courTeacher: [
        {
            dcover: String,
            name: String,
            totalTime: String,
        },
    ],
    priceAll: String,
    pricePer: String,
    link: String,
});

const Course = mongoose.model("Course", courseSchema);

const User = mongoose.model("User", userSchema);

module.exports = { Course, User };
