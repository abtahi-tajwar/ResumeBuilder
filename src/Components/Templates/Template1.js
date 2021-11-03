import React, { Component } from 'react'
import { LetterPage, CV, Heading1, DoubleColumn, Section } from '../CVComponents/Style.style'
import Listings from '../CVComponents/Sections/Listings'
import { text_sizes } from '../CVComponents/Style.style'
import SimpleListing from '../CVComponents/Sections/SimpleListing'
import HeaderInformations from '../CVComponents/Sections/HeaderInformations'
import SimpleText from '../CVComponents/Sections/SimpleText'

export default class Template1 extends Component {
    render() {
        return (
            <CV>
                <LetterPage>
                    <div>
                        <DoubleColumn>
                            <div>
                                <Section>
                                        <Heading1>Abtahi Tajwar</Heading1>
                                        <p style={styles.heading.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                </Section> 
                            </div>
                            <div>
                                <HeaderInformations />
                            </div>
                        </DoubleColumn>
                    </div> 
                    <div>
                        <DoubleColumn>
                            <div>                                
                                <Listings />
                                <Listings />    
                                <Listings />                
                            </div>
                            <div>
                                <SimpleListing />
                                <SimpleListing />
                                <SimpleText />
                            </div>
                        </DoubleColumn>                    
                    </div>                  
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