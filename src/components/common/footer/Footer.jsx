import React from 'react'
import "./footer.css"
import { blog } from '../../../dummydata'
const Footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>Newsletter -Stay tuned and get the latest updates</h1>
                <span>hhhjkwhiugiuqhuhi</span>

            </div>
            <div className='right row'>
                <input type='text' placeholder='Enter email address'/>
                <i className="fa fa-paper-plane"></i>
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>online education and learning</span>
                <p>ffffffffffffffffffffffffffffffffffffffffffffff</p>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-youtube icon'></i>
            </div>
            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='box'>
                <h3>Recent Post</h3>
                {blog.slice(0,3).map((val)=>{
                    return (<div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt=''/>
                        </div>
                        <div className="text">
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="box last">
                <h3>Have a Question?</h3>
                <ul>
                    <li>
                        <i className='fa fa-map'></i>
                        fffffffffffffffhhhhhhhhhhhjkkkkkkkkkkjhf
                    </li>
                    <li>
                        <i className='fa fa-phone'></i>
                        4204206969
                    </li>
                    <li>
                        <i className='fa fa-paper-plane'></i>
                        info@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>Cpoyright 2020 All right reserved ! this template is made with <i className='fa fa-heart'></i></p>
    </div>
    </>
  )
}

export default Footer