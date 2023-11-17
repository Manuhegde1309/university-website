import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument"; // Replace 'MyDocument' with the actual name of your PDF document component
import "./coreform.css";
import toast from "react-hot-toast";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";

const Coreform = () => {
    const [formData, setFormData] = useState({
        studentName: "",
        fatherName: "",
        motherName: "",
        collegeName: "",
        schoolName: "",
        class10Marks: "",
        class10Percentage: "",
        class12Marks: "",
        class12Percentage: "",
        address: "",
        aadharNumber: "",
        courseSelection: "",
    });

    const { user } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user?.id) {
            const updatedForm = { ...formData, userId: user.id };
            // console.log("Form submitted:", formData);
            await fetch("http://localhost:4000/addform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(updatedForm),
            })
                .then(() => {
                    toast.success(
                        "Download and submit the pdf in the office please!",
                        {
                            duration: 6000,
                        }
                    );
                })
                .catch((err) => {
                    toast.error("Error while sending the form: ", err.message);
                });
        }
    };

    return (
        <div className="coreform-main">
            <form onSubmit={handleSubmit}>
                {/* Your form fields */}
                <div className="form-fields">
                    <label>
                        Student Name:
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Father Name:
                        <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Mother Name:
                        <input
                            type="text"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        College Name:
                        <input
                            type="text"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        School Name:
                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        10th Mark:
                        <input
                            type="text"
                            name="class10Marks"
                            value={formData.class10Marks}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        10th Percentage:
                        <input
                            type="text"
                            name="class10Percentage"
                            value={formData.class10Percentage}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        12th Mark:
                        <input
                            type="text"
                            name="class12Marks"
                            value={formData.class12Marks}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        12th Percentage:
                        <input
                            type="text"
                            name="class12Percentage"
                            value={formData.class12Percentage}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Aadhar Number:
                        <input
                            type="text"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                {/* Other form fields go here */}

                {/* Course selection */}
                <label className="course-select">
                    Course Selection:
                    <select
                        name="courseSelection"
                        value={formData.courseSelection}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a course</option>
                        <optgroup label="Undergraduate">
                            <option value="btech-cse">B.Tech - CSE</option>
                            <option value="btech-ece">B.Tech - ECE</option>
                            <option value="btech-bt">B.Tech - BT</option>
                            <option value="btech-civil">B.Tech - CIVIL</option>
                            <option value="btech-ise">B.Tech - ISE</option>
                            <option value="barch">BArch</option>
                            <option value="bba">BBA</option>
                            <option value="bca">BCA</option>
                            <option value="ba-arts">BA - Arts</option>
                            <option value="ba-science">BA - Science</option>
                            {/* Add more undergraduate options */}
                        </optgroup>
                        <optgroup label="Postgraduate">
                            <option value="mtech-cse">M.Tech - CSE</option>
                            <option value="mtech-cse">M.Tech - ECE</option>
                            <option value="mtech-cse">M.Tech - BT</option>
                            <option value="mtech-cse">M.Tech - CIVIL</option>
                            <option value="mtech-cse">M.Tech - ISE</option>
                            <option value="btech-ece">BArch</option>
                            <option value="mba">MBA</option>
                            <option value="btech-ece">MCA</option>
                            <option value="btech-ece">MA - Arts</option>
                            <option value="btech-ece">MA - Science</option>
                            {/* Add more postgraduate options */}
                        </optgroup>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>

            {/* Display PDF download link */}
            {formData.courseSelection && (
                <PDFDownloadLink
                    document={<MyDocument formData={formData} />}
                    fileName="student_details.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download PDF"
                    }
                </PDFDownloadLink>
            )}
        </div>
    );
};

export default Coreform;
