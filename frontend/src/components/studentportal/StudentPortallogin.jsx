import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./studentportal.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const StudentPortallogin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const user = await response.json();
            setUser(user);
            Cookies.set("token", user.token);
            navigate("/dashboard");
        } else {
            toast.error("Email or Password is wrong!");
        }
    };

    return (
        <>
            <div className="authpage">
                <form onSubmit={loginUser}>
                    <div>
                        <label className="field">Email:</label>
                        <input
                            type="email"
                            placeholder="enter email"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                            className="input"
                        />
                    </div>
                    <div>
                        <label className="field">password:</label>
                        <input
                            type="password"
                            placeholder="enter password"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                            className="input"
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <Link to="/register">
                        <button type="button">Register Page</button>
                    </Link>
                </form>
            </div>
        </>
    );
}; //onChange={(e)=>setData({...data,email:e.target.value})}

export default StudentPortallogin;
