import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function TabShifter({ labels, tabs, setTabs, fontSize = "1.4rem", primaryColor = "black", secondaryColor = "gray" }) {
    const [currentIndex, setCurrentIndex] = useState(1)
    useEffect(() => {
        tabs.forEach((item, index) => {
            if (item.visible) {
                setCurrentIndex(index)
                return
            }
        })
    }, [tabs])
    const handleTabChange = index => {
        setTabs(tabs.map((item, i) => {
            if(i === index) {
                return {
                    ...item,
                    visible: true
                }
            }
            return {
                ...item,
                visible: false
            }
        }))
    }
    return <Wrapper>
        {labels.map((item, index) => <Tab
            key={index}
            selected={currentIndex === index && true}
            color={primaryColor}
            secondaryColor={secondaryColor}
            fontSize={fontSize}
            onClick={() => handleTabChange(index)}
        >
            {item}
        </Tab>)}
    </Wrapper>;
}

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`
const Tab = styled.div.attrs(props => ({
    onClick: props.onClick
}))`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.fontSize};
    color: ${props => props.selected ? props.color : props.secondaryColor};
    border-bottom: 3px solid ${props => props.selected ? props.color : props.secondaryColor};
    ${props => !props.selected && `cursor: pointer`};
    
    &:hover {
        backdrop-filter: brightness(0.97);
        
    }
`

export default TabShifter;
