import React, { useRef, useState } from 'react';
import CVPage from './Templates/CVPage';
import { useReactToPrint } from 'react-to-print';
import { template1 } from './Templates';
import jsPDF from 'jspdf';
import { Divider } from './CVComponents/Style.style';
import Collapsible from './FormComponents/Collapsible';
import { Grid } from './MainStyle.style';
import TextInput from './FormComponents/TextInput';
import MultipleIncreasingInput from './FormComponents/v2/MultipleIncreasingInput';
import IncreasingGroupInput from './FormComponents/v2/IncreasingGroupInput';
import ImageUpload from './FormComponents/ImageUpload';
import { Editor } from '@tinymce/tinymce-react';
import ReferencesgroupInput from './FormComponents/v2/ReferencesgroupInput';
import { useParams } from 'react-router-dom';

function Editor2() {

    /* Functions for handle pdf print and download */
    const componentRef  = useRef()
    const editorRef = useRef(null);
    const { theme } = useParams()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const pdfDownload = e => {
        e.preventDefault()
        let doc = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: 'letter',
        });
        console.log(doc.internal.pageSize.width);
        let scaleFactor = 0.565;
        let width = document.querySelector(".pdfDownload").getBoundingClientRect().width
        let height = document.querySelector(".pdfDownload").getBoundingClientRect().height
        document.querySelector(".pdfDownload").style.transformOrigin = `top left`
        document.querySelector(".pdfDownload").style.transform = `scale(${scaleFactor})`
        doc.html(document.querySelector(".pdfDownload"), {
            callback: () => {
                doc.save('resume.pdf');
            document.querySelector(".pdfDownload").style.transform = `scale(1)`
            }
        });
    }
    /* Functions for handle pdf print and download */

    // Template for dynamic building, currenlty is not in use
    const template = template1
    // All form informations
    const [cvInfo, setCvInfo] = useState({
        avatar: "../empty.jpg",
        personalDetails: {
            name: 'Your Name',
            subtitle: 'Web Developer',
            email: 'abtahitajwar@gmail.com',
            phone: '+88 01796 391053',
            address: 'Jowar Sahara, Pragati Sharani',
            website: 'https://abtahi-tajwar.github.io/abtahitajwar',
            about: `I’m a master coach, best-selling author and a passionate speaker. I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. I've gone though hundreds of failures and complicated situations. You can use my previous experience in order not to fall into the same trap. `,

            linkedin: 'https://www.linkedin.com/in/abtahi-tajwar/',
            github: 'https://www.github.com/',
            facebook: '',
            instagram: '',
            twitter: '',
            pinterest: '',
            skype: ''
        },
        skills: [
            {
                skill: "Problem Solving",
                rating: 75
            },
            {
                skill: "Web Design",
                rating: 48
            },
            {
                skill: "Programming",
                rating: 94
            }
        ],
        language: [
            {
                language: "English",
                rating: 4
            },
            {
                language: "Bangla",
                rating: 1
            }
        ],
        employment: [
            {
                title: "Content Marketing Lead",
                subtitle: "Pipedrive, London",
                date: "11 JAN - Present",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            },
            {
                title: "Web Developer",
                subtitle: "Chittagong, Bangladesh",
                date: "14 MAR - 13 DEC",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            },
            {
                title: "Junior Web Developer",
                subtitle: "Pipedrive, London",
                date: "1 FEB - 22 MAR",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            }
        ],
        education: [
            {
                title: "American International University",
                subtitle: "B.Sc.",
                date: "20 Mar - Present",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            }
        ],
        projects: [
            {
                title: "Online CV MAker",
                subtitle: "https://github.com/abtahi-tajwar/ResumeBuilder",
                date: "20 MAR - 29 MAR",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            }
        ],
        certificates: [
            {
                title: "Expert Reactjs Developer Full Course",
                subtitle: "React js, Javascript",
                date: "20 Mar - Present",
                description: "Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach."
            }
        ],
        references: [
            {
                name: "Mr. Michel Robinson",
                subtitle: "Graphics Designer",
                phone: "+880 1796-391053",
                email: "michelrobinshon@gmail.com"
            },
            {
                name: "Begum Rokeya",
                subtitle: "Graphics Designer",
                phone: "+880 1796-391053",
                email: "begumrokeya@gmail.com"
            }
        ]
    })
    const handleAbout = () => {
        setCvInfo({
            ...cvInfo,
            personalDetails: {
                ...cvInfo.personalDetails,
                about: editorRef.current.getContent()
            }
        })
    }
    // Form Handling functions
    const handlePersonalDetails = (e) => {
        setCvInfo({
            ...cvInfo,
            personalDetails: {
                ...cvInfo.personalDetails,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSkill = (index, obj, action) => {
        if(action === 'add') {
            setCvInfo({
                ...cvInfo,
                skills: [
                    ...cvInfo.skills,
                    obj
                ]
            })
        } else if(action === 'delete') {
            setCvInfo({
                ...cvInfo,
                skills: cvInfo.skills.filter((item, i) => i !== index )
            })
        } else if(action === 'edit') {
            setCvInfo({
                ...cvInfo,
                skills: cvInfo.skills.map((item, i) => {
                    if(i !== index) {
                        return item
                    }
                    return obj
                })
            })
        }
    }
    const handleLanguage = (index, obj, action) => {
        if(action === 'add') {
            setCvInfo({
                ...cvInfo,
                language: [
                    ...cvInfo.language,
                    obj
                ]
            })
        } else if(action === 'delete') {
            setCvInfo({
                ...cvInfo,
                language: cvInfo.language.filter((item, i) => i !== index )
            })
        } else if(action === 'edit') {
            setCvInfo({
                ...cvInfo,
                language: cvInfo.language.map((item, i) => {
                    if(i !== index) {
                        return item
                    }
                    return obj
                })
            })
        }
    }
    const handleGroupIncreasingInput = (index, obj, action, name) => {        
        if(action === 'add') {
            setCvInfo({
                ...cvInfo,
                [name]: [
                    ...cvInfo[name],
                    obj
                ]
            })
        } else if(action === 'delete') {
            setCvInfo({
                ...cvInfo,
                [name]: cvInfo[name].filter((item, i) => i !== index )
            })
        } else if(action === 'edit') {
            console.log(index, obj, action)
            setCvInfo({
                ...cvInfo,
                [name]: cvInfo[name].map((item, i) => {
                    if(i !== index) {
                        return item
                    }
                    return obj
                })
            })
        }
    }
    const handleAvatarUpload = (src) => {
        setCvInfo({
            ...cvInfo,
            avatar: src
        })
    }
    return (
        <div className='flex'>
            <div className='container flex-1 scroll-window full-height'>
                <h2 className="light-text">Live CV Editor</h2>
                <button onClick={handlePrint} className="btn m-1">Print</button>
                <button onClick={pdfDownload} className="btn m-1">Download</button>
                <Divider />
                {/* Avatar Image Upload */}
                <div className="mt-2">
                    <h2>Upload Image</h2>
                    <ImageUpload
                        name="avatar"
                        handleAvatarUpload={handleAvatarUpload}
                        value={cvInfo.avatar}
                    />
                    <div className="mt-4"></div>
                </div>
                {/* Personal Information */}
                <Collapsible 
                    title="Personal Details"
                >
                    <Grid
                        cols="repeat(auto-fit, minmax(250px, 1fr))"
                        rows="auto"
                        gap="10px"
                    >                        
                        <TextInput
                            name="name"
                            key={1}
                            value={cvInfo.personalDetails.name}
                            handleInput={handlePersonalDetails}
                            label="Name"
                            placeholder="Your Full Name.."
                        />
                        <TextInput
                            name="email"
                            key={2}
                            value={cvInfo.personalDetails.email}
                            handleInput={handlePersonalDetails}
                            label="Email"
                            placeholder="Your Email.."
                        />
                    
                        <TextInput
                            name="phone"
                            key={3}
                            value={cvInfo.personalDetails.phone}
                            handleInput={handlePersonalDetails}
                            label="Phone"
                            placeholder="Your Personal Number.."
                        />
                    
                    
                        <TextInput
                            name="address"
                            key={4}
                            value={cvInfo.personalDetails.address}
                            handleInput={handlePersonalDetails}
                            label="Address"
                            placeholder="Enter Your Address In One line.."
                        />
                    
                    
                        <TextInput
                            name="website"
                            key={5}
                            value={cvInfo.personalDetails.website}
                            handleInput={handlePersonalDetails}
                            label="Website"
                            placeholder="Your Personal Website (If Any).."
                        />

                        
                        
                        
                    </Grid>
                    <div className="mt-2">
                        <p>About</p>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            value={cvInfo.personalDetails.about}
                            init={{
                                height: 200,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic backcolor | bullist numlist ',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={handleAbout}
                        />
                    </div>
                    <Grid
                        cols="repeat(auto-fit, minmax(250px, 1fr))"
                        rows="auto"
                        gap="10px"
                    >   
                        <TextInput
                            name="linkedin"
                            key={6}
                            value={cvInfo.personalDetails.linkedin}
                            handleInput={handlePersonalDetails}
                            label="LinkedIn"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="facebook"
                            key={6}
                            value={cvInfo.personalDetails.facebook}
                            handleInput={handlePersonalDetails}
                            label="Facebook"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="instagram"
                            key={6}
                            value={cvInfo.personalDetails.instagram}
                            handleInput={handlePersonalDetails}
                            label="Instagram"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="twitter"
                            key={6}
                            value={cvInfo.personalDetails.twitter}
                            handleInput={handlePersonalDetails}
                            label="Twitter"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="pinterest"
                            key={6}
                            value={cvInfo.personalDetails.pinterest}
                            handleInput={handlePersonalDetails}
                            label="Pinterest"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="skype"
                            key={6}
                            value={cvInfo.personalDetails.skype}
                            handleInput={handlePersonalDetails}
                            label="Skype"
                            placeholder="Your Linkedin Information.."
                        />
                    </Grid>
                </Collapsible>
                {/* Skills Section */}
                <Collapsible
                    title="Skills & Language"
                >
                    <MultipleIncreasingInput 
                        name="Skills"
                        values={cvInfo.skills}
                        handleInput={handleSkill}
                        keys={["skill", "rating"]}
                    />
                    <MultipleIncreasingInput 
                        name="Languages"
                        values={cvInfo.language}
                        handleInput={handleLanguage}
                        keys={["language", "rating"]}
                    />
                </Collapsible>
                {/* Employment */}
                <Collapsible
                    title="Employment"
                >
                    <IncreasingGroupInput
                        name="employment"
                        items={cvInfo.employment}
                        handleItems={handleGroupIncreasingInput}
                    />
                </Collapsible>
   
                {/* Education */}
                <Collapsible
                    title="Education"
                >
                    <IncreasingGroupInput
                        name="education"
                        items={cvInfo.education}
                        handleItems={handleGroupIncreasingInput}
                    />
                </Collapsible>

                {/* Projects */}
                <Collapsible
                    title="Projects"
                >
                    <IncreasingGroupInput
                        name="projects"
                        items={cvInfo.projects}
                        handleItems={handleGroupIncreasingInput}
                    />
                </Collapsible>

                {/* Certificates */}
                <Collapsible
                    title="Certificates"
                >
                    <IncreasingGroupInput
                        name="certificates"
                        items={cvInfo.certificates}
                        handleItems={handleGroupIncreasingInput}
                    />
                </Collapsible>
                <Collapsible
                    title="References"
                >
                    <ReferencesgroupInput 
                        name="references"
                        items={cvInfo.references}
                        handleItems={handleGroupIncreasingInput}
                    />
                </Collapsible>
            </div>
            <div className="scroll-window full-height">
                <div className="pdfDownload">
                    <CVPage 
                        ref={componentRef}
                        page="letter"
                        contents={template}   
                        cvInfo={cvInfo}     
                        theme={theme}                    
                    />
                </div>
            </div>
        </div>
    );
}

export default Editor2;