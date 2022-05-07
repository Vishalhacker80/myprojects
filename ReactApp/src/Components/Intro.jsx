import React from 'react'
import './intro.css'
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy1 from '../img/boy1.png'
import thumbup from '../img/thumbup.png'
import crown from '../img/crown.png'
import glassesimoji from '../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Vishal Bisht</span>
                    <span><strong>FullStack developer</strong> with high level of experience in web designing and Database Mangement on MySQL and Some basic knowledge on <strong>Ethical Hacking</strong> !!</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href='#'><img src={Github} alt="load" /></a>
                    <a href='#'><img src={LinkedIn} alt="load" /></a>
                    <a href='#'> <img src={Instagram} alt="load" /></a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt='load' />
                <img src={Vector2} alt='load' />
                <img src={boy1} alt='load' />
                <img src={glassesimoji} alt='load' />
                <div style={{ top: '-4%', left: '60%' }}>
                    <FloatingDiv imag={crown} txt='web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv imag={thumbup} txt='Ethical Hacker' txt2='Intermediate Level' />
                </div>
                { /*  Blurr Div  */}
                <div className="blur" style={{ background: ' rgba(175 104 219 0.5)' }}></div>
                <div className="blur" style={{ background: ' rgba(104 171 219 0.9', top: '1rem', width: '21rem', height: '11rem ', left: '-9rem' }}></div>

            </div>
        </div>
    )
}

export default Intro;