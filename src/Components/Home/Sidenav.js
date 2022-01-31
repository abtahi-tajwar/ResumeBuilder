import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VariableContextValue } from '../VariableContext';
import { useSelector } from 'react-redux';


function Sidenav({ name, logo }) {
    const userState = useSelector(state => state.userState)
    const isLoggedIn = userState.isLoggedIn
    const variables = useContext(VariableContextValue)
    const colors = variables.colors
  return <Wrapper color={colors.primary}>
      {logo && <CompanyLogo src={logo} alt="Company Logo" />}
      <CompanyName>{name}</CompanyName>
      <Menu colors={colors}>
          <Link to="/"><MenuItem><i className="fas fa-border-all"></i>&nbsp;&nbsp; Build Resume</MenuItem></Link>
          <Link to="/about"><MenuItem><i className="fas fa-info-circle"></i>&nbsp;&nbsp; About</MenuItem></Link>
          <p>Account</p>
          {!isLoggedIn && <Link to="/authentication"><MenuItem><i className="fas fa-sign-in-alt"></i>&nbsp;&nbsp; Login/Sign Up</MenuItem></Link> }
          {isLoggedIn && <Link to="/authentication"><MenuItem><i className="fas fa-user-alt"></i>&nbsp;&nbsp; Profile </MenuItem></Link>}
          {isLoggedIn && <Link to="/logout"><MenuItem><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp; Logout </MenuItem></Link>}
      </Menu>
  </Wrapper>;
}

const Wrapper = styled.div`
    flex: 1;
    background-color: ${props => props.color ? props.color : 'black'};
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
    p {
        font-size: 0.9rem;
        color: white;
        padding: 15px 30px 15px 30px;
        display: flex;
        align-items: center;
        gap: 15px;
        opacity: 0.5;
        &:after {
            content: "";
            display: block;
            height: 2px;
            flex: 1;
            background-color: white;
        }
    }
    li {
        i {
            color: ${props => props.colors.accent} !important;
        } 
    }
    
`
const MenuItem = styled.li`    
    width: 100%;
    padding: 15px;
    padding-left: 50px;        
    font-size: 1rem;
    transition: background .3s ease-out;
    cursor: pointer;        
    color: white;   
    box-sizing: border-box;        
    &:hover {
        background-color: #171717;
    }
    ${props => props.selected && `
        pointer-events: none;
        background-color: #171717;
    `}
    
`

export default Sidenav;
