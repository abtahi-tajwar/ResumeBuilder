import React from 'react';
import styled from 'styled-components';
import SkillRating from '../Components/SkillRating';
import Listing from './Listing';
import '../style.css'

function Compact() {    
    return (
        <div className='wrapper'>
            <DoubleColumn left="1" right="3">
                <div className="bg-primary">
                    <Section>
                        <Flex className="w-100 h-150">
                            <Avatar height="128px" width="128px" src="empty.jpg" />
                        </Flex>
                    </Section>
                    <div className="w-100">
                        <Section>
                            <SectionHeading>Personal Details</SectionHeading>
                            <List>
                                <li><span><i class="fas fa-envelope"></i></span> abtahitajwar@gmail.com</li>
                                <li><span><i class="fas fa-phone"></i></span> +88 01796-391053</li>
                                <li><span><i class="fas fa-home"></i></span> Jowar Sahara, Progati Shoroni</li>
                                <li><span><i class="fas fa-globe"></i></span> https://abtahi-tajwar.github.io/abtahitajwar</li>
                                <li><span><i class="fab fa-linkedin"></i></span> https://www.linkedin.com/in/abtahi-tajwar/</li>
                            </List>
                        </Section>
                        <Section>
                            <SectionHeading>Skills</SectionHeading>
                            <DottedList>
                                <li>HTML: Redesign website to increase traffic by 50% </li>
                                <li>CSS: Redesign website to increase traffic by 50% Redesign website to increase</li>
                                <li>Javascript: Redesign website to increase traffic by 50% </li>
                                <li>PHP: Redesign website to increase traffic by 50% </li>
                            </DottedList>
                        </Section>
                        <Section>
                            <SectionHeading>Language</SectionHeading>
                            <List>
                                <SkillRating name="English" rating={4} total={5} color={colors.accent} />
                                <SkillRating name="Bangla" rating={1} total={5} color={colors.accent} />
                            </List>
                            
                        </Section>
                    </div>
                </div>
                <div>
                    <Section>
                        <Heading>
                            <h1>Md. Abtahi Tajwar</h1>
                            <p>Fullstack Web Developer</p>
                        </Heading>
                    </Section>
                    <Section>
                        <SectionHeading>About Me</SectionHeading>
                        <p>Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach.</p>
                    </Section>
                    <Section>
                        <SectionHeading>Employment</SectionHeading>
                        <List>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
                        </List>
                        
                    </Section>
                    <Section>
                        <SectionHeading>Education</SectionHeading>
                        <List>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
                        </List>                        
                    </Section>
                    <Section>
                        <SectionHeading>Projects</SectionHeading>
                        <List>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
                        </List>                        
                    </Section>
                    <Section>
                        <SectionHeading>Certificates</SectionHeading>
                        <List>
                            <li><Listing 
                                title="Content Marketing Lead"
                                subtitle = "Pipedrive, London"
                                date = "Jan 2018 - Present"
                                description= "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
                                color = {colors.accent}
                            /></li>
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