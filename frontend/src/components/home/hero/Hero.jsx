import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
import { Link } from "react-router-dom";
import Back from "../../common/back/Back";
const Hero = () => {
    return (
        <>
            <section className="hero">
                <Title subtitle="WELCOME TO ACADEMIA UNIVERSITY" title="Greetings" />
                <div className="hero-container">
                    <div className="chancellor-note">
                        <div className="chancellor-note-img">
                            <img
                                src="https://cdn.discordapp.com/attachments/1160163986424205352/1174312382026223638/image.png?ex=656722a1&is=6554ada1&hm=a16340dbf36d8cf2c6605816e29d652fa5c0bb5dedcf7b4603e6ce10e6d34706&"
                                alt="img"
                            />
                        </div>
                        <div className="chancellor-warp">
                            <p>
                                I am delighted to welcome you to our digital
                                space, where ideas flourish and connections
                                thrive. As the Chancellor, I am excited about
                                the possibilities that lie ahead and the
                                collective journey we are embarking on. Here,
                                innovation and knowledge converge to shape a
                                brighter future. Explore, engage, and be part of
                                our community dedicated to learning, discovery,
                                and meaningful conversations. Thank you for
                                being part of our online home.
                            </p>
                            <span>Warm regards,</span>
                            <span>Chancellor</span>
                        </div>
                    </div>

                    <button>
                        <Link to="/courses">
                            View Course{" "}
                            <i className="fa fa-long-arrow-alt-right"></i>
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Hero;
