import React from 'react';
import styled from 'styled-components';
import HtmlRender from '../Components/HtmlRender';
function Listing({ title, subtitle, date, description }) {
    const seperateDate = (date) => {

        let dates = date.split("-")
        let trimmed = dates.map(item => item.trim())
        return trimmed
    }
    const dates = seperateDate(date)
    return <Wrapper>
        <Heading>
            <Date>
                <p>{dates[0]}</p>
                <p>-</p>
                <p>{dates[1]}</p>
            </Date>
            <Title>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </Title>
        </Heading>
        <HtmlRender>
            {description}
        </HtmlRender>
    </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
`
const Heading = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 5px;
`
const Date = styled.div`  
    text-transform: uppercase;
    letter-spacing: .2rem;
    padding-right: 20px;
    border-right: 1px solid black;
`
const Title = styled.div`
    flex: 1;
`
export default Listing;
