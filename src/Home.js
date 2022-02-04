import React, { useRef, useEffect, useState } from 'react';
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
import { Navigate } from 'react-router-dom';
import Verification from './Components/pages/Verification';
function Home() {    
    const userState = useSelector(state => state.userState)
    /* 
        -> Not logged in: -1
        -> Logged in, email not verified: 0
        -> Logged in, email verified: 1
    */
  return (
        <Wrapper>
            <Sidenav 
                name="Resume Builder"
            />
            <Body>
                <Topnav />
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
    background-color: red;
    display: flex;
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
export default Home;
