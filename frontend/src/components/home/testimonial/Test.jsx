import React from 'react'
import Title from '../../common/title/Title'
import { testimonal } from '../../../dummydata'
import "./style.css"

const Test = () => {
    return (
        <>
            <section className='testimonial'>
                <div className="container">
                    <Title subtitle="Testimonial" title="our successfull students" />
                    <div className="content">
                        {testimonal.map((val, i) => (
                            <div className="items shadow" key={i}>
                                <div className="box flex">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Test