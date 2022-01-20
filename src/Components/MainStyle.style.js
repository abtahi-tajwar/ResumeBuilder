import React from 'react';
import styled from 'styled-components';
import { colors } from './CVComponents/Style.style';

export const DoubleColumn = styled.div`
    display: flex;
    height: 100%;
    font-size: 0.9rem;
    & > div {
        padding: 20px;
        box-sizing: border-box;
    }
    & > div:nth-child(1) {
        flex: ${props => props.left ? props.left : 1 }
    }
    & > div:nth-child(2) {
        flex: ${props => props.right ? props.right : 1 }
    }
`
export const Flex = styled.div.attrs(props => ({
        className:  props.className
    }))`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
`
export const Grid = styled.div.attrs(props => ({
    className: props.className
}))`
    display: grid;
    ${props => props.rows && `grid-template-rows: ${props.rows}`};
    ${props => props.cols && `grid-template-columns: ${props.cols}`};
    ${props => props.gap && `grid-gap: ${props.gap}`};
`
export const Section = styled.div`
    margin-bottom: 15px;
`
export const Avatar = styled.img`
    height: ${props => props.height ? props.height : '128px'};
    width: ${props => props.width ? props.width : '128px'};
    border-radius: 50%;
`
export const SectionHeading = styled.h2`
    color: ${colors.accent};
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid ${colors. accent};
    margin-bottom: 10px;
`
export const List = styled.ul`
    style-style-type: none;
    li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        span {
            color: ${colors. accent};
            font-size: 1rem;
        }
    }
`
export const DottedList = styled.ul`
    list-style-type: none;
    li {
        margin-left: 1rem;
        margin-bottom: 10px;
        position: relative;
        &:before {
            content: "";
            height: 8px;
            width: 8px;
            background-color: ${props => props.color ? props.color : 'white' };
            display: block;
            position: absolute;
            left: -1rem;
            top: 5px;
        }
    }
`
export const Heading  = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    p {
        font-size: 0.8rem;
        color: gray;
    }
    
`