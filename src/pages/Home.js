import React from 'react'
import "../styles/Home.css"

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Home() {



    return (
        <div className="home">
            <div className="about">
                <h2>Hi,My Name is Monuj</h2>
                <div className='prompt'>
                    <p>A student with a passion for learning and creating</p>
                    <a href='https://www.linkedin.com/in/monujgogoi'><LinkedInIcon /></a>
                    <button className='email'><EmailIcon /></button>
                    <a href='https://github.com/Monuj123' ><GitHubIcon /></a>

                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>HTML5,CSS,ReactJS,Bootstrap,MaterialUI</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>C++,C,JavaScript,Python</span>
                    </li>
                    {/* <li className='item'>
                        <h2>Courses taken</h2>
                        <span>Linear Algebra,Basic Calculus,Data Structures & Algorithm </span>
                    </li> */}
                </ol>

            </div>
        </div>
    )
}

export default Home
