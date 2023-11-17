import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
    return (
        <section className=" team">
            {team.map((val) => (
                <div className="items">
                    <div className="img">
                        <img src={val.cover} alt="" />
                        <div className="overlay">
                            <a href="https://facebook.com" target="_blank">
                                <i className="fab fa-facebook-f icon"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <i className="fab fa-instagram icon"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <i className="fab fa-twitter icon"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                <i className="fab fa-youtube icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default TeamCard;
