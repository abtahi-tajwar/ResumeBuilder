import React from 'react'

function RenderLanguages({ cvInfo, heading }) {
    return (
        cvInfo.language.length > 0 &&
        <React.Fragment>
                <h2>{ heading }</h2>
                <ul>
                    {cvInfo.language.map((item, index) => <li key={index}>{item.language}</li>)}
                </ul>
        </React.Fragment>
    )
}
RenderLanguages.defaultProps = {
    cvInfo: { language: [] },
    heading: 'Languages' 
}
export default RenderLanguages