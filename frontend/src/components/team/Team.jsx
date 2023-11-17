import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Footer from "../common/footer/Footer";
const Team = () => {
    return (
        <>
            <Back title="team" />
            <TeamCard />
            <Footer />
        </>
    );
};

export default Team;
