import React, { useContext } from 'react';
import styled from 'styled-components';
import { VariableContextValue } from '../VariableContext';
import { Avatar } from '../MainStyle.style';
import { Button, Flex } from '../MainStyle.style';
import { useSelector } from 'react-redux';
import Verification from '../pages/Verification';
import { Link } from 'react-router-dom';
import { WINDOW_SIZE_M } from '../../hooks/useWindowSize';

function Topnav({ windowSize }) {

    const userState = useSelector(state => state.userState)
    const isLoggedIn = userState.isLoggedIn
    const user = userState.user
    const loginStatus = userState.loginStatus
    const variables = useContext(VariableContextValue)
    const colors = variables.colors
    return (
        <Wrapper>
            {loginStatus === 0 && <Verification />}
            <NavWrapper 
                bgColor={colors.gray}
                device_size={windowSize.device_size}
            >

                {/* <p>Username</p>
            <Avatar src="empty.jpg" height="40px" width="40px"/> */}
                
                <Flex>
                    {isLoggedIn ?
                        <p>{user.displayName !== null ? user.displayName : user.email}</p> :
                        <p>Please Login to save your progress</p>
                    }
                </Flex>
                {isLoggedIn ?
                    <Avatar src="empty.jpg" height="40px" width="40px" /> :
                    <Flex gap="5px">
                        <Link 
                            to="/authentication"
                            style={{ textDecoration: 'none' }}
                        ><Button bgColor={colors.primary}>Login</Button></Link>
                        {windowSize.device_size > WINDOW_SIZE_M && 
                        <Link to="/authentication"
                            style={{ textDecoration: "none"}}>
                            <Button bgColor={colors.primary}>Sign Up</Button> 
                            
                        </Link>}
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
        ${props => props.device_size > WINDOW_SIZE_M ? 'font-size: 1.4rem' : 'font-size: 0.8rem'};
    }
`

export default Topnav;
