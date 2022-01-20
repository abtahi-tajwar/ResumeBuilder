import React from 'react';

function HtmlRender({ children }) {
  return <div dangerouslySetInnerHTML={{__html: children }} />
}

export default HtmlRender;
