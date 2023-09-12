import React from 'react'
import Layout from '../Components/Layout'
import "./../Styles/Education.css"
import collegeImg from "../assets/collagePic.avif";
const Education = () => {
    return (
        <Layout>
            <section id="education">
                <span className="educationTitle">Education</span>
                <div className="collageInfo">
                    <div className="left">
                        <span className="collageName">Dr. A.P.J Abdul Kalam Technical University,Lucknow</span>
                        <span className="course">Bachelor of Technology</span>
                        <span className="branch">Computer Science and Engineering</span>
                        <span className="year">2019-2023</span>
                        <span className="year">CGPA -- 7.45</span>
                        <span className="desc">I college experience was a collaborative one, with projects and teamwork enabling Me and my peers to create impressive computer-based solutions. I encountered challenges, including those elusive programming bugs that required my problem-solving skills.
                            Now, as a graduate computer science engineer, I possess a wealth of knowledge and expertise, poised to apply my skills to shape the technological future.
                        </span>
                    </div>
                    <div className="right">
                        <img src={collegeImg} alt="collageImage" className='collagePic' />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Education