import React from 'react'
import styled from 'styled-components'
import HtmlRender from '../Components/HtmlRender'

function Listing({ cvInfo, section, heading="Employment" }) {
  return (
    cvInfo[section].length > 0 && 
    <React.Fragment>
        <h2>{ heading }</h2>
        { cvInfo[section].map(item => (
            <ListItem>
                <div className="title">
                    <span>{item.title}</span> |
                    <span>{item.subtitle}</span>
                </div>
                <p class="date">{item.date}</p>
                <HtmlRender>{item.description}</HtmlRender>
            </ListItem>
        )) }        
    </React.Fragment>
  )
}

const ListItem = styled.div`
    margin-bottom: 25px;
    .title {
        font-weight: bold;
    }
    .date {
        margin-bottom: 5px;
    }
`

export default Listing