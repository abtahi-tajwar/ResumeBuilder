import React, { useContext } from 'react';
import styled from 'styled-components';
import { VariableContextValue } from '../VariableContext';
import { Avatar } from '../MainStyle.style';
import { Button, Flex } from '../MainStyle.style';
import { useSelector } from 'react-redux';
import Verification from '../pages/Verification';

function Topnav() {

    const userState = useSelector(state => state.userState)
    const isLoggedIn = userState.isLoggedIn
    const user = userState.user
    const loginStatus = userState.loginStatus
    const variables = useContext(VariableContextValue)
    const colors = variables.colors
    return (
        <Wrapper>
            {loginStatus === 0 && <Verification />}
            <NavWrapper bgColor={colors.gray}>

                {/* <p>Username</p>
            <Avatar src="empty.jpg" height="40px" width="40px"/> */}
                
                <div>
                    {isLoggedIn ?
                        <p>{user.displayName !== null ? user.displayName : user.email}</p> :
                        <p>Please Login to save your progress</p>
                    }
                </div>
                {isLoggedIn ?
                    <Avatar src="empty.jpg" height="40px" width="40px" /> :
                    <Flex gap="5px">
                        <Button bgColor={colors.primary}>Login</Button>
                        <Button bgColor={colors.primary}>Sign Up</Button>
                    </Flex>
                }
            </NavWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
`
const NavWrapper = styled.div`
    width: 100%;
    height: 75px;
    background-color: ${props => props.bgColor};
    box-sizing: border-box;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -1px -1px 12px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px -1px 12px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px -1px 12px -1px rgba(0,0,0,0.75);
    p {
        font-size: 1.4rem;
    }


`
export default Topnav;
