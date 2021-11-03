import React from 'react'
import styled from 'styled-components'

const jsPdfScaleFactor = 0.749;

export const text_sizes = {
    text_sm: '9px',
    text_md: '12px',
    text_xl: '36px'
}
export const colors = {
    primary: '#2079c7',
    gray: '#666666',
}
export const fonts = {
    primary: "'Merriweather', 'Times New Roman', Times, serif",
    secondary: "'Open Sans', sans-serif"
}
export const spacing = {
    standard: '1.5em',
    section: '5em',
    linegap: '5px'
}


export const CV = styled.div`
    font-size: ${text_sizes.text_sm};
    font-family: ${fonts.primary};
`
export const LetterPage = styled.div`
    padding: 0.4in 0.6in 0.6in 0.6in;
    height: ${792 * 1}pt;
    width: ${612 * 1}pt;
    background-color: ${props => props.bgColor};
    box-sizing: border-box;    
    border: 0.5px dotted gray;
    display: flex;
    flex-direction: column;
`;
export const Heading1 = styled.h1`
    font-size: ${text_sizes.text_xl};
    font-weight: bold;
`
export const Section = styled.div`
    margin-bottom: ${spacing.section};
`
export const DoubleColumn = styled.div`
    display: flex;
    gap: 20px;
    & > div:nth-child(1) {
        flex: 1;
        /* border: 0.5px dotted gray; */
    }
    & > div:nth-child(2) {
        flex: 1;
        /* border: 0.5px dotted gray; */
    }
`
export const Row = styled.div`
    height: ${props => props.height};
    ${props => props.style}
`
export const Title = styled.div`
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: ${spacing.standard};
    text-transform: uppercase;
    font-family: ${fonts.secondary};
    font-size: ${text_sizes.text_md};
`;