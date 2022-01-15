import React from 'react';
import styled from 'styled-components';
import { SubSection } from '../Style.style';
function Avatar({ src, size, rounded = true }) {
    const AvatarImage = styled.img`
        height: ${size};
        width: ${size};
        ${rounded && `
            border-radius: 50%;
        `}
        object-fit: cover;
        
    `
    return (
        <SubSection>
            <AvatarImage src={src} alt="CV Profile Picture" />
        </SubSection>
    );
}

export default Avatar;