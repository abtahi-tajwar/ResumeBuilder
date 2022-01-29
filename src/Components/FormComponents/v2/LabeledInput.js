import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const padding = '15px';
const padding_2 = '20px';

function LabeledInput({ label, name, value, handleInput, borderColor, type = "text" }) {
    
    const labelDom = useRef(null)
    const [padding, setPadding] = useState('15px')
    const [fSize, setFSize] = useState('1.1rem')
    const [labelTop, setLabelTop] = useState(padding);
    const [inputTranslate,setInputTranslate] = useState('0px');
    useEffect(() => {
        if(value !== "") {
            console.log(labelDom.current)
            setFSize('0.8rem')
            setLabelTop('5px')
            setInputTranslate('10px')
            // setPadding('10px')
        } else {
            setFSize('1.1rem')
            setLabelTop(padding)
            setInputTranslate('0px')
            // setPadding('15px')
        }
    }, [value])
    return <Wrapper 
        borderColor={borderColor} 
        fSize={fSize} 
        labelTop={labelTop}
        inputTranslate={inputTranslate}
    >
        <label ref={labelDom}>{label}</label>
        <input 
            type={type} 
            name={name}
            value={value} 
            onChange={handleInput} 
        />
    </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
    border: 2px solid ${props => props.borderColor ? props.borderColor : 'black'};
    border-radius: 9px;
    position: relative;
    box-sizing: border-box;
    padding: ${padding} ${padding_2};
    & > label {
        position: absolute;
        left: ${padding_2};
        top: ${props => props.labelTop};
        transition: all .2s ease-out;
        font-size: ${props => props.fSize};
        color: gray;
        font-style: italic;
        pointer-events: none;
    }
    input {
        outline: none;
        border: none;
        font-size: 1.1rem;
        width: 100%;
        transform: translateY(${props => props.inputTranslate});
        background-color: transparent;
    }

`
// const Label = styled.label`
//     position: absolute;
//     left: ${padding};
//     top: ${padding};
//     transition: all .2s ease-out;
//     font-size: 1.1rem;
//     color: gray;
//     font-style: italic;
    
// `

export default LabeledInput;
