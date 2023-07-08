import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';


function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018-2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Sivasagar Senior Secondary School,Sivasagar,Assam</h3>
                    <p>Higher Secondary (Science)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020-2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>CSRL OIL Super 30,Jorhat,Assam</h3>
                    <p>Coaching(JEE)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021-2025"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Indian Institute of Technology,Guwahati,Assam</h3>
                    <p>Chemical Science and Technology(B.Tech)</p>
                </VerticalTimelineElement>



            </VerticalTimeline>

        </div>
    )
}

export default Experience
