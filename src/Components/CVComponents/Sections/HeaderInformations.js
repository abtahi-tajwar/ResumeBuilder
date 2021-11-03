import React from 'react'
import { Section } from '../Style.style'
import styled from 'styled-components'

function HeaderInformations({ informations }) {
    return (
        <React.Fragment>
            <Section>
                <Informations>
                    {informations.map(info => {
                        return (
                            <div>
                                {info.map(item => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Informations>
            </Section>
        </React.Fragment>
    )
}

HeaderInformations.defaultProps = {
    informations: [
        [
            '123 Your Street',
            'Your City, ST 12345'
        ],
        [
            '(123) 456-7890',
            'no_reply@example.com'
        ]
    ]
}

const Informations = styled.div`
    & div:nth-child(2) {
        font-weight: bold;
    }
`

export default HeaderInformations
