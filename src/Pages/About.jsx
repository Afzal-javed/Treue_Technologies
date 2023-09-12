import React from 'react'
import Layout from '../Components/Layout'
import "./../Styles/About.css"
import ExamplePdf from "../assets/Resume.pdf";
const About = () => {
    return (
        <Layout>
            <section id="skillsAbout">
                <span className="skillTitle">What I do ?</span>
                <div className="allskill">
                    <span className="skillDesc1">A web developer is like a digital builder who creates and maintains websites on the internet. They use a combination of programming languages, like HTML, CSS, and JavaScript, to design and construct web pages that you see on your computer or smartphone. Web developers make sure websites look good, work properly, and are user-friendly. They can build simple websites or complex web applications, depending on the project's needs. In essence, they bring the ideas and designs for websites to life on the internet for people to access and use.</span>
                    <br />
                    <span className="skillDesc">A MERN stack developer is like a digital builder who creates websites and web applications. They use four main tools to do their job:</span>
                    <br />
                    <ol className="list">
                        <li><span>MongoDB</span>: Think of it like a smart filing cabinet for storing data. It helps the developer keep track of information.</li>
                        <li><span>Express</span>: This is like a bridge that connects the data cabinet (MongoDB) to the web. It makes sure information goes where it needs to on the internet</li>
                        <li><span>React</span>: magine this as the part of the website you see and interact with. It's like the front door of a house, where users come in and use the website..</li>
                        <li><span>Node</span>: Think of this as the engine that powers everything. It handles requests, like when you click a button on a website, and makes sure the website works smoothly</li>
                    </ol>
                    <span>So, a MERN stack developer is a person who uses these four tools to build websites and apps that look good and work well on the internet.</span>
                </div>
                <span className='resume'>RESUME</span>
                <div className="btn1">
                    <a
                        href={ExamplePdf}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Download</button>
                    </a>
                </div>
            </section>
        </Layout>
    )
}

export default About