import React, { useRef } from 'react'
import Layout from '../Components/Layout'
import google from "../assets/google.png";
import micro from "../assets/microsoft.png";
import amazon from "../assets/amazon.png";
import facebook from "../assets/facebook.png";
import emailjs from "@emailjs/browser";
import linkedin2 from "../assets/linkedin2.ico";
import github from "../assets/github3.png";
import twitter from "../assets/twitter.ico";
import insta from "../assets/insta.png";
import "./../Styles/Contact.css";
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b68m97a', 'template_g64iwot', form.current, 'zXPIevIs925mpCLG_')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent Successfully !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Layout>
            <div id="contactPage">
                <h1 className="clientPageTitle">
                    My Clients
                </h1>
                <p className="clientDesc">
                    I had the opportunity to work with a diverse group of companies.
                    Some of the noted companies I have work with includes
                </p>
                <div className="clientImgs">
                    <img src={google} alt="client" className="clientImg1" />
                    <img src={micro} alt="client" className="clientImg2" />
                    <img src={amazon} alt="client" className="clientImg3" />
                    <img src={facebook} alt="client" className="clientImg4" />
                </div>
                <div className="contact">
                    <span className="contactPageTitle">
                        Contact Me
                    </span>

                    <span className="contactDesc">Please fill out the form below to discuss any work opportunity</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name='your_name' />
                        <input type="text" className="email" placeholder='Your Email' name='your_email' />
                        <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                        <button type='submit' value='Send' className="submitbtn">Submit</button>
                    </form>
                </div>
                <div className="logos">
                    <img src={linkedin2} alt='linkedin' onClick={() => window.open("https://www.linkedin.com/in/afzal-javed/")} />
                    <img id='github' src={github} alt='github' onClick={() => window.open("https://github.com/Afzal-javed/")} />
                    <img src={twitter} alt='twitter' onClick={() => window.open(" https://twitter.com/ShaikhAJ10?t=oSQ09AnJeSgvYCxOT3p3jg&s=08")} />
                    <img id='insta' src={insta} alt='insta' onClick={() => window.open("https://instagram.com/shaikh_afzal_javed?igshid=ZGUzMzM3NWJiOQ==")} />
                </div>
            </div>
        </Layout>
    )
}

export default Contact