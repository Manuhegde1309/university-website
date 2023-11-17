import React from "react";
import "./Corec.css";
import Coreform from "./coreform/Coreform";

export default function CoreCourses() {
    return (
        <>
            <div className="core-courses">
                <h1>university core courses</h1>
                <div className="core-container">
                    <div className="core">
                        <h2>Undergraduate</h2>
                        <div className="type">
                            <span>BTech (CSE, ECE, BT, CIVIL, ISE)</span>
                            <span>BArch</span>
                            <span>BBA</span>
                            <span>BCA</span>
                            <span>BA (Arts, Science)</span>
                        </div>
                        <div className="line"></div>
                        <div className="core-price">
                            <span>BTech - 1.19Lac per year</span>
                            <span>BBA,BCA.. - 90K per year</span>
                        </div>
                    </div>
                    <div className="core">
                        <h2>Postgraduate</h2>
                        <div className="type">
                            <span>MTech (CSE, ECE, BT, CIVIL, ISE)</span>
                            <span>MArch</span>
                            <span>MBA</span>
                            <span>MCA</span>
                            <span>MA (Arts, Science)</span>
                        </div>
                        <div className="line"></div>
                        <div className="core-price">
                            <span>MTech - 2.5Lac per year</span>
                            <span>MBA,MCA.. - 1Lac per year</span>
                        </div>
                    </div>
                </div>
            </div>
            <Coreform />
        </>
    );
}
