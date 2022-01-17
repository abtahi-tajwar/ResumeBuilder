import React from 'react'
import Avatar from './Sections/Avatar'
import HeaderInformations from './Sections/HeaderInformations'
import Heading from './Sections/Heading'
import Listings from './Sections/Listings'
import SimpleListing from './Sections/SimpleListing'
import SimpleText from './Sections/SimpleText'
import { CV, DoubleColumn, LetterPage, Section } from './Style.style'
function Builder({ page, contents }) {
    return (
        <CV>
            {renderPage(
               contents.content.map((content, index )=> {
                    return (
                        <div key={index} style={{ height: "100%" }}>
                            {printLayout(content)}
                        </div>
                    )
                })
            )}            
        </CV>
    )
    function renderPage(jsx) {
        if(page === 'letter') {
            return(
                <LetterPage
                    margin={contents.margin}
                >
                    {jsx}
                </LetterPage>
            ) 
        }
    }  
    function printLayout(obj) {
        if("type" in obj) {            
            if(obj.type === 'double_column') {
                return (
                    <DoubleColumn
                        left={obj.left ? obj.left : 1}
                        right={obj.right ? obj.right : 1}
                        leftBgColor = {obj.leftBgColor}
                        rightBgColor = {obj.rightBgColor}
                        height = {obj.height}
                        padding = {obj.padding}
                    >
                        <div>{printSections(obj.content.left)}</div>
                        <div>{printSections(obj.content.right)}</div>
                    </DoubleColumn>
                )
            } else {
                return (
                    <Section>
                        <div>{obj.content}</div>
                    </Section>                
                )
            }
        } else {            
            return (
                <Section>
                    <div>{obj.content}</div>
                </Section>                
            )
        }
    }
    function printSections(obj) {        
        return obj.map((section, index) => {
            if("type" in section) {
                if(section.type === 'listing') {
                    return (
                        <Listings
                            key={index}
                            title={section.content.title}
                            items={section.content.items}
                            theme = {section.theme ? section.theme : null}
                        />
                    )
                } else if(section.type === 'simple_listing') {
                    return (
                        <SimpleListing
                            key={index}
                            title = {section.content.title}
                            items = {section.content.items}
                        />
                    )
                } else if(section.type === 'simple_text') {
                    return (
                        <SimpleText
                            key={index}
                            title = {section.content.title}
                            text = {section.content.text}
                        />
                    )
                } 
                else if(section.type === 'heading') {
                    return (
                        <Heading 
                            key={index}
                            heading = {section.content.heading}
                            subheading = {section.content.subheading}
                        />
                    )
                } else if(section.type === 'heading_info') {
                    return(
                        <HeaderInformations 
                            key={index}
                            informations = {section.content.informations}
                        />
                    )
                } else if(section.type === 'avatar') {
                    return (
                        <Avatar
                            key={index}
                            src={section.content.src}
                            size={section.content.size}
                        />
                    )
                }
                else {
                    return (
                        <Section>{section.content}</Section>
                    )
                }
            } else {
                return (
                    <Section>{section.content}</Section>
                )
            }
        })
    }
}
Builder.defaultProps = {
    page: 'letter',
    contents: [
        {
            type: "double_column",
            content: {
                left: [
                    {
                        type: "heading",
                        content: {
                            heading: 'Abtahi Tajwar',
                            subheading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
                        }
                    }
                ],
                right: [
                    {
                        type: "heading_info",
                        content: {
                            informations: [
                                [
                                    '123 Your Street',
                                    'Your City, ST 12345'
                                ],
                                [
                                    '(123) 456-7890',
                                    'no_reply@example.com'
                                ]
                            ]
                        }
                    }
                ]
            }
        },
        {
            type: "double_column",
            content: 
            {
                left: [
                    {
                        type: "listing",
                        content: {
                            title: 'Listings',
                            items: [
                                {
                                    title: 'Item 1',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 2',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 3',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                }
                            ]
                        }
                    },
                    {
                        type: "listing",
                        content: {
                            title: 'Listings',
                            items: [
                                {
                                    title: 'Item 1',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 2',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 3',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                }
                            ]
                        }
                    },
                    {
                        type: "listing",
                        content: {
                            title: 'Listings',
                            items: [
                                {
                                    title: 'Item 1',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 2',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                },
                                {
                                    title: 'Item 3',
                                    subtitle: 'Place list items according to your priority',
                                    link: 'https://abtahi-tajwar.github.io/abtahitajwar/',
                                    date: 'month 20xx - present',
                                    extra: '',
                                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                                }
                            ]
                        }
                    }
                ],
                right: [
                    {
                        type: "simple_listing",
                        content: {
                            title: "Simple Listing",
                            items: [
                                {content: 'List content 1', subcontent: 'List sub content' },
                                {content: 'List content 2', subcontent: 'List sub content' },
                                {content: 'List content 3', subcontent: 'List sub content' },
                                {content: 'List content 4', subcontent: 'List sub content' },
                            ]
                        }
                    },
                    {
                        type: "simple_listing",
                        content: {
                            title: "Simple Listing",
                            items: [
                                {content: 'List content 1', subcontent: 'List sub content' },
                                {content: 'List content 2', subcontent: 'List sub content' },
                                {content: 'List content 3', subcontent: 'List sub content' },
                                {content: 'List content 4', subcontent: 'List sub content' },
                            ]
                        }
                    },
                    {
                        type: "simple_text",
                        content: {
                            title: 'simple_text',
                            text: 'Lorem ipsum, Dolor sit amet, Consectetuer'
                        }
                        
                    }
                ]
            }
                
            
        }
    ]
}
export default Builder
