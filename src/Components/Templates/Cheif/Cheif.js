import React from 'react'
import styled from 'styled-components'
import * as config from './Config'
import { DoubleColumn } from '../ThemeStyles.style'
import Listing from './Listing'
import RenderSocialMedias from '../Components/RenderSocialMedias'
import RenderSkills from '../Components/RenderSkills'
import RenderLanguages from '../Components/RenderLanguages'
import RenderReferences from '../Components/RenderReferences'

function Cheif({ cvInfo }) {
  return (
    <React.Fragment>
        <Heading>
            <h1>{ cvInfo.personalDetails.name }</h1>
            <p>{ cvInfo.personalDetails.subtitle }</p>
            <Avatar>
                <img src={cvInfo.avatar} />
            </Avatar>
        </Heading>
        <DoubleColumn left="5" right="2">
            <div>
                <SectionContainer>
                    <Listing cvInfo={cvInfo} section="employment" heading="Employment" />
                </SectionContainer>
                <SectionContainer>
                    <Listing cvInfo={cvInfo} section="projects" heading="Projects" />
                </SectionContainer>
                <SectionContainer>
                    <Listing cvInfo={cvInfo} section="education" heading="Education" />
                </SectionContainer>
                <SectionContainer>
                    <Listing cvInfo={cvInfo} section="certificates" heading="Certificates" />
                </SectionContainer>
            </div>
            <div style={{ backgroundColor: config.colors.primary }}>
                <SectionContainer style={{ marginTop: '45px' }}>
                    <h2>Social</h2>
                    <SocialMedia><RenderSocialMedias items={cvInfo.personalDetails} light={false} /></SocialMedia>
                </SectionContainer>
                <SectionContainer> 
                    <DottedList><RenderSkills cvInfo={cvInfo} /></DottedList>
                </SectionContainer>
                <SectionContainer> 
                    <DottedList><RenderLanguages cvInfo={cvInfo} /></DottedList>
                </SectionContainer>
                <SectionContainer> 
                    <RenderReferences cvInfo={cvInfo} />
                </SectionContainer>
            </div>
        </DoubleColumn>
    </React.Fragment>
  )
}

const Heading = styled.div`
    width: 100%;
    background-color: ${config.colors.accent};
    color: white;
    padding: 15px;
    box-sizing: border-box;
    h1 {
        font-size: 1.5rem;
    }
    p {
        font-size: 0.8rem;
    }
`
const SectionContainer = styled.div`
    font-size: 0.8rem;
    margin-bottom: 15px;
    h2 {
        font-size: 0.9rem;
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background-color: ${config.colors.accent};
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }

`
const Avatar = styled.div`
    padding: 5px;
    background-color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 128px;
        width: 128px;        
    }
`
const SocialMedia = styled.div`
    line-height: 15px;
    span {
        margin-top: 3px;
    }
`
const DottedList = styled.div`
    li {
        margin-left: 15px;
    }
`
export default Cheif