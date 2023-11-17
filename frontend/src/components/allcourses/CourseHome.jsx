import React from "react";
import Back from "../common/back/Back";
import CourseCard from "./CourseCard";
import Footer from "../common/footer/Footer";
import CoreCourses from "./CoreCourses";

const CourseHome = () => {
    return (
        <>
            <Back title="explore Courses" />
            <CourseCard />
            <CoreCourses />
            <Footer />
        </>
    );
};

export default CourseHome;
