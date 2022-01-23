import React from 'react';
import styled from 'styled-components';
import Sidenav from './Components/Home/Sidenav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectResume from './Components/pages/SelectResume';
import About from './Components/pages/About';
import Editor2 from './Components/Editor2';

function Home() {
  return (
        <Wrapper>
            <Sidenav 
                name="Resume Builder"
            />
            <Body>
                <Routes>
                   <Route path="/create-resume" element={<SelectResume />} /> 
                   <Route path="/about" element={<About />} /> 
                </Routes>
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
    padding: 25px;
`

export default Home;