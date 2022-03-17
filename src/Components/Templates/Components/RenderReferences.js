import React from 'react'
import styled from 'styled-components'
import { List } from '../ThemeStyles.style'

function RenderReferences({ cvInfo, heading }) {
    return (        
        cvInfo.references.length > 0 &&
        <React.Fragment>
            <h2>References</h2>
            {cvInfo.references.length > 0 &&
                <List>
                    {cvInfo.references.map((item, index) => <ListItem>
                        <h3>{item.name}</h3>
                        <p>{item.subtitle}</p>
                        <p>T: {item.phone}</p>
                        <p>E: {item.email}</p>
                    </ListItem>)}
                </List>}
        </React.Fragment>
        

    )
}
RenderReferences.defaultProps = {
    cvInfo: { references: [] },
    heading: "References"
}

const ListItem = styled.li`
    h3 {
        font-size: 0.9rem;
        text-transform: uppercase;
    }
`
export default RenderReferences