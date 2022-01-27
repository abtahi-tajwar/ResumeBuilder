import React, { useState } from 'react';
import Email from '../../assets/icons/email.png';
import Facebook from '../../assets/icons/facebook.png';
import Github from '../../assets/icons/github.png';
import Instagram from '../../assets/icons/instagram.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Pinterest from '../../assets/icons/pinterest.png';
import Skype from '../../assets/icons/skype.png';
import Twitter from '../../assets/icons/twitter.png';
import Web from '../../assets/icons/world-wide-web.png';
import Home  from '../../assets/icons/home.png';
import Phone  from '../../assets/icons/phone-call.png';
import styled from 'styled-components';

function Icon({ icon = "email", size="16px", light=false }) {

  const [icons, setIcons] = useState({
    email: Email,
    facebook: Facebook,
    github: Github,
    istagram: Instagram,
    linkedin: Linkedin,
    pinterest: Pinterest,
    skype: Skype,
    twitter: Twitter,
    web: Web,
    home: Home,
    phone: Phone
  })

  return (
    <IconContainer light={light}>
      <img style={{ 
        height: size,
        width: size
      }}
      src={icons[icon]}
      />
    </IconContainer>
  )
}

export const IconContainer = styled.div`
    display: flex;
    justfiy-content: center;
    align-items: center;
    float: left;
    margin-right: 5px;
    & > img {
      ${props => props.light && `filter: invert(1);`}
    }
`
export default Icon;
