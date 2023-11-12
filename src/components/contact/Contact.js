import React from 'react'
import Back from '../common/back/Back'
import "./contact.css"
const Contact = () => {
    
  return (
    <div>
        <Back title="Contact Us"/>
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe title='h' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62206.492052472575!2d77.60236399561714!3d12.97787952635454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699783514209!5m2!1sen!2sin  " allowFullScreen="">

                    </iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>jjjjjjjjjjjjjj</p>
                    <div className='items grid2'>
                        <div className='box'>
                            <h4>ADDRESS</h4>
                            <p>194 hufeh ehwui,f4uhhuhhih3h,iihhuh huuh</p>
                        </div>
                        <div className='box'>
                            <h4>Email:</h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='box'>
                            <h4>PHONE NUMBER:</h4>
                            <p>4204206969</p>
                        </div>
                    </div>
                    <form action=''>
                        <div className='flexSB'>
                            <input type='text' placeholder='Name'/>
                            <input type='email' placeholder='Email'/>
                        </div>
                        <input type='email' placeholder='Subject'/>
                        <textarea  cols="30" rows="10">
                            Create a message here...
                        </textarea>
                        <button className="primary-btn">SEND MESSAGE</button>
                    </form>
                    <h3>Follow us Here</h3>
                    <span>FACEBOOK INSTAGRAM TWITTER DRIBBLE</span>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Contact