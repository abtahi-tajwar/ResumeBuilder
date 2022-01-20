import React, { Component } from 'react'
import Builder from '../CVComponents/Builder'
import { LetterPage } from '../CVComponents/Style.style'
import Compact from './Compact/Compact'
import Elfin from './Elfin/Elfin'

export default class CVPage extends Component {
    render() {
        const { page, contents, cvInfo } = this.props
        return (
            <div>
                {/* <Builder page={page} contents={contents}/> */}
                <LetterPage>
                    <Elfin cvInfo={cvInfo} />
                </LetterPage>
            </div>
            
            // <CV>
            //     <LetterPage>
            //         <div>
            //             <DoubleColumn>
            //                 <div>
            //                     <Section>
            //                             <Heading1>Abtahi Tajwar</Heading1>
            //                             <p style={styles.heading.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            //                     </Section> 
            //                 </div>
            //                 <div>
            //                     <HeaderInformations />
            //                 </div>
            //             </DoubleColumn>
            //         </div> 
            //         <div>
            //             <DoubleColumn>
            //                 <div>                                
            //                     <Listings />
            //                     <Listings />    
            //                     <Listings />                
            //                 </div>
            //                 <div>
            //                     <SimpleListing />
            //                     <SimpleListing />
            //                     <SimpleText />
            //                 </div>
            //             </DoubleColumn>                    
            //         </div>                  
            //     </LetterPage>
            // </CV>
        )
    }
}
