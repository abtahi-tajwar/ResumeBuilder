import React, { Component } from 'react'
import { LetterPage, CV, Heading1, DoubleColumn, Section } from '../CVComponents/Style.style'
import Listings from '../CVComponents/Sections/Listings'
import { text_sizes } from '../CVComponents/Style.style'

export default class Template1 extends Component {
    render() {
        return (
            <CV>
                <LetterPage>
                    <DoubleColumn>
                        <div>
                            <Section>
                                <Heading1>Abtahi Tajwar</Heading1>
                                <p style={styles.heading.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </Section> 
                            <Listings />
                                               
                        </div>
                        <div>

                        </div>
                    </DoubleColumn>
                    
                </LetterPage>
            </CV>
        )
    }
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