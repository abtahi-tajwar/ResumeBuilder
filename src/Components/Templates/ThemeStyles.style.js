
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
`
export const Section = styled.div`
    margin-bottom: 15px;
`
export const Avatar = styled.img`
    height: ${props => props.height ? props.height : '128px'};
    width: ${props => props.width ? props.width : '128px'};
    border-radius: 50%;
`
export const List = styled.ul`
    style-style-type: none;
    li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        span {
            font-size: 1rem;
        }
    }
`