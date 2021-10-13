import React, { Component } from 'react'
import { LetterPage, CV, Heading1, DoubleColumn, Section } from '../CVComponents/Style.style'

export default class Template1 extends Component {
    render() {
        return (
            <CV>
                <LetterPage bgColor="yellow">
                    <DoubleColumn>
                        <div>
                            <Section>
                                <Heading1>Abtahi Tajwar</Heading1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </Section>
                            
                        </div>
                        <div></div>
                    </DoubleColumn>
                    
                </LetterPage>
            </CV>
        )
    }
}
