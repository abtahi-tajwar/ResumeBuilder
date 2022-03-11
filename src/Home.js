import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Sidenav from './Components/Home/Sidenav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectResume from './Components/pages/SelectResume';
import About from './Components/pages/About';
import Editor2 from './Components/Editor2';
import Topnav from './Components/Home/Topnav';
import Authentication from './Components/pages/Authentication';
import { getCurrentUser } from './firebase/Auth';
import SignOut from './Components/pages/SignOut';
import { GetProjectData } from './firebase/Projects';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Verification from './Components/pages/Verification';
import NavigationTray from './Components/Home/NavigationTray';
import useWindowSize, { WINDOW_SIZE_M } from './hooks/useWindowSize';
function Home() {   
    const windowSize = useWindowSize() 
    const userState = useSelector(state => state.userState)
    const location = useLocation()
    const [ isNavOpen, setIsNavOpen ] = useState(false)
    useEffect(() => {
        console.log(isNavOpen)
    }, [isNavOpen])
    useEffect(() => {
        setIsNavOpen(false)
    }, [location])
    const handleHamburgerClick = () => {
        setIsNavOpen(true)
    }

    /* 
        -> Not logged in: -1
        -> Logged in, email not verified: 0
        -> Logged in, email verified: 1
    */
  return (
        <Wrapper 
            isFlex={windowSize.device_size <= WINDOW_SIZE_M ? false : true }
        >
            {windowSize.device_size <= WINDOW_SIZE_M && 
                <Hamburger onClick={handleHamburgerClick}><i class="fas fa-hamburger"></i></Hamburger> 
            }
            { windowSize.device_size <= WINDOW_SIZE_M ? 
                <NavigationTray
                    opened={isNavOpen} 
                    handleNavOpen={setIsNavOpen}
                >
                    <Sidenav                        
                        name="Resume Builder"
                    /> 
                </NavigationTray> :
                <Sidenav 
                    name="Resume Builder"
                />           
            }
            {/* <Sidenav 
                name="Resume Builder"
                
            /> */}
            <Body>
                <Topnav 
                    windowSize={windowSize}
                />
                <Content>
                    <Routes>
                        <Route path="/" element={<SelectResume />} />
                        {userState.loginStatus === -1 && <Route path="/authentication" element={<Authentication />} /> }
                        <Route path="/about" element={<About />} />                          
                        <Route path="/logout" element={<SignOut />} /> 
                    </Routes>
                </Content>
            </Body>
        </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    ${props => props.isFlex && 'display: flex' };
`
const Body = styled.div`
    flex: 4;
    background-color: white;
    overflow-y: scroll;
`
const Content = styled.div`
    padding: 25px;
    width: 100%;
    box-sizing: border-box;
`
const Hamburger = styled.div.attrs(props => ({
        onClick: props.onClick
    }))`
    position: fixed;
    z-index: 9;
    left: 0px;
    top: 100px;
    background-color: rgba(20, 33, 61, 0.8);

    display: flex;
    justfiy-content: center;
    align-items: center;
    color: white;
    padding: 10px;
    cursor: pointer;
    i {
        font-size: 2rem;
    }
`
export default Home;
