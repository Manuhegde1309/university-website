const mongoose = require("mongoose");

const studentFormSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    class10Marks: {
        type: String,
        required: true,
    },
    class10Percentage: {
        type: String,
        required: true,
    },
    class12Marks: {
        type: String,
        required: true,
    },
    class12Percentage: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true,
    },
    courseSelection: {
        type: String,
        required: true,
    },
});

const StudentForm = mongoose.model("StudentForm", studentFormSchema);

module.exports = StudentForm;
