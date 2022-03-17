import React from 'react'
import styled from 'styled-components'
import { DoubleColumn } from '../ThemeStyles.style'
import './dazzle.css'
import * as config from './Config'
import { Flex } from '../ThemeStyles.style'
import { Avatar } from '../ThemeStyles.style'
import RenderSocialMedias from '../Components/RenderSocialMedias'
import RenderSkills from '../Components/RenderSkills'
import { List } from '../ThemeStyles.style'
import RenderLanguages from '../Components/RenderLanguages'
import RenderReferences from '../Components/RenderReferences'
import HtmlRender from '../Components/HtmlRender'
import Listing from './Listing'

function Dazzle({ cvInfo }) {
  return (
    <React.Fragment>        
        <DoubleColumn left={config.column.left} right={config.column.right} className="dazzle">
            <div style={{ backgroundColor: config.colors.primary }}>
                <Section dark>
                    <Flex justify="flex-end">
                        <AvatarContainer>
                            <Avatar src={cvInfo.avatar} height={config.avatarSize} width={config.avatarSize}/>
                        </AvatarContainer>
                    </Flex>
                </Section>
                <Section dark>
                    <SectionHeading>Social</SectionHeading>
                    <RenderSocialMedias items={cvInfo.personalDetails} />
                </Section>
                <SectionContainer dark>
                    <RenderSkills cvInfo={cvInfo} />
                </SectionContainer>
                <SectionContainer dark>
                    <RenderLanguages cvInfo={cvInfo} />
                </SectionContainer>
                <SectionContainer dark>
                    <RenderReferences cvInfo={cvInfo} />
                </SectionContainer>
            </div>
            <div>
                <DesignBlock />
                <HeadingSection>
                    <p style={{ color: config.colors.accent }}>Hello, I'm</p>
                    <h1>{ cvInfo.personalDetails.name }</h1>
                </HeadingSection>
                <SectionContainer2>
                    <h2>About</h2>
                    <HtmlRender>{cvInfo.personalDetails.about}</HtmlRender>
                </SectionContainer2>
                <SectionContainer2>
                    <Listing cvInfo={cvInfo} section="employment" heading="Employment" />
                </SectionContainer2>
                <SectionContainer2>
                    <Listing cvInfo={cvInfo} section="projects" heading="Projects" />
                </SectionContainer2>
                <SectionContainer2>
                    <Listing cvInfo={cvInfo} section="education" heading="Education" />
                </SectionContainer2>
                <SectionContainer2>
                    <Listing cvInfo={cvInfo} section="certificates" heading="Certificates" />
                </SectionContainer2>
            </div>
        </DoubleColumn>
    </React.Fragment>
  )
}
const Wrapper = styled.div`
    width: 100%;
    min-height: inherit;
    font-family: 'Raleway', sans-serif;
    font-size: 0.8rem;
`
const AvatarContainer = styled.div`
    margin-right: -20px;
    height: ${config.avatarSize + 20}px;
    width: ${(config.avatarSize + 20) / 2}px;
    border: 8px solid ${config.colors.accent};
    border-right: none;
    border-radius: 1000px 0px 0px 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        margin-left: ${(config.avatarSize + 20) / 2}px;
    }
`
const Section = styled.div`
    margin-bottom: 30px;
    color: ${props => props.dark ? 'white' : 'black'};
    font-size: 0.8rem;
    font-weight: lighter;
`
const SectionHeading = styled.h2`
    font-size: 1.2rem;
    letter-spacing: 0.8rem;
    text-transform: uppercase;
    font-weight: lighter;
    margin-bottom: 10px;
`
const SectionContainer = styled.div`
    margin-bottom: 30px;
    color: ${props => props.dark ? 'white' : 'black'};
    font-size: 0.8rem;
    font-weight: lighter;
    & > h2 {
        font-size: 1.2rem;
        letter-spacing: 0.8rem;
        text-transform: uppercase;
        font-weight: lighter;
        margin-bottom: 10px;
    }
    & > ul {
        list-style-type: none;
        li {
            &:after {
                content: "";
                display: block;
                width: 100%;
                height: 1px; 
                background-color: ${config.colors.lightGray};
                margin-bottom: 5px;
                margin-top: 5px;
            }
        }
    }
    
`
const SectionContainer2 = styled.div`
    margin-bottom: 30px;
    color: ${props => props.dark ? 'white' : 'black'};
    font-size: 0.8rem;
    font-weight: lighter;
    & > h2 {
        font-size: 1rem;
        letter-spacing: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
        &:before {
            content: "";
            display: block;
            height: 15px;
            width: 2px;
            background-color: ${config.colors.primary};
        }
    }
    & > ul {
        list-style-type: none;
        li {
            &:after {
                content: "";
                display: block;
                width: 100%;
                height: 1px; 
                background-color: ${config.colors.lightGray};
                margin-bottom: 5px;
                margin-top: 5px;
            }
        }
    }
`
const DesignBlock = styled.div`
    position: absolute;
    right: 0px;
    top: 30px;
    height: 15px;
    width: 90px;
    background-color: ${config.colors.accent};
`
const HeadingSection = styled.div`
    margin-top: 45px;
    margin-left: ${config.avatarSize/2+30}px;
    margin-bottom: 50px;
    & > h1 {
        font-size: 2.5rem;
        letter-spacing: 0.4rem;
        font-weight: 900;
        &:after {
            content: "";
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
            height: 5px;
            width: 100px;
            background-color: ${config.colors.accent};
        }
    }
`
export default Dazzle