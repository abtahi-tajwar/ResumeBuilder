import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidenav({ name, logo }) {
  return <Wrapper>
      {logo && <CompanyLogo src={logo} alt="Company Logo" />}
      <CompanyName>{name}</CompanyName>
      <Menu>
          <Link to="/"><li>Build Resume</li></Link>
          <Link to="/about"><li>About</li></Link>
      </Menu>
  </Wrapper>;
}

const Wrapper = styled.div`
    flex: 1;
    background-color: black;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`
const CompanyName = styled.h1`
    text-align:center;
    color: white;
    margin-bottom: 20px;
`
const CompanyLogo = styled.img`
    height: 128px;
    width: 128px;
    margin: 0 auto;
`
const Menu = styled.ul`
    list-style-type: none;
    width: 100%;
    a {
        text-decoration: none;
    }
    li {
        width: 100%;
        padding: 15px;        
        font-size: 1.1rem;
        transition: background .3s ease-out;
        cursor: pointer;        
        color: white;        
        &:hover {
            background-color: #171717;
        }
    }
`

export default Sidenav;
