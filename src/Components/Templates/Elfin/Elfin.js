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
function Elfin({ cvInfo }) {
  return (
  <Wrapper>
      <DoubleColumn left="2" right="5">
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
                <List>
                    <li><span><i class="fas fa-envelope"></i></span> { cvInfo.personalDetails.email }</li>
                    <li><span><i class="fas fa-globe"></i></span> { cvInfo.personalDetails.website }</li>
                    <li><span><i class="fas fa-linkedin"></i></span> { cvInfo.personalDetails.linkedin }</li>
                </List>
            </SectionHr>
            <SectionHr theme="dark">
                <SectionHeading>References</SectionHeading>
                <List>
                    <li><References 
                        name="Mr. Michel Robinson"
                        subtitle="Graphics & Web Designer"
                        contact="+88 01796-391053"
                        email="michaelrobinson@gmail.com"
                    /></li>
                    <li><References 
                        name="Mr. Michel Robinson"
                        subtitle="Graphics & Web Designer"
                        contact="+88 01796-391053"
                        email="michaelrobinson@gmail.com"
                    /></li>
                </List>
            </SectionHr>
            <SectionHr theme="dark">
                <SectionHeading>Languages</SectionHeading>
                <List>
                {cvInfo.language.map(item => <SkillRating name={item.language} rating={item.rating} total={5} color="white" />)}
                </List>
            </SectionHr>
            <SectionHr theme="dark">
                <SectionHeading>Hobbies</SectionHeading>
                <HorizontalList>
                    <li>Football</li>
                    <li>Cricket</li>
                    <li>Badminton</li>
                </HorizontalList>
            </SectionHr>
          </div>
          <div style={{ padding: '20px' }}>
              <Section>
                <Flex justify="space-between" align="flex-end">
                        <div>
                            <Name>{cvInfo.personalDetails.name}</Name>
                            <p>{cvInfo.personalDetails.subtitle}</p>
                        </div>
                        <div>
                            <List>
                            <li><span><i class="fas fa-envelope"></i></span> { cvInfo.personalDetails.email }</li>
                                    <li><span><i class="fas fa-phone"></i></span> { cvInfo.personalDetails.phone }</li>
                                    <li><span><i class="fas fa-home"></i></span> { cvInfo.personalDetails.address }</li>
                            </List>
                        </div>
                </Flex>
              </Section>
              {
                cvInfo.employment.length > 0 &&               
                <SectionHr>
                    <SectionHeading>Work Experience</SectionHeading>
                    {cvInfo.employment.map(item => 
                        <Listing 
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            description={item.description}
                        />
                    )}
                </SectionHr>
              }
              {
                  cvInfo.employment.length > 0 &&
                    <SectionHr>
                        <SectionHeading>Education</SectionHeading>
                        {cvInfo.projects.map(item => 
                            <Listing 
                                title={item.title}
                                subtitle={item.subtitle}
                                date={item.date}
                                description={item.description}
                            />
                        )}
                    </SectionHr>
              }
              <SectionHr>
                  <SectionHeading>Education</SectionHeading>
                  {cvInfo.education.map(item => 
                    <Listing 
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        description={item.description}
                    />
                  )}
              </SectionHr>
              <SectionHr>
                  <SectionHeading>Education</SectionHeading>
                  {cvInfo.certificates.map(item => 
                    <Listing 
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        description={item.description}
                    />
                  )}
              </SectionHr>
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
    height: 100%;
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
