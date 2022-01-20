import React from 'react';
import styled from 'styled-components'

function Listing({ title, subtitle, date, description }) {
  return <Wrapper>
      <div>
          <Title>{title}</Title>
          <p>{date}</p>
      </div>
      <VerticalPointedLine />
      <Details>
          <b>{subtitle}</b>
          <div dangerouslySetInnerHTML={{ __html: description }} />
      </Details>
  </Wrapper>;
}
const Title = styled.h3`
    text-transform: uppercase;
    font-size: 0.8rem;
    word-wrap: break-word;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    & > div:nth-child(1) {
        flex: 1;
    }
    & > div:nth-child(3) {
        flex: 1;
    }
`
const Details = styled.div`
    ul {
        margin-left: 20px;
    }
`
const VerticalPointedLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5px;
    &::before {
        content: " ";
        display: block;
        border-radius: 50%;
        height: 8px;
        width: 8px;
        background-color: #414141;
    }
    &::after {
        content: "";
        display: block;
        background-color: #414141;
        flex: 1;
        width: 2px;
    }
`
export default Listing;
