import React, { Component } from 'react'
import Builder from '../CVComponents/Builder'
import { LetterPage } from '../CVComponents/Style.style'
import Compact from './Compact/Compact'
import Elfin from './Elfin/Elfin'
import Serif from './Serif/Serif'
import { useSelector } from 'react-redux';

export default class CVPage extends Component {
    render() {
        console.log("CVPage")
        const { page, contents, theme, cvInfo } = this.props
        return (
            <div className="pdfDownload_2">
                {/* <Builder page={page} contents={contents}/> */}
                <LetterPage>
                    {theme.toLowerCase() === 'compact' && <Compact cvInfo={cvInfo} /> }
                    {theme.toLowerCase() === 'elfin' && <Elfin cvInfo={cvInfo}/> }
                    {theme.toLowerCase() === 'serif' && <Serif cvInfo={cvInfo} /> }
                    {/* <Elfin cvInfo={cvInfo} /> */}
                </LetterPage>
            </div>
        )
    }
}
