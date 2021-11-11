import React from 'react'

export const template1 = (cvInfo) => {
    return ([
        {
            type: "double_column",
            content: {
                left: [
                    {
                        type: "heading",
                        content: {
                            heading: cvInfo.name,
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
    ])
}