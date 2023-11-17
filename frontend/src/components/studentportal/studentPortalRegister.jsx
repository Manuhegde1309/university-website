import { React, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./studentportal.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const StudentPortalRegister = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const registerUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            toast.error("Email is already exist");
        } else {
            setData({
                name: "",
                email: "",
                password: "",
            });
            toast.success("Successfully logged in");
            navigate("/login");
        }
    };

    return (
        <>
            <div className="authpage">
                <form onSubmit={registerUser}>
                    <div>
                        <label className="field">Name:</label>
                        <input
                            type="text"
                            placeholder="enter name"
                            value={data.name}
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label className="field">Email:</label>
                        <input
                            type="email"
                            placeholder="enter email"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
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
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <Link to="/login">
                        <button type="button">Login Page</button>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default StudentPortalRegister;
