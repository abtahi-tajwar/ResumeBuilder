import React, { useState, useContext, useEffect } from 'react';
import { Flex } from '../MainStyle.style';
import styled from 'styled-components';
import LabeledInput from '../FormComponents/v2/LabeledInput';
import { VariableContextValue } from '../VariableContext';
import TabShifter from '../UIComponents/TabShifter';
import { signUp } from '../../firebase/Auth';
import Alert from '../UIComponents/Alert';
import ClipLoader from "react-spinners/ClipLoader";

function Authentication() {
    const variables = useContext(VariableContextValue)
    const colors = variables.colors
    const [input, setInput] = useState({
        email: "abtahitajwar@gmail.com",
        password: "Hacked6251$",
        confirmPassword: "Hacked6251$"
    })
    const [signUpState, setSignUpState] = useState({
        msg: '',
        isLoading: false,
        isSuccess: false
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
    useEffect(() => {
        setTimeout(() => {
            setSignUpState({
                msg: '',
                isLoading: false,
                isSuccess: false
            })
        },[6000])
    }, [signUpState])
    const handleSignUp = async e => {
        e.preventDefault()
        setSignUpState({
            ...signUpState,
            isLoading: true
        })
        if(input.password !== input.confirmPassword) {
            setSignUpState({
                isSuccess: false,
                isLoading: false,
                msg: 'Both password does not match'
            })
            return
        }
        const user = await signUp(input.email, input.password)
        console.log(user)
        if(user.isError) {
            setSignUpState({
                isSuccess: false,
                isLoading: false,
                msg: user.errorMessage
            })
            return
        }
        setSignUpState({
            isSuccess: true,
            isLoading: false,
            msg: 'Signed Up successfully'
        })
        setInput({
            email: "",
            password: "",
            confirmPassword: ""
        })
    }
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
                <form>
                    {tabs[0].visible && <Flex direction="column" gap="10px" style={{ width: '100%' }}>
                        <h2 style={{ marginBottom: '15px' }}>Login</h2>
                        
                            <LabeledInput
                                value={input.email}
                                name="email"
                                handleInput={handleInput}
                                label="Username / Email"
                                borderColor={colors.primary} 
                                type="email"
                                />
                            <LabeledInput
                                value={input.password}
                                name="password"
                                handleInput={handleInput}
                                label="Password"
                                borderColor={colors.primary}
                                type="password"
                            />
                            <ActionButton type="submit" bgColor={colors.accent}>Sign Up</ActionButton>
                                
                    </Flex>}
                </form>

                <form onSubmit={handleSignUp}>
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
                        <div style={{position: 'relative', width: '100%'}}>
                            <ActionButton type="submit" bgColor={colors.accent} isLoading={signUpState.isLoading}>Sign Up</ActionButton>
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}><ClipLoader color="gray" loading={signUpState.isLoading} size={40} /></div>
                        </div>
                    </Flex>}
                </form>                
                <Alert type={signUpState.isSuccess ? "success" : "error"} msg={signUpState.msg}/>
                
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
    ${props => props.isLoading && 'pointer-events: none'};
    ${props => props.isLoading && 'filter: blur(2px)'};
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
