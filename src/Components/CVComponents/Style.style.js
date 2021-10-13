import React from 'react'
import styled from 'styled-components'

const jsPdfScaleFactor = 0.749;

export const A4Page = styled.div`
    padding: 0.4in 0.6in 0.6in 0.6in;
    height: ${792 * jsPdfScaleFactor}pt;
    width: ${612 * jsPdfScaleFactor}pt;
    background-color: ${props => props.bgColor};
    box-sizing: border-box;
    font-size: 9px;
`;
export const Heading1 = styled.h1`
    font-size: 36px;
    font-weight: bold;
    
`