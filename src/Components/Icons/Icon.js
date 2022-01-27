import React, { useState, useCallback, useRef, useEffect } from 'react';
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
import BlobIcon from './BlobIcon';

function Icon({ icon = "email", size=16, light=false, color=false }) {

  const canvasRef = useRef(null)
  const imgTag = useRef()
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  function isBase64(str) {
    if(!str) {
      return false
    }
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
  }
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

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    const image = new Image(size, size)
    image.src = icons[icon]
    image.onload = () => {
      ctx.clearRect(0, 0, size, size)
      ctx.drawImage(image, 0, 0, size, size)
      let imgData = ctx.getImageData(0, 0, size,size)
      var data = imgData.data
      
      if(!color) {
        if(light) {
          for(var i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i]
            data[i + 1] = 255 - data[i + 1]
            data[i + 2] = 255 - data[i + 2]
          }
        }
      } else {
        for(var i = 0; i < data.length; i += 4) {
          data[i] = color.r
          data[i + 1] = color.g
          data[i + 2] = color.b
        }
      }
      ctx.putImageData(imgData, 0, 0)
      imgTag.current.src = canvasRef.current.toDataURL()
    }
  }, [icons])
  return (
    <IconContainer light={light}>
      <img src="" height={size+"px"}  width={size+"px"} ref={imgTag}/>
      <canvas ref={canvasRef} height={size} width={size} style={{ backgroundColor: 'transparent', display: 'none' }}/>      
    </IconContainer>
  )
}

export const IconContainer = styled.div`
    display: flex;
    justfiy-content: center;
    align-items: center;
    float: left;
    margin-right: 5px;
`
export default Icon;
