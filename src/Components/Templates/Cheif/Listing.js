import React from 'react'
import styled from 'styled-components'
import HtmlRender from '../Components/HtmlRender'
import { Flex } from '../ThemeStyles.style'

function Listing({ cvInfo, section, heading="Employment" }) {
    return (
        cvInfo[section].length > 0 && 
        <React.Fragment>
            <h2>{ heading }</h2>
            { cvInfo[section].map(item => (
                <Flex gap="10px" align="flex-start">
                    <div 
                        className="date"
                        style={{ flex: 1, wordWrap: 'break-word', padding: '0px !important' }}
                    >{item.date}</div>
                    <div className="details" style={{ flex: 8 }}>
                        <b>{item.title}</b>
                        <p style={{ marginBottom: '5px' }}>{item.subtitle}</p>
                        <HtmlRender>
                            {item.description}
                        </HtmlRender>
                    </div>
                </Flex>
            )) }        
        </React.Fragment>
      )
}
export default Listing