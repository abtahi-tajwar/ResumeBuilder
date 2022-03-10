import React from 'react';
import styled from 'styled-components';
import './elfin.css'
import { DoubleColumn } from '../ThemeStyles.style';
import { Avatar, Flex, List } from '../ThemeStyles.style';
import '../style.css'
import References from './References';
import SkillRating from '../Components/SkillRating';
import HtmlRender from '../Components/HtmlRender';
import Listing from './Listing';
import RenderSocialMedias from '../Components/RenderSocialMedias';
import { DottedList } from '../../MainStyle.style';
import Icon from '../../Icons/Icon';

function Elfin({ cvInfo }) {
  return (
  <Wrapper>
      <DoubleColumn left="2" right="5" height="100%">
          <div style={{ padding: '20px', backgroundColor: colors.primary }}>
            <Section>
                <Flex>
                    <Avatar src={cvInfo.avatar} alt="Profile Picture"/>
                </Flex>
            </Section>
            <Section theme="dark">
                <SectionHeading>About Me</SectionHeading>
                <HtmlRender>{cvInfo.personalDetails.about}</HtmlRender>
            </Section>
            <SectionHr theme="dark">
                <SectionHeading>Website & Social Links</SectionHeading>
                <RenderSocialMedias items={cvInfo.personalDetails}/>
            </SectionHr>
            { cvInfo.skills.length > 0 && <SectionHr theme="dark">
                <SectionHeading>Skills</SectionHeading>
                <DottedList color="white">
                    {cvInfo.skills.map((item, index) => <li key={index}>{item.skill}</li>)}
                </DottedList>
            </SectionHr> }
            { cvInfo.language.length > 0 && <SectionHr theme="dark">
                <SectionHeading>Languages</SectionHeading>
                <List>
                {cvInfo.language.map((item, index) => <SkillRating key={index} name={item.language} rating={item.rating} total={5} color="white" />)}
                </List>
            </SectionHr> }
            {cvInfo.references.length > 0 && <SectionHr theme="dark">
                <SectionHeading>References</SectionHeading>
                {cvInfo.references.length > 0 && 
                <List>
                    {cvInfo.references.map((item, index) => <li key={index}><References 
                        name={item.name}
                        subtitle={item.subtitle}
                        contact={item.phone}
                        email={item.email}
                    /></li>)}
                </List> }
            </SectionHr> }
            
            
          </div>
          <div style={{ padding: '20px' }}>
              <Section>
                <Flex justify="space-between" align="flex-end">
                        <div>
                            <Name>{cvInfo.personalDetails.name}</Name>
                            <p>{cvInfo.personalDetails.subtitle}</p>
                        </div>
                        <div style={{ maxWidth: "200px"}}>
                            <List>
                            <li><Icon icon="email" /> { cvInfo.personalDetails.email }</li>
                            <li><Icon icon="phone" /> { cvInfo.personalDetails.phone }</li>
                            <li><Icon icon="home" /> { cvInfo.personalDetails.address }</li>
                            </List>
                        </div>
                </Flex>
              </Section>
              {
                cvInfo.employment.length > 0 &&               
                <SectionHr>
                    <SectionHeading>Work Experience</SectionHeading>
                    {cvInfo.employment.map((item, index) => 
                        <Listing 
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        />
                    )}
                </SectionHr>
              }
              {
                  cvInfo.projects.length > 0 &&
                    <SectionHr>
                        <SectionHeading>Projects</SectionHeading>
                        {cvInfo.projects.map((item, index) => 
                            <Listing 
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                date={item.date}
                                description={item.description}
                            />
                        )}
                    </SectionHr>
              }
              {cvInfo.education.length > 0 &&
                <SectionHr>
                    <SectionHeading>Education</SectionHeading>
                    {cvInfo.education.map((item, index) => 
                        <Listing 
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        />
                    )}
                </SectionHr>
                }  
            {cvInfo.certificates.length > 0 && 
              <SectionHr>
                  <SectionHeading>Certificates</SectionHeading>
                  {cvInfo.certificates.map((item, index) => 
                    <Listing
                        key={index} 
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        description={item.description}
                    />
                  )}
              </SectionHr>
            }
          </div>
      </DoubleColumn>
  </Wrapper>
  );
}

const heights = {
    section: '20px',
    subseciton: '15px'
}
const colors = {
    primary: '#414141'
}

const Wrapper = styled.div`
    width: 100%;
    min-height: inherit;
    font-family: 'Raleway', sans-serif;
    font-size: 0.8rem;
`
const Name = styled.h1`
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2.5rem;
    width: 150px;
    line-height: 45px;
`
const SectionHr = styled.div`
    padding-top: ${heights.section};
    margin-top: ${heights.section};
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid ${props => props.theme === 'dark' ? 'white' : colors.primary};
    color: ${props => props.theme === 'dark' ? 'white' : colors.primary }
`
const Margin = styled.div`
    width: 100%;
    height: 1px;
    margin-top: ${props => props.size ? (props.size - 1) + 'px' : heights.section }
`
const Section = styled.div`
    margin-top: ${heights.section};
    color: ${props => props.theme === 'dark' ? 'white' : colors.primary }
`
const SectionHeading = styled.h2`
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: ${heights.subseciton}
`
const HorizontalList = styled.ul`
    li {
        float: left;
        margin-left: 15px;
    }
`
export default Elfin;
