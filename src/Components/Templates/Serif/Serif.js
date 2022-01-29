import React from 'react';
import styled from 'styled-components';
import { spacings, colors } from './Variables';
import { Flex } from '../ThemeStyles.style';
import { Avatar } from '../ThemeStyles.style';
import Skills from '../Components/Skills';
import HtmlRender from '../Components/HtmlRender';
import SkillRating from '../Components/SkillRating';
import { List } from '../ThemeStyles.style';
import Listing from './Listing';
import RenderSocialMedias from '../Components/RenderSocialMedias';
import Icon from '../../Icons/Icon';
function Serif({ cvInfo }) {
  return <Wrapper>
        <Flex justify="space-between" align="flex-end" style={{ paddingBottom: spacings.sectionMargin }}>
            <Name>{cvInfo.personalDetails.name}</Name>
            <AvatarHolder>
                <Avatar src={cvInfo.avatar} alt="Profile Picture" />
            </AvatarHolder>
        </Flex>
        <SubtitleSection>
            <Flex justify="space-between" align="center">
                <p style={{ textTransform: 'uppercase'}}>{cvInfo.personalDetails.subtitle}</p>
                <p>E: {cvInfo.personalDetails.email}</p>
            </Flex>
        </SubtitleSection>
        <CustomColumn left="2" right="5">
            <div>
                <Section>
                    <SectionHeading>Contact Me</SectionHeading>
                    <BorderedList>
                        {cvInfo.personalDetails.phone !== '' && <li>
                            <Icon icon="phone" size={24} />
                            <div>
                                <b>Contact</b>
                                <p>{cvInfo.personalDetails.phone}</p>
                            </div>
                        </li>}
                        {cvInfo.personalDetails.email !== '' && <li>
                            <Icon icon="email" size={24} />
                            <div>
                                <b>Email</b>
                                <p>{cvInfo.personalDetails.email}</p>
                            </div>
                        </li>}
                        {cvInfo.personalDetails.website !== '' && <li>
                            <Icon icon="web" size={24} />
                            <div>
                                <b>Web</b>
                                <p>{cvInfo.personalDetails.website}</p>
                            </div>
                        </li>}
                    </BorderedList>
                </Section>
                {cvInfo.skills.length > 0 && <Section>
                    <SectionHeading style={{marginBottom: spacings.subsectionMargin}}>Skills</SectionHeading>
                    <Skills skills={cvInfo.skills} color={colors.dark} />
                </Section>}
                <Section>
                    <SectionHeading>Social</SectionHeading>
                    <SocialMedia>
                        <RenderSocialMedias items={cvInfo.personalDetails} light={false} />
                    </SocialMedia>
                </Section>
                {cvInfo.language.length > 0 && <Section>
                    <SectionHeading>Language</SectionHeading>
                    <List>
                        {cvInfo.language.map(item=> <SkillRating 
                            name={item.language}
                            rating={item.rating}
                            total={5}
                            color={colors.dark}
                        />)}
                    </List>
                    
                </Section>}
                {cvInfo.references.length > 0 && <Section>
                    <SectionHeading>References</SectionHeading>
                    <List>
                        {cvInfo.references.map(item => 
                            <li>
                                <h4>{item.name}</h4>
                                <p>{item.subtitle}</p>
                                <p>Phone: {item.phone}</p>
                                <p>Email: {item.email}</p>
                            </li> 
                        )}                        
                    </List>                    
                </Section>}
            </div>
            <div><Triangle /></div>
            <div>
                {cvInfo.personalDetails.about !== "" && <Section>
                    <SectionHeading>Professional Profile</SectionHeading>
                    <HtmlRender>
                        {cvInfo.personalDetails.about}
                    </HtmlRender>
                </Section>}
                {cvInfo.employment.length > 0 && <Section>
                    <SectionHeading>Employment</SectionHeading>
                    <List>
                        {cvInfo.employment.map(item => <li><Listing 
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        /></li>)}
                    </List>                     
                </Section>}
                {cvInfo.education.length > 0 && <Section>
                    <SectionHeading>Education</SectionHeading>
                    <List>
                        {cvInfo.education.map(item => <li><Listing 
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        /></li>)}
                    </List>                     
                </Section>}
                {cvInfo.projects.length > 0 && <Section>
                    <SectionHeading>Projects</SectionHeading>
                    <List>
                        {cvInfo.projects.map(item => <li><Listing 
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        /></li>)}
                    </List>                     
                </Section>}
                {cvInfo.certificates.length > 0 && <Section>
                    <SectionHeading>Certificates</SectionHeading>
                    <List>
                        {cvInfo.certificates.map(item => <li><Listing 
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        /></li>)}
                    </List>                     
                </Section>}
            </div>
        </CustomColumn>
  </Wrapper>;
}

const Wrapper  = styled.div`
    margin: 0px ${spacings.pageMargin} ${spacings.pageMargin} ${spacings.pageMargin};
    padding-top: ${spacings.pageMargin};
    box-sizing: border-box;
    border-top: ${spacings.pageMargin} solid ${colors.primary};
    font-family: 'Cinzel', serif;
    color: ${colors.dark};
`
const Name = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    width: 350px;
    text-transform: uppercase;
    letter-spacing: .2rem;
`
const AvatarHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border: 2px solid ${colors.primary};
    border-radius: 50%;
`
const SubtitleSection = styled.div`
    border-top: 1px solid ${colors.dark};
    border-bottom: 1px solid ${colors.dark};
    width: 100%;
    padding: ${spacings.subsectionMargin} 0px;
`
const CustomColumn = styled.div`
    display: flex;
    height: 100%;
    font-size: 0.9rem;
    position: relative;
    gap: 20px;
    & > div:not(& > div:nth-child(2)) {
        padding: 30px 0px;
        box-sizing: border-box;
    }
    & > div:nth-child(1) {
        flex: ${props => props.left ? props.left : 1 };
    }
    & > div:nth-child(2) {
        width: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:after {
            content: "";
            height: 100%;
            width: 1px;
            display: block;
            background-color: ${colors.dark};
            margin-top: -1px;
        }
    }
    & > div:nth-child(3) {
        flex: ${props => props.right ? props.right : 1 };
    }
`
const Triangle = styled.div`
    height: 0px;
    width: 0px;
    border: 10px solid transparent;
    border-bottom: none;
    border-top: 10px solid ${colors.dark};
`
const Section = styled.div`
    margin-bottom: ${spacings.sectionMargin};
`
const SectionHeading = styled.h2`
    letter-spacing: .17rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    margin-bottom: ${spacings.subsectionMargin};
    &:after {
        content: "";
        display: block;
        width: 20px;
        height: 1px;
        background-color: ${colors.dark};
    }
`
const BorderedList = styled.ul`
    list-style-type: none;
    li {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid ${colors.dark};
        i {
            font-size: 1.4rem;
            padding-right: 10px;
        }
        div {
            b {
                text-transform: uppercase;
            }
            p {
                font-weight: lighter;
            }
        }
    }
`
const SocialMedia = styled.div`
    i {
        font-size: 1.4rem;
        padding-right: 10px;
    }
`

export default Serif;
