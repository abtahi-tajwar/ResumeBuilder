
import styled from "styled-components"
export const DoubleColumn = styled.div`
    display: flex;
    height: 100%;
    & > div {
        padding: 20px;
        box-sizing: border-box;
    }
    & > div:nth-child(1) {
        flex: ${props => props.left ? props.left : 1 }
    }
    & > div:nth-child(2) {
        flex: ${props => props.right ? props.right : 1 }
    }
`
export const Flex = styled.div.attrs(props => ({
        className:  props.className
    }))`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
    ${props => props.gap && `gap: ${props.gap}`};
`
export const Section = styled.div`
    margin-bottom: 15px;
`
export const Avatar = styled.img.attrs(props => ({
    src: props.src === "" ? '../empty.jpg' : props.src
}))`
    height: ${props => props.height ? props.height : '128px'};
    width: ${props => props.width ? props.width : '128px'};
    border-radius: 50%;
    object-fit: cover;
`
export const List = styled.ul`
    list-style-type: none;
    word-break: break-all;
    li {
        margin-bottom: 10px;
        align-items: center;
        gap: 5px;
        span {
            font-size: 1rem;
        }
    }
`