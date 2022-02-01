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

function Home() {    
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
                        <Route path="/about" element={<About />} /> 
                        <Route path="/authentication" element={<Authentication />} /> 
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
