import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [click, setClick] = useState(false);

    // Check current screen size
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth > 768) {
                if (click) {
                    setClick(false);
                }
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [click]);

    return (
        <section className="nav-main">
            <div className="nav-top">
                <div className="logo">
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>
                </div>
                <div className="nav-social">
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
            <div className="nav-bottom">
                {click ? (
                    <ul className="mobile-nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/Research">Research</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/register">StudentPortal</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/Research">Research</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/register">StudentPortal</Link>
                        </li>
                    </ul>
                )}
                <div className="start">
                    <div className="button">GET CERTIFICATE</div>
                </div>
                <button className="toggle" onClick={() => setClick(!click)}>
                    {click ? (
                        <i className="fa fa-times"></i>
                    ) : (
                        <i className="fa fa-bars"></i>
                    )}
                </button>
            </div>
        </section>
    );
}
