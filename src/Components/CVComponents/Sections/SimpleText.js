import React from 'react'
import { Section, Title } from '../Style.style'

function SimpleText({ title, text }) {
    return (
        <React.Fragment>
            <Section>
                <Title>{title}</Title>
                <p>{text}</p>
            </Section>
        </React.Fragment>
    )
}
SimpleText.defaultProps = {
    title: 'simple text',
    text: 'Lorem ipsum, Dolor sit amet, Consectetuer'
}
export default SimpleText
