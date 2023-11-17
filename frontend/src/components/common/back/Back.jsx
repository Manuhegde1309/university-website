import React from "react";
import { useLocation } from "react-router-dom";
import "./back.css";

const Back = ({ title }) => {
    const location = useLocation();
    return (
        <>
            <section className="back-main">
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
        </>
    );
};

export default Back;
