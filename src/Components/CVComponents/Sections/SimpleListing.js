import React from 'react'
import { Section } from '../Style.style'
import styled from 'styled-components'
import { colors, spacing, fonts, text_sizes } from '../Style.style'

function SimpleListing({ title, items }) {
    return (
        <React.Fragment>
            <Section>
                <Title>{title}</Title>
                <List>
                    {items.map(item => {
                        return (
                            <li>
                                <p>{item.content}</p>
                                <p>{item.subcontent}</p>
                            </li>
                        )
                    })}                    
                </List>
            </Section>
        </React.Fragment>
    )
}

const Title = styled.div`
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: ${spacing.standard};
    text-transform: uppercase;
    font-family: ${fonts.secondary};
    font-size: ${text_sizes.text_md};
`;
const List = styled.div`
    list-style-type: none;
    & li {
        font-size: ${text_sizes.text_sm};
        color: ${colors.gray};
        margin-bottom: 0.3rem;
        & p:nth-child(1) {
            font-weight: bold;
        }
        & p:nth-child(2) {
            font-size: ${text_sizes.text_sm};
        }
    }
`
SimpleListing.defaultProps = {
    title: "Simple Listing",
    items: [
        {content: 'List content 1', subcontent: 'List sub content' },
        {content: 'List content 2', subcontent: 'List sub content' },
        {content: 'List content 3', subcontent: 'List sub content' },
        {content: 'List content 4', subcontent: 'List sub content' },
    ]
}

export default SimpleListing
