import React from 'react'
import { CV, LetterPage } from './Style.style'
function Builder({ page, contents }) {
    return (
        <CV>
            {page === 'letter' &&
                <LetterPage>

                </LetterPage>
            }
        </CV>
    )
}
Builder.defaultProps = {
    page: 'letter',
    contents: []
}
export default Builder
