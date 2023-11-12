import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className='row'>
          <Title subtitle='WELCOME TO ACADEMIA' title="GTREEDFFRTG"/>
          <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          <div className="button">
            <button className="primary-btn">
              GET STARTED NOW <i className="fa fa-long-arrow-right" aria-hidden="false"></i>
            </button>
            <button>
              View Course <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            
          </div>
        </div>
      </div>
    </section>
    <div className="marigin"></div>
    </>
  )
}

export default Hero