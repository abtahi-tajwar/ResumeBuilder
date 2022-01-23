import React, { Component } from 'react'
import Builder from '../CVComponents/Builder'
import { LetterPage } from '../CVComponents/Style.style'
import Compact from './Compact/Compact'
import Elfin from './Elfin/Elfin'
import Serif from './Serif/Serif'

export default class CVPage extends Component {
    render() {
        const { page, contents, cvInfo } = this.props
        return (
            <div>
                {/* <Builder page={page} contents={contents}/> */}
                <LetterPage>
                    <Compact cvInfo={cvInfo} />
                </LetterPage>
            </div>
        )
    }
}
