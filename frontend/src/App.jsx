import "./App.css";
//import {BrowserRouter as Router} from "react-router-dom"
//import { Route, Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Price from "./components/pricing/Price";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import StudentPortallogin from "./components/studentportal/StudentPortallogin"
import StudentPortalRegister from "./components/studentportal/studentPortalRegister";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import StudentPortallogin from "./components/studentportal/StudentPortallogin";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/home/dashboard/dashboard";

//import StudentPortallogin from "./components/studentportal/StudentPortallogin"
//import { UserContextProvider } from "./context/userContext"
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const App = () => {
    return (
        <main className="app-main">
            <Router>
                <Navbar />
                <Toaster
                    position="top-center"
                    toastOptions={{ duration: 3000 }}
                />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<CourseHome />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/pricing" element={<Price />} />
                    <Route path="/Research" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/register"
                        element={<StudentPortalRegister />}
                    />
                    <Route path="/login" element={<StudentPortallogin />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </main>
    );
};
export default App;
