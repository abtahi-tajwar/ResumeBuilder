import React from 'react';
import styled from 'styled-components';
import { sendUserVerficationEmail } from '../../firebase/Auth';

function Verification() {
  return <Wrapper>
      <p>Verify your Email, Click the verification link sent to your email </p> 
      <Button onClick={sendUserVerficationEmail}>Resend</Button>
    </Wrapper>;
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 50px;
    width: 100%;
`
const Button = styled.button`
    min-width: 70px;
    padding: 5px;
    border: 1px solid black;
    outline: none;
    background-color: white;
    border-radius: 4px;
    transition: all .2s ease-out;
    &:hover {
        filter: brightness(95%);
    }
`
export default Verification;
