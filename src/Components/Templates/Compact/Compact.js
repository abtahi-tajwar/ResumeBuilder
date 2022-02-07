import React from 'react';
import styled from 'styled-components';
import SkillRating from '../Components/SkillRating';
import Listing from './Listing';
import '../style.css'
import Icon from '../../Icons/Icon';
import HtmlRender from '../Components/HtmlRender';

function Compact({ cvInfo }) {    
    return (
        <div className='wrapper'>
            <DoubleColumn left="1" right="3">
                <div className="bg-primary">
                    <Section>
                        <Flex className="w-100 h-150">
                            <Avatar height="128px" width="128px" src={cvInfo.avatar} />
                        </Flex>
                    </Section>
                    <div className="w-100">
                        <Section>
                            <SectionHeading>Personal Details</SectionHeading>
                            <List>
                                <li><Icon icon="email" color={{r: 43, g: 138, b: 186}} /> { cvInfo.personalDetails.email }</li>
                                <li><Icon icon="phone" color={{r: 43, g: 138, b: 186}} /> { cvInfo.personalDetails.phone }</li>
                                <li><Icon icon="home" color={{r: 43, g: 138, b: 186}} /> { cvInfo.personalDetails.address }</li>
                                <li><Icon icon="web" color={{r: 43, g: 138, b: 186}} /> { cvInfo.personalDetails.website }</li>
                                <li><Icon icon="linkedin" color={{r: 43, g: 138, b: 186}} /> { cvInfo.personalDetails.linkedin }</li>
                            </List>
                        </Section>
                        <Section>
                            <SectionHeading>Skills</SectionHeading>
                            <DottedList>
                                {cvInfo.skills.map((item, index) => <li key={index}>{item.skill}</li>)}
                            </DottedList>
                        </Section>
                        <Section>
                            <SectionHeading>Language</SectionHeading>
                            <List>
                                {cvInfo.language.map((item, index) => <SkillRating key={index} name={item.language} rating={item.rating} total={5} color={colors.accent} />)}
                                {/* <SkillRating name="English" rating={4} total={5} color={colors.accent} />
                                <SkillRating name="Bangla" rating={1} total={5} color={colors.accent} /> */}
                            </List>
                            
                        </Section>
                    </div>
                </div>
                <div>
                    <Section>
                        <Heading>
                            <h1>{cvInfo.personalDetails.name}</h1>
                            <p>{cvInfo.personalDetails.subtitle}</p>
                        </Heading>
                    </Section>
                    <Section>
                        <SectionHeading>About Me</SectionHeading>
                        <HtmlRender>
                            {cvInfo.personalDetails.about}
                        </HtmlRender>
                    </Section>
                    <Section>
                        <SectionHeading>Employment</SectionHeading>
                        <List>
                            {cvInfo.employment.map((item, index) => <li key={index}><Listing                                
                                title={item.title}
                                subtitle = {item.subtitle}
                                date = {item.date}
                                description = {item.description}
                                color = {colors.accent}
                            /></li>)}
                        </List>
                        
                    </Section>
                    <Section>
                        <SectionHeading>Education</SectionHeading>
                        <List>
                            {cvInfo.education.map((item, index) => <li key={index}><Listing                                
                                title={item.title}
                                subtitle = {item.subtitle}
                                date = {item.date}
                                description = {item.description}
                                color = {colors.accent}
                            /></li>)}
                        </List>                        
                    </Section>
                    <Section>
                        <SectionHeading>Projects</SectionHeading>
                        <List>
                            {cvInfo.projects.map((item, index) => <li key={index}><Listing 
                                title={item.title}
                                subtitle = {item.subtitle}
                                date = {item.date}
                                description = {item.description}
                                color = {colors.accent}
                            /></li>)}
                        </List>                        
                    </Section>
                    <Section>
                        <SectionHeading>Certificates</SectionHeading>
                        <List>
                            {cvInfo.certificates.map((item, index) => <li key={index}><Listing 
                                title={item.title}
                                subtitle = {item.subtitle}
                                date = {item.date}
                                description = {item.description}
                                color = {colors.accent}
                            /></li>)}
                        </List>                        
                    </Section>
                </div>
            </DoubleColumn>
        </div>
    );

    
}

const colors = {
    primary: '#e6e6e6',
    accent: '#2b8aba'
}

const DoubleColumn = styled.div`
    display: flex;
    height: 100%;
    font-size: 0.9rem;
    & > div {
        padding: 20px;
        box-sizing: border-box;
    }
    & > div:nth-child(1) {
        flex: ${props => props.left ? props.left : 1 }
    }
    & > div:nth-child(2) {
        flex: ${props => props.right ? props.right : 1 }
    }
`
const Flex = styled.div.attrs(props => ({
        className:  props.className
    }))`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
`
const Section = styled.div`
    margin-bottom: 15px;
`
const Avatar = styled.img`
    height: ${props => props.height ? props.height : '128px'};
    width: ${props => props.width ? props.width : '128px'};
    border-radius: 50%;
`
const SectionHeading = styled.h2`
    color: ${colors.accent};
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid ${colors. accent};
    margin-bottom: 10px;
`
const List = styled.ul`
    style-style-type: none;
    li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        span {
            color: ${colors. accent};
            font-size: 1rem;
        }
    }
`
const DottedList = styled.ul`
    list-style-type: none;
    li {
        margin-left: 1rem;
        margin-bottom: 10px;
        position: relative;
        &:before {
            content: "";
            height: 8px;
            width: 8px;
            background-color: ${colors.accent};
            display: block;
            position: absolute;
            left: -1rem;
            top: 5px;
        }
    }
`
const Heading  = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    p {
        font-size: 0.8rem;
        color: gray;
    }
    
`
export default Compact;