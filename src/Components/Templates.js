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
                            subheading: cvInfo.subtitle
                        }
                    }
                ],
                right: [
                    {
                        type: "heading_info",
                        content: {
                            informations: [
                                cvInfo.heading_info_1,
                                cvInfo.heading_info_2
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
                            items: cvInfo.list_1
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