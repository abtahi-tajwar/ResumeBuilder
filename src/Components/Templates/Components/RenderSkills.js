import React from 'react'

function RenderSkills({ cvInfo, heading }) {
    return (
        cvInfo.skills.length > 0 &&
        <React.Fragment>
                <h2>{ heading }</h2>
                <ul>
                    {cvInfo.skills.map((item, index) => <li key={index}>{item.skill}</li>)}
                </ul>
        </React.Fragment>
    )
    
}

// 
RenderSkills.defaultProps = {
    cvInfo: { skills: [] },
    heading: 'Skills' 
}

export default RenderSkills