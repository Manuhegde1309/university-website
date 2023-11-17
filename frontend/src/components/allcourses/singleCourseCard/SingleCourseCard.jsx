import React from "react";
import "./singleCourseCard.css";

function SingleCourseCard({ val, key, addCourseToList, added }) {
    return (
        <div className="items" key={key}>
            <div className="content">
                <div className="img">
                    <img src={val.cover} alt="" />
                </div>
                <div className="text">
                    <h1>{added ? val.name : val.coursesName}</h1>
                    <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                        {val.courTeacher.map((details, i) => (
                            <>
                                <div className="box" key={i}>
                                    <div className="dimg">
                                        <img src={details.dcover} alt="" />
                                    </div>
                                    <div className="para">
                                        <h4>{details.name}</h4>
                                    </div>
                                    <span>{details.totalTime}</span>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="price">
                <h3>
                    {val.priceAll}/{val.pricePer}
                </h3>
            </div>
            {added ? (
                <a className="outline-btn" href={val.link} target="_blank">
                    Watch Video's
                </a>
            ) : (
                <button
                    className="outline-btn"
                    onClick={() => addCourseToList(val)}
                >
                    ENROLL NOW!
                </button>
            )}
        </div>
    );
}

export default SingleCourseCard;
