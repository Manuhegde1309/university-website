import React from "react";
import { coursesCard } from "../../dummydata";
import SingleCourseCard from "./singleCourseCard/SingleCourseCard";
import "./courses.css";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    async function addCourseToList(course) {
        if (user?.id) {
            const newCourse = { ...course, userId: user.id };
            const response = await fetch("http://localhost:4000/addcourse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(newCourse),
            });
            if (response.ok) {
                toast.success("Added!");
            } else {
                toast.error("Something went Wrong!");
            }
        } else {
            navigate("/login");
        }
    }

    return (
        <>
            <Toaster />
            <section className="coursesCard">
                <div className="container">
                    {coursesCard?.map((val, i) => {
                        return (
                            <div key={i} className="coursecard-container">
                                <SingleCourseCard
                                    val={val}
                                    added={false}
                                    addCourseToList={addCourseToList}
                                    key={i}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default CourseCard;
