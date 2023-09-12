import React from 'react'
import Layout from '../Components/Layout'
import myPic1 from "../../src/assets/myPic1.png";
import { Link } from 'react-scroll';
import WorkIcon from '@mui/icons-material/Work';
import "./../Styles/Home.css";
const Home = () => {
    return (
        <Layout>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,everyone</span>
                    <span className="introText">I'm <span className="introName">Afzal Javed <br /> MERN Stact Developer</span></span>
                    <p className="introPara">I am a skilled  MERN Stack Developer with experience to<br /> develped a web App</p>
                    <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={600}><button className="btn" >
                        <WorkIcon sx={{ objectFit: "cover", margin: "0 0.25rem", height: "1.12rem" }} />
                        Hire Me
                    </button></Link>
                </div>
                <img src={myPic1} alt='myPic1' className='bg' />
            </section>
        </Layout>
    )
}

export default Home