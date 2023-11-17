import React from "react";
import { research } from "../../dummydata";
import "./blog.css";
const BlogCard = () => {
    return (
        <>
            {research.map((val, i) => (
                <div className="items" key={i}>
                    <h6>No: {i + 1}</h6>
                    <h2>{val.topic}</h2>
                    <h4>Professor : {val.professor}</h4>
                    <p>{val.points}</p>
                    <a href={val.link} target="_blank">
                        Click to read more..
                    </a>
                </div>
            ))}
        </>
    );
};

export default BlogCard;
