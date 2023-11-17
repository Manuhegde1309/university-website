import { useState } from "react";
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer";
import "./contact.css";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "Create a message here...",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const openGmailCompose = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const recipientEmail = "furqaanpatel2004@gmail.com";
        // const mailtoLink = `mailto:recipient_email@example.com?subject=${encodeURIComponent(
        //     subject
        // )}&body=${encodeURIComponent(
        //     `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        // )}`;
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "Create a message here...",
        });
        // Open Gmail's compose window
        window.open(gmailLink, "_blank");
    };

    return (
        <>
            <Back title="Contact Us" />
            <section className="contact">
                <div className="container">
                    <div className="left">
                        <iframe
                            title="h"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62206.492052472575!2d77.60236399561714!3d12.97787952635454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699783514209!5m2!1sen!2sin  "
                            allowFullScreen=""
                        ></iframe>
                    </div>
                    <div className="right">
                        <h1>Contact Us</h1>
                        <form onSubmit={openGmailCompose}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            >
                                Create a message here...
                            </textarea>
                            <button type="submit" className="primary-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                        <div className="nav-social">
                            <a href="https://facebook.com" target="_blank">
                                <i className="fab fa-facebook-f icon"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <i className="fab fa-instagram icon"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <i className="fab fa-twitter icon"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                <i className="fab fa-youtube icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
