import React from 'react';
import styled from 'styled-components';

function Alert({ type, msg }) {
    if(msg !== "") {
        return <Wrapper type={type}>
            {type==='success' && <i className="fas fa-check-circle"></i>}
            {type==='error' && <i className="fas fa-times-circle"></i>}
            {type==='alert' && <i className="fas fa-exclamation-triangle"></i>}{msg}
        </Wrapper>;
    } else {
        return <div></div>
    }
}

const Wrapper = styled.div`
    margin: 10px 5px;
    max-width: 300px;
    width: 90%;
    padding: 15px;
    box-shadow: -3px 5px 18px 0px rgba(0,0,0,0.19);
    -webkit-box-shadow: -3px 5px 18px 0px rgba(0,0,0,0.19);
    -moz-box-shadow: -3px 5px 18px 0px rgba(0,0,0,0.19);
    background-color: white;
    font-weight: bold;
    border-left: 3px solid ${props => {
        if(props.type === 'alert') return "yellow"
        if(props.type === 'error') return 'red'
        if(props.type === 'success') return 'green'
    }};
    i {
        color: ${props => {
            if(props.type === 'alert') return "yellow"
            if(props.type === 'error') return 'red'
            if(props.type === 'success') return 'green'
        }};
        margin-right: 15px;
    }
`

export default Alert;
