import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import NewAbout from "./newAbout/NewAbout";
import Footer from "../common/footer/Footer";

const About = () => {
    return (
        <>
            <Back title="About Us" />
            {/* <AboutCard /> */}
            <NewAbout />
            <Footer />
        </>
    );
};

export default About;
