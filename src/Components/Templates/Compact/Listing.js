import React from 'react';
import styled from 'styled-components';

function Listing({ title, subtitle, date, description, color = "gray" }) {
    const Wrapper = styled.div`
        width: 100%;
    `
    const Heading = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > p:nth-child(2) {
            color: ${color};
        }
    `
    const Subtitle = styled.p`
        color: ${color}
    `
    return (
        <Wrapper>
            <Heading>
                <p><b>{title}</b></p>
                <p><b>{date}</b></p>
            </Heading>
            <Subtitle>{subtitle}</Subtitle>
            <p>{description}</p>
        </Wrapper>
    );
}

export default Listing;