import React, { useState, useContext } from 'react';
import { Flex } from '../MainStyle.style';
import styled from 'styled-components';
import LabeledInput from '../FormComponents/v2/LabeledInput';
import { VariableContextValue } from '../VariableContext';
import TabShifter from '../UIComponents/TabShifter';

function Authentication() {
    const variables = useContext(VariableContextValue)
    const colors = variables.colors
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassoword: ""
    })
    const handleInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const [tabs, setTabs] = useState([
        { 
            id: 'login',
            visible: false 
        },
        { 
            id: 'signup',
            visible: true 
        }
    ])
    return (
        <Flex direction="column">
            <Tabs>
                <TabShifter 
                    labels={["Login", "Sign Up"]}
                    tabs={tabs}
                    setTabs={setTabs}
                />
            </Tabs>
            <BoxContianer>
                {tabs[0].visible && <Flex direction="column" gap="10px" style={{ width: '100%' }}>
                    <h2 style={{ marginBottom: '15px' }}>Login</h2>
                    <LabeledInput
                        value={input.email}
                        name="email"
                        handleInput={handleInput}
                        label="Username / Email"
                        borderColor={colors.primary} />
                    <LabeledInput
                        value={input.password}
                        name="password"
                        handleInput={handleInput}
                        label="Password"
                        borderColor={colors.primary}
                        type="password"
                    />
                    <ActionButton bgColor={colors.accent}>Login</ActionButton>
                </Flex>}
                {tabs[1].visible && <Flex direction="column" gap="10px" style={{ width: '100%' }}>
                    <h2 style={{ marginBottom: '15px' }}>Sign Up</h2>
                    <LabeledInput
                        value={input.email}
                        name="email"
                        handleInput={handleInput}
                        label="Username / Email"
                        borderColor={colors.primary} />
                    <LabeledInput
                        value={input.password}
                        name="password"
                        handleInput={handleInput}
                        label="Password"
                        borderColor={colors.primary}
                        type="password"
                    />
                    <LabeledInput
                        value={input.confirmPassword}
                        name="confirmPassword"
                        handleInput={handleInput}
                        label="Confirm Password"
                        borderColor={colors.primary}
                        type="password"
                    />
                    <ActionButton bgColor={colors.accent}>Login</ActionButton>
                </Flex>}
            </BoxContianer>
        </Flex>
    )
}
const BoxContianer = styled.div`
    margin-top: 50px;
    max-width: 500px;
    width: 90%;
    box-sizing: border-box;
    padding: 25px;
`
const ActionButton = styled.button`
    width: 100%;
    padding: 15px;
    color: white;
    background-color: ${props => props.bgColor ? props.bgColor : 'black'};
    border-radius: 9px;
    font-weight: bold;
    font-size: 1.4rem;
    outline: none;
    border: none;
    transition: all .3s ease-out;
    &:hover {
        filter: brightness(0.85);
    }
`
const Tabs = styled.div`
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
`
export default Authentication;
