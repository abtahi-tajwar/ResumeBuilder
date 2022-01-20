import React from 'react';
import styled from 'styled-components';

function References({name, subtitle, contact, email }) {
  return <Wrapper>
      <h3>{name}</h3>
      <p>{subtitle}</p>
      <p>T: {contact}</p>
      <p>E: {email}</p>
  </Wrapper>;
}

const Wrapper = styled.div`
    h3 {
        font-size: 0.9rem;
        text-transform: uppercase;
    }
`

export default References;
