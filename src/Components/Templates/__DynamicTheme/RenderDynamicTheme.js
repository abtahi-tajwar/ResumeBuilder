import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GetTemplateData } from '../../../firebase/Templates'

function RenderDynamicTheme({ theme }) {
  const [output, setOutput] = useState({
    htmlCode: "",
    styleCode: ""
  })
  useEffect(() => {
    GetTemplateData(theme, (data, error) => {
      if(data) {
        setOutput({
          htmlCode: data.style,
          styleCode: data.body
        })
      } else {
        setOutput({
          htmlCode: 'Something went wrong',
          styleCode: 'padding: 20px;'
        })
      }
    })
  }, [])
  useEffect(() => {
    console.log(output)
  }, [output])
  return (
    <Wrapper styleCode={output.styleCode}>
        <div dangerouslySetInnerHTML={{__html: output.htmlCode }} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
    ${props => props.styleCode}
`
export default RenderDynamicTheme