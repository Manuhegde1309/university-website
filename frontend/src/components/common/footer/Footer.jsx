import { Link } from "react-router-dom";
import React from "react";
import "./footer.css";
import toast from "react-hot-toast";

const Footer = () => {
    function handleSubmit(e) {
        e.preventDefault();
        toast.success("Thank you for subscribe our newsletter!");
    }

    return (
        <>
            <section className="newletter">
                <h1>Newsletter -Stay tuned and get the latest updates</h1>
                <form className="right" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        required
                        placeholder="Enter email address"
                    />
                    <button type="submit">
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </form>
            </section>

            {/* footer  */}

            <footer>
                <div className="container">
                    <div className="box">
                        <h1>ACADEMIA</h1>
                        <span>online education and learning</span>
                        <ul>
                            <div className="half">
                                <Link className="footer-l" to="/">
                                    Home
                                </Link>
                                <Link className="footer-l" to="/courses">
                                    All Courses
                                </Link>
                                <Link className="footer-l" to="/about">
                                    About
                                </Link>
                            </div>
                            <div className="half">
                                <Link className="footer-l" to="/team">
                                    Team
                                </Link>
                                <Link className="footer-l" to="/journal">
                                    Research and Innovation
                                </Link>
                                <Link className="footer-l" to="/contact">
                                    Contact
                                </Link>
                                <Link className="footer-l" to="/register">
                                    StudentPortal
                                </Link>
                            </div>
                        </ul>
                        <div className="footer-socials">
                            <a href="https://facebook.com" target="_blank">
                                {" "}
                                <i className="fab fa-facebook-f icon"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                {" "}
                                <i className="fab fa-instagram icon"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                {" "}
                                <i className="fab fa-twitter icon"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                {" "}
                                <i className="fab fa-youtube icon"></i>
                            </a>
                        </div>
                    </div>
                    {/* <div className="explore-f">
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div> */}
                    <div className="address-f">
                        <h3>Have a Question?</h3>
                        <ul>
                            <li>
                                <i className="fa fa-map"></i>
                                location 100 Feet Ring Road,
                                <br />
                                Banashankari Stage III,
                                <br />
                                Dwaraka Nagar, Banashankari,
                                <br />
                                Bengaluru, Karnataka 560085
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                080102 97297
                            </li>
                            <li>
                                <i className="fa fa-paper-plane"></i>
                                info@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>Copyright 2023 All right reserved!</p>
                <p>
                    Made by Mohammed Furqaan, MD Azeem Fayaz, Manu Narayan Hegde
                </p>
            </div>
        </>
    );
};

export default Footer;
