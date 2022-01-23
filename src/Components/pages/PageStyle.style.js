import styled from "styled-components";

export const spacing = {
    sectionMargin: '30px'
}

export const GridGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: auto;
    grid-gap: 30px;
    & > div {
        ${props => props.height && `height: ${props.height};`}
        width: 100%;
    }
    & > img {
        ${props => props.height && `height: ${props.height};`}
        width: 100%;
        object-fit: cover;
    }
`
export const Section = styled.div`
    margin-top: ${spacing.sectionMargin};
`
export const Thumbnail = styled.img`
    height: ${props => props.height ? props.height : '390px' };
    width: ${props => props.width ? props.width : '300px' };
    object-fit: cover;
    box-shadow: 7px 2px 11px 0px rgba(0,0,0,0.13);
    transition: all .3s ease-out;
    &:hover {
        box-shadow: 7px 2px 11px 0px rgba(0,0,0,0.1);
        filter: blur(0.5px) brightness(70%);
    }
`