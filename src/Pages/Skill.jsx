import React from 'react'
import Layout from '../Components/Layout'
import "./../Styles/Skill.css";
const Skill = () => {
    return (
        <Layout>
            <section id="skills">
                <span className="skillTitle">SKILLS</span>
                <span className="desc">In programming, a "skill" refers to the ability or proficiency in performing specific tasks or solving problems related to coding, software development, and computer science. These skills encompass a wide range of abilities</span>
                <span className="desc">Here is all skill that i have learned during my graduation and that's all.</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <p>HTML</p>
                        </span>
                        <div class="container">
                            <div class="skills html">90%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <p>CSS</p>
                        </span>
                        <div class="container">
                            <div class="skills css">80%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <p>JavaScript</p>
                        </span>
                        <div class="container">
                            <div class="skills js">65%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            <p>Java</p>
                        </span>
                        <div class="container">
                            <div class="skills java">78%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <p>React</p>
                        </span>
                        <div class="container">
                            <div class="skills react">70%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <p>Node</p>
                        </span>
                        <div class="container">
                            <div class="skills node">53%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                            <p>MongoDb</p>
                        </span>
                        <div class="container">
                            <div class="skills mongo">67%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <p>Express</p>
                        </span>
                        <div class="container">
                            <div class="skills express">45%%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <p>SQL</p>
                        </span>
                        <div class="container">
                            <div class="skills sql">61%</div>
                        </div>
                    </div>
                    <div className="skillBar">
                        <span id="logo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                            <p>C</p>
                        </span>
                        <div class="container">
                            <div class="skills c">50%</div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Skill