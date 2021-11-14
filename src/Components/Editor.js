import React from 'react'
import { useRef, useState, useEffect } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import CVPage from './Templates/CVPage';
import { template1 } from './Templates'
import TextInput from './FormComponents/TextInput';
import { Divider } from './CVComponents/Style.style';
import IncreasingInput from './FormComponents/IncreasingInput';
import MultipleGroupInput from './FormComponents/MultipleGroupInput';
import SimpleListingInput from './FormComponents/SimpleListingInput';

function Editor() {
    const componentRef  = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const [cvInfo, setCvInfo] = useState({
        name: 'Your Name',
        subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        heading_info_1: [
            '123 Your Street',
            'Your City, ST 12345'
        ],
        heading_info_2: [
            '(123) 456-7890',
            'no_reply@example.com'
        ],
        list_1_title: 'Projects',
        list_1: [
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
        ],
        list_2_title: 'Job Experience',
        list_2: [
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
        ],
        list_3_title: 'Job Experience',
        list_3: [
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
        ],
        simple_list_1_title: 'Skills',
        simple_list_1: [
            {content: 'List content 1', subcontent: 'List sub content' },
            {content: 'List content 2', subcontent: 'List sub content' },
            {content: 'List content 3', subcontent: 'List sub content' },
            {content: 'List content 4', subcontent: 'List sub content' },
        ],
        simple_list_2_title: 'Language',
        simple_list_2: [
            {content: 'List content 1', subcontent: 'List sub content' },
            {content: 'List content 2', subcontent: 'List sub content' },
            {content: 'List content 3', subcontent: 'List sub content' },
            {content: 'List content 4', subcontent: 'List sub content' },
        ]
    })
    const pdfDownload = e => {
        e.preventDefault()
        let doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: 'letter'
        });
        console.log(doc.internal.pageSize.width);
        doc.html(document.querySelector(".pdfDownload"), {
        callback: () => {
            doc.save('resume.pdf');
        }
        });
    }
    const template = template1(cvInfo)
    const handleForm = (e) => {
        setCvInfo({
            ...cvInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <div className="flex">
                <div className="container flex-1 scroll-window full-height">
                    <h2 className="light-text">Live CV Editor</h2>
                    <button onClick={handlePrint} className="btn m-1">Print</button>
                    <button onClick={pdfDownload} className="btn m-1">Download</button>
                    <Divider />    
                        <h2 className="mt-2">Heading</h2>                
                        <div className="flex flex-col-eq fg-1">
                            <div>
                                <TextInput
                                    name="name"
                                    value={cvInfo.name}
                                    handleInput={handleForm}
                                    label="Name"
                                    placeholder="Your Full Name.."
                                />
                            </div>
                            <div>
                            <TextInput
                                    name="subtitle"
                                    value={cvInfo.subtitle}
                                    handleInput={handleForm}
                                    label="Subtitle"
                                    placeholder="Write your headline.."
                                />
                            </div>
                        </div>
                        <h2 className="mt-2">Heading Informations</h2>
                        <div className="row mt">                            
                            <div>
                                <IncreasingInput 
                                    cvInfo={cvInfo}
                                    setCvInfo={setCvInfo}
                                    keyName="heading_info_1"
                                />
                            </div>
                            <div>
                                <IncreasingInput 
                                    cvInfo={cvInfo}
                                    setCvInfo={setCvInfo}
                                    keyName="heading_info_2"
                                />
                            </div>
                        </div>
                        {/* Left list 1 input groups */}
                        <h2 className="mt-2">Left List 1</h2>  
                        <TextInput
                            name="list_1_title"
                            value={cvInfo.list_1_title}
                            handleInput={handleForm}
                            label="List Title"
                            placeholder="Write the title of your list.."
                        />
                        <div>
                            <MultipleGroupInput 
                                cvInfo={cvInfo}
                                setCvInfo={setCvInfo}
                                keyName="list_1"
                            /> 
                        </div> 
                        {/* Left list 2 input groups */}
                        <h2 className="mt-2">Left List 2</h2>  
                        <TextInput
                            name="list_2_title"
                            value={cvInfo.list_2_title}
                            handleInput={handleForm}
                            label="List Title"
                            placeholder="Write the title of your list.."
                        />
                        <div>
                            <MultipleGroupInput 
                                cvInfo={cvInfo}
                                setCvInfo={setCvInfo}
                                keyName="list_2"
                            /> 
                        </div> 
                        {/* Left list 3 input groups */}
                        <h2 className="mt-2">Left List 3</h2>  
                        <TextInput
                            name="list_3_title"
                            value={cvInfo.list_3_title}
                            handleInput={handleForm}
                            label="List Title"
                            placeholder="Write the title of your list.."
                        />
                        <div>
                            <MultipleGroupInput 
                                cvInfo={cvInfo}
                                setCvInfo={setCvInfo}
                                keyName="list_3"
                            /> 
                        </div>

                        {/* Right Simple list 1 input groups */}
                        <h2 className="mt-2">Short List 1</h2>  
                        <TextInput
                            name="simple_list_1_title"
                            value={cvInfo.simple_list_1_title}
                            handleInput={handleForm}
                            label="List Title"
                            placeholder="Write the title of your list.."
                        />
                        <div>
                            <SimpleListingInput 
                                cvInfo={cvInfo}
                                setCvInfo={setCvInfo}
                                keyName="simple_list_1"
                            /> 
                        </div>  
                        {/* Right Simple list 2 input groups */}
                        <h2 className="mt-2">Short List 2</h2>  
                        <TextInput
                            name="simple_list_2_title"
                            value={cvInfo.simple_list_2_title}
                            handleInput={handleForm}
                            label="List Title"
                            placeholder="Write the title of your list.."
                        />
                        <div>
                            <SimpleListingInput 
                                cvInfo={cvInfo}
                                setCvInfo={setCvInfo}
                                keyName="simple_list_2"
                            /> 
                        </div>  
                    
                </div>
                <div className="scroll-window full-height">
                    <div className="pdfDownload ">
                        <CVPage 
                            ref={componentRef}
                            page="letter"
                            contents={template}                            
                        />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
    
}

export default Editor
