import React from 'react'
import styled from 'styled-components'
import { DoubleColumn } from '../ThemeStyles.style'
import './dazzle.css'
import * as config from './Config'
import { Flex } from '../ThemeStyles.style'
import { Avatar } from '../ThemeStyles.style'
import RenderSocialMedias from '../Components/RenderSocialMedias'

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
            </div>
            <div></div>
        </DoubleColumn>
    </React.Fragment>
  )
}
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
    letter-spacing: 1rem;
    text-transform: uppercase;
    font-weight: lighter;
    margin-bottom: 10px;
`
export default Dazzle