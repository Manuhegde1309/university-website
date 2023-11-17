import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import Back from "../../common/back/Back";
import Cookies from "js-cookie";
import SingleCourseCard from "../../allcourses/singleCourseCard/singleCourseCard";

export default function Dashboard() {
    const { user, setUser, courses } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const Logout = () => {
        const handleLogout = () => {
            Cookies.remove("token");
            setUser(null);
            navigate("/login");
        };
        handleLogout();
    };

    return (
        <>
            <div className="log-out" onClick={Logout}>
                <button>Logout</button>
            </div>
            <Back title="Your Courses" />
            <div className="dashboard-main">
                <h1>Welcome {user?.name}!</h1>
                {courses?.length > 0 ? (
                    <div className="all-courses">
                        {courses?.map((val, i) => (
                            <div className="card-container" key={i}>
                                <SingleCourseCard
                                    key={i}
                                    val={val}
                                    added={true}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>You didn't add any course yet !</div>
                )}
            </div>
        </>
    );
}
