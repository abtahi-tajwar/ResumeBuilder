import React from 'react'
import { Heading1, Section, text_sizes } from '../Style.style'

function Heading({ heading, subheading }) {
    return (
        <React.Fragment>
            <Section>
                <Heading1>{ heading }</Heading1>
                <p style={styles.heading.subtitle}>{ subheading }</p>
            </Section>
        </React.Fragment>
    )
}
Heading.defaultProps = {
    heading: 'Abtahi Tajwar',
    subheading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
}
const styles = {
    debug: {
        border: '0.5px dotted gray'
    },
    heading: {
        subtitle: {
            fontSize: text_sizes.text_sm
        }
    }
}
export default Heading
