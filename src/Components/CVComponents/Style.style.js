import React from 'react'
import styled from 'styled-components'

const jsPdfScaleFactor = 0.749;


export const CV = styled.div`
    font-size: 9px;
    font-family: 'Merriweather', 'Times New Roman', Times, serif;
`
export const LetterPage = styled.div`
    padding: 0.4in 0.6in 0.6in 0.6in;
    height: ${792 * 1}pt;
    width: ${612 * 1}pt;
    background-color: ${props => props.bgColor};
    box-sizing: border-box;    
`;
export const Heading1 = styled.h1`
    font-size: 36px;
    font-weight: bold;
`
export const Section = styled.div`
    margin-bottom: 10px;
`
export const DoubleColumn = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    & div:nth-child(1) {
        flex: 1;
        background-color: red;
    }
    & div:nth-child(2) {
        flex: 1;
        background-color: blue;
    }
`