import axios from "axios";
import { createContext, useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const token = Cookies.get("token");
        const getUserData = async () => {
            const response = await fetch("http://localhost:4000/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const userDetailsData = await response.json();
                // console.log(userDetailsData);
                setUser(userDetailsData);
            }
        };
        if (!user) {
            if (token) {
                getUserData();
            }
        }
    }, [user]);
    const fetchCourse = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:4000/myallcourse/${user.id}`
            );
            console.log("Response status:", response.status);

            if (response.ok) {
                const data = await response.json();
                console.log("Fetched data:", data);
                setCourses(data);
            } else {
                console.log("Failed to fetch courses");
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }, [user]);
    useEffect(() => {
        if (user?.id) {
            fetchCourse();
        }
    }, [user, fetchCourse]);
    return (
        <UserContext.Provider value={{ user, setUser, courses }}>
            {children}
        </UserContext.Provider>
    );
}
