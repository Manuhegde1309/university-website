const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const { mongoose } = require("mongoose");
const { Course } = require("./models/user.js");
const StudentForm = require("./models/studentForm.js");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));

app.post("/addform", async (req, res) => {
    const studentFormData = req.body;
    // console.log(studentFormData);
    try {
        const newForm = new StudentForm({
            studentName: studentFormData.studentName,
            fatherName: studentFormData.fatherName,
            motherName: studentFormData.motherName,
            collegeName: studentFormData.collegeName,
            schoolName: studentFormData.schoolName,
            class10Marks: studentFormData.class10Marks,
            class10Percentage: studentFormData.class10Percentage,
            class12Marks: studentFormData.class12Marks,
            class12Percentage: studentFormData.class12Percentage,
            address: studentFormData.address,
            aadharNumber: studentFormData.aadharNumber,
            courseSelection: studentFormData.courseSelection,
            userId: studentFormData.userId,
        });

        newForm
            .save()
            .then(() => {
                console.log("Form data saved successfully");
                res.status(200).json("Form data saved successfully");
            })
            .catch((error) => {
                console.error("Error saving form data:", error);
                res.status(500).json("can't add form");
            });
    } catch (error) {
        res.status(500).json("can't add form");
    }
});

app.post("/addcourse", async (req, res) => {
    const courseData = req.body;
    // console.log(courseData);
    try {
        const newCourse = new Course({
            courseId: courseData.id,
            cover: courseData.cover,
            name: courseData.coursesName,
            courTeacher: courseData.courTeacher,
            priceAll: courseData.priceAll,
            pricePer: courseData.pricePer,
            userId: courseData.userId,
            link: courseData.link,
        });
        await newCourse.save();
        console.log("Course data saved successfully");
        res.status(200).json("Course data saved successfully");
    } catch (error) {
        res.status(500).json("can't add course");
    }
});

app.get("/myallcourse/:userId", async (req, res) => {
    const { userId } = req.params;
    // console.log(userId);

    await Course.find({ userId: userId })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(null);
        });
});

const port = 4000;
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("database connected");
        app.listen(port, () =>
            console.log("Server is running on port " + port)
        );
    })
    .catch((err) => console.log("database not connected", err));
