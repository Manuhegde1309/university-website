import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <>
    <section className='online'>
        <div className="container">
            <Title subtitle="Courses" title="Browse our online courses"/>
            <div className="content grid3">
                {online.map((val)=>(
                    <div className="box">
                        
                        <h1>{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default OnlineCourses