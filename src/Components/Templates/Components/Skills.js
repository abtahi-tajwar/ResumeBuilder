import React from 'react';
import styled from 'styled-components';

function Skills({ skills, color }) {
  return <Wrapper color={color}>
      {skills.map(item => <SkillContainer color={color}>
          <p>{item.skill}</p>
          <div>
              <div style={{ width: `${item.rating}%` }}></div>
          </div>
      </SkillContainer>)}
  </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
    color: ${props => props.color}
`
const SkillContainer = styled.div`
    & > p:nth-child(1) {
        font-weight: bold;
        margin-bottom: 5px;
    }
    & > div:nth-child(2) {
        width: 100%;
        height: 2px;
        border: 2px solid ${props => props.color};
        padding: 3px;
        & > div {
            height: 2px;
            background-color: ${props => props.color};
        }
    }
`
export default Skills;
