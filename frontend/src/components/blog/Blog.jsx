import React from "react";
import BlogCard from "./BlogCard";
import Back from "../common/back/Back";
import "./blog.css";
import Footer from "../common/footer/Footer";
const Blog = () => {
    return (
        <>
            <Back title="Research Page" />
            <section className="blog">
                <div className="container">
                    <BlogCard />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
