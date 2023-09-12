import React from 'react'
import Layout from '../Components/Layout'
import "../Styles/Projects.css"
import projectImg from "../assets/projectImg.jpg"
import projectImg2 from "../assets/projectImg2.jpg"
const Projects = () => {
    return (
        <Layout>
            <section id="projects">
                <span className="projectPageTitle">Projects</span>
                <div className="projectInfo">
                    <div className="projectleft">
                        <img src={projectImg} alt='projectImg' className='prjectimg' />
                    </div>
                    <div className="projectright">
                        <span className="projectname">
                            Chat_Gpt Clone
                        </span>
                        <span className="projecttechnology">
                            Technology used:- MERN Stack
                        </span>
                        <span className="projectDesc">
                            This application is basically Chat_Gpt clone that have similar functionality as Chat_Gpt.In this application here we can chat with AI and generate paragraph and generate images and so on.
                        </span>
                    </div>
                    <div className="projectleft">
                        <img src={projectImg2} alt='projectImg2' className='prjectimg' />
                    </div>
                    <div className="projectright">
                        <span className="projectname">
                            Movies_App
                        </span>
                        <span className="projecttechnology">
                            Technology used:- React Js,Redux,Matarial UI,Rest API
                        </span>
                        <span className="projectDesc">
                            In this application we search any desire movies and also check it out its releasing year and collection and award and so on.
                        </span>
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default Projects