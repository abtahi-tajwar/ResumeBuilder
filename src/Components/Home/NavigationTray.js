import React, { useState } from 'react';
import styled from 'styled-components';

function NavigationTray({ children, opened=false, handleNavOpen, width='90vw', left=true, closeIconColor="white" }) {
    const handleOpenClick = () => {
        if(!handleNavOpen) {
            console.log("Please specify a handle function for closing")
            return
        }
        handleNavOpen(false)
    }
    return <Wrapper
        opened={opened}
        width={width}
        left={left}
        direction={left ? -1 : 1}
    >
      <CloseIcon 
        left={left}
        onClick={handleOpenClick} 
        color={closeIconColor}><i class="fas fa-times"></i></CloseIcon>
      {children}
  </Wrapper>;
}
const Wrapper = styled.div`
    position: fixed;
    ${props => props.left ? 'left: 0px' : 'right: 0px'};
    top: 0px;
    height: 100vh;
    width: ${ props => props.width };
    z-index: 10;
    transition: transform .2s ease-out;
    transform: ${props => props.opened ? 'translateX(0)' : `translateX(${props.direction * 100}%)` };
`
const CloseIcon = styled.div`
    z-index: 11;
    cursor: pointer;
    position: absolute;
    ${props => props.left ? 'right: 20px' : 'left: 20px'};
    top: 10px;
    color: ${props => props.color ? props.color : 'white' } !important;
    font-size: 2rem;
`
export default NavigationTray;
