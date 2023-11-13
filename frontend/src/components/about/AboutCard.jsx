import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import  "./about.css";

const AboutCard = () => {
  return (
    <>
    <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
               <img src="https://as1.ftcdn.net/v2/jpg/06/43/76/96/1000_F_643769628_5gF0RqlVEWlkzlRI78FpFmlqgNvrqVdQ.webp" alt="" />
            </div>
            <div className="right row">
                <Title subtitle="Learn Anything" title="Benefits about college"/>
                <div className="items">
                    {homeAbout.map((val)=>(
                        <div className='item flexSB'>
                            <div className='img'>
                                <img src={val.cover} alt=''/>
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                            
                    ))}
                </div>
            </div>
        </div>

        </section>
        <AWrapper/>
    </>
  )
}

export default AboutCard