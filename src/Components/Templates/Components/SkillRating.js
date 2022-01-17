import React from 'react';
import styled from 'styled-components';

function SkillRating({ name, rating, total, color = 'black' }) {
    const Dot = styled.div`
        height: 8px;
        width: 8px;
        background-color: ${props => props.selected ? color : 'rgba(0, 0, 0, 0.2)' };
        border-radius: 50%;
    `
    const Wrapper = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Dots = styled.div`
        display: flex;
        gap: 3px;
    `
    const render_rating = () => {
        var dots = [];
        for(let i = 0; i < rating; i++) {
            dots.push(<Dot selected></Dot>)
        }
        for(let i = rating; i < total; i++) {
            dots.push(<Dot></Dot>)
        }
        return dots
    }
    return (
        <Wrapper>
            <p>{name}</p>
            <Dots>
                {render_rating()}
            </Dots>   
        </Wrapper>
    );
}

export default SkillRating;