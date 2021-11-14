import React from 'react'
import styled from 'styled-components'
import { colors } from '../CVComponents/Style.style'

function LabelnputGroup({ label, type, name, value, onChange, className }) {
    return (
        <div className={"flex mt "+className}>
            <GroupLabel>{label}</GroupLabel>
            <GroupInput 
                type={type}
                className="flex-1"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

const GroupLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 3px 7px 3px 7px;
    border-radius: 5px 0px 0px 5px;
    color: white;
`
const GroupInput = styled.input`
    border: 2px solid black;
    border-left: none;
    outline: none;
    padding-left: 10px;
    border-radius: 0px 5px 5px 0px;
`
export default LabelnputGroup
