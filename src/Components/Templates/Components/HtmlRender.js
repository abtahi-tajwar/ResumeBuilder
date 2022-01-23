import React from 'react';
import styled from 'styled-components';
function HtmlRender({ children }) {
  return <ListStyle>
        <div dangerouslySetInnerHTML={{__html: children }} />
    </ListStyle>
}
const ListStyle = styled.div`
  ul {
    margin-left: 25px;
  }
`
export default HtmlRender;
