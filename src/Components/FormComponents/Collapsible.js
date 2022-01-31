import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../CVComponents/Style.style';
function Collapsible({ title, selected, children}) {

    const [isVisible, setIsVisible] = useState(false)
    const collapsibleDiv = useRef()
    const isV = useRef(false)
    const wrapper = {
        width: '100%',
        marginBottom: '10px'
    }
    const collapseButton = {
        'width': '100%',
        'height': '50px',
        'backgroundColor': colors.primary,
        'color': 'white',
        'display': 'flex',
        'alignItems': 'center',
        'padding': '20px',
        'fontSize': '1.3rem',
        'boxSizing': 'border-box',
        'cursor': 'pointer'
    }
    const childrenStyle = {
        width: '100%',
        paddingTop: '15px'
    }
    // Function for collapse action
    const toggleCollapseState = () => {
        setIsVisible(!isVisible)
        // console.log(isVisible)
        isV.current = !isV.current
        // if(!isV.current) {
        //     collapsibleDiv.current.display = 'none'
        // } else {
        //     collapsibleDiv.current.display = 'block'
        // }
        
    }
    return (
        <div style={wrapper}>
            <div onClick={toggleCollapseState} style={collapseButton}>
                <p><i className="fas fa-plus"></i> {title}</p>
            </div>
            {/* {isVisible && 
                <Children >
                    {children}
                </Children>
            } */}
            {isVisible && <div style={childrenStyle}>
                {children}
            </div> }
            
        </div>
    );
}

export default Collapsible;