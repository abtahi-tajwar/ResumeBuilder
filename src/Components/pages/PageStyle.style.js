import styled from "styled-components";

export const spacing = {
    sectionMargin: '30px'
}

export const GridGallery = styled.div`
    display: grid;
    ${props => props.autoFit ? 
        `grid-template-columns: repeat(auto-fill, minmax(${props.width}, 1fr));` :
        `grid-template-columns: repeat(auto-fill, ${props.width});`
    }
    
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

export const Thumbnail = styled.div`
    height: ${props => props.height ? props.height : '100%' };
    width: ${props => props.width ? props.width : '100%' };
    box-shadow: 7px 2px 11px 0px rgba(0,0,0,0.13);
    transition: all .3s ease-out;
    position: relative;
    &:after {
        content: "${props => props.name}";
        display: block;
        position: absolute;
        color: white;
        font-weight: lighter;
        font-size: 2.5rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 110%);   
        opacity: 0;
        transition: all .5s ease-out;     
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all .5s ease-out;
    }
    &:hover {
        box-shadow: 7px 2px 11px 0px rgba(0,0,0,0.1);        
        img {
            filter: blur(0.5px) brightness(40%);
        }
        &:after {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
    }
`