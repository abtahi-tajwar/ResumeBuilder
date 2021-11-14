import React from 'react'
import styled from 'styled-components'

function TextInput({ name, value, handleInput, label="", placeholder="Input here ...", fullWidth=true }) {
    return (
        <InputContainer fullWidth={fullWidth}>
            <InputLabel>{label}</InputLabel>
            <InputBox 
                type="text" 
                name={name}
                value={value}
                onChange={handleInput}
                placeholder={placeholder}
            />
        </InputContainer>
    )
}
const InputBox = styled.input`
    padding: 5px;
    border: 3px solid black;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
`
const InputLabel = styled.label`
    display: block;
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 7px;
`
const InputContainer = styled.div`
    ${({ fullWidth }) => fullWidth && `
        width: 100%
    `}
`
export default TextInput
