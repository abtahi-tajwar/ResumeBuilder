export const template1 = (cvInfo) => {
    return ([
        {
            type: "double_column",
            left: 3,
            right: 1,
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
            left: 3,
            right: 1,
            content: 
            {
                left: [
                    {
                        type: "listing",
                        content: {
                            title: cvInfo.list_1_title,
                            items: cvInfo.list_1
                        }
                    },
                    {
                        type: "listing",
                        content: {
                            title: cvInfo.list_2_title,
                            items: cvInfo.list_2
                        }
                    },
                    {
                        type: "listing",
                        content: {
                            title: cvInfo.list_3_title,
                            items: cvInfo.list_3
                        }
                    }
                ],
                right: [
                    {
                        type: "simple_listing",
                        content: {
                            title: cvInfo.simple_list_1_title,
                            items: cvInfo.simple_list_1
                        }
                    },
                    {
                        type: "simple_listing",
                        content: {
                            title: cvInfo.simple_list_2_title,
                            items: cvInfo.simple_list_2
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