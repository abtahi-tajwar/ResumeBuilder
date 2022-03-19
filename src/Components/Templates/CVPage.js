import React, { Component } from 'react'
import Builder from '../CVComponents/Builder'
import { LetterPage } from '../CVComponents/Style.style'
import Compact from './Compact/Compact'
import Elfin from './Elfin/Elfin'
import Serif from './Serif/Serif'
import Dazzle from './Dazzle/Dazzle'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners'
import RenderDynamicTheme from './__DynamicTheme/RenderDynamicTheme'
import { GetTemplateData } from '../../firebase/Templates'

export default class CVPage extends Component {
    
    render() {
        const { page, contents, theme, cvInfo, thumbnail, isStatic } = this.props
        return (
            theme ? 
                <div className="pdfDownload_2">
                    {/* <Builder page={page} contents={contents}/> */}
                    {!thumbnail ? 
                        <LetterPage>
                            {theme.toLowerCase() === 'compact' && <Compact cvInfo={cvInfo} /> }
                            {theme.toLowerCase() === 'elfin' && <Elfin cvInfo={cvInfo}/> }
                            {theme.toLowerCase() === 'serif' && <Serif cvInfo={cvInfo} /> }
                            {theme.toLowerCase() === 'dazzle' && <Dazzle cvInfo={cvInfo} /> }
                            { !isStatic && <RenderDynamicTheme theme={theme} /> }
                            {/* <Elfin cvInfo={cvInfo} /> */}
                        </LetterPage> :
                        <Wrapper>
                            {theme.toLowerCase() === 'compact' && <Compact cvInfo={cvInfo} /> }
                            {theme.toLowerCase() === 'elfin' && <Elfin cvInfo={cvInfo}/> }
                            {theme.toLowerCase() === 'serif' && <Serif cvInfo={cvInfo} /> }
                            {theme.toLowerCase() === 'dazzle' && <Dazzle cvInfo={cvInfo} /> }
                        </Wrapper>
                    }
                </div> :
                <div>Loading</div>
            
        )
    }    
}
const Wrapper = styled.div`
    width: 100%;
    height: 200px;    
    overflow: hidden;
    & > div {
        transform-origin: top left;
        transform: scale(0.5);
    }
`