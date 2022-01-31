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
import { useDispatch, useSelector } from 'react-redux';
import { setSingleInfo, setGroupInfo, setAvatar } from '../redux/cvInfo.js/slice';


function Editor2() {

    /* Functions for handle pdf print and download */
    const componentRef  = useRef()
    const editorRef = useRef(null);
    const { theme } = useParams()
    const dispatch = useDispatch()

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
        const pdfDom = document.querySelector(".pdfDownload")
        pdfDom.style.transformOrigin = `top left`
        pdfDom.style.transform = `scale(${scaleFactor})`
        document.querySelectorAll("i").forEach(item => {
            item.style.display = 'none'
            item.insertAdjacentHTML('afterend', '<span className="temporaryAdjacentHtmlForPdfDownload">- &nbsp</span>');
        })
        doc.html(pdfDom, {
            callback: () => {
                doc.save('resume.pdf');
                pdfDom.style.transform = `scale(1)`
                document.querySelectorAll("i").forEach(item => {
                    item.style.display = 'inline-block'
                })
                document.querySelectorAll(".temporaryAdjacentHtmlForPdfDownload").forEach(item => {
                    item.style.display = 'none'
                })

            }
        });
    }
    /* Functions for handle pdf print and download */

    // Template for dynamic building, currenlty is not in use
    const template = template1
    const cvInfo = useSelector(state => state.cvInfo)
    const handleAbout = () => {
        dispatch(setSingleInfo({
            groupName: 'personalDetails',
            name: 'about',
            value: editorRef.current.getContent()
        }))
    }
    // Form Handling functions
    const handlePersonalDetails = (e) => {
        dispatch(setSingleInfo({
            groupName: 'personalDetails',
            name: e.target.name,
            value: e.target.value
        }))
    }
    const handleGroupIncreasingInput = (index, obj, type, name) => {        
        dispatch(setGroupInfo({
            groupName: name,
            index, obj, type
        }))
    }
    const handleAvatarUpload = (src) => {
        dispatch(setAvatar({
            value: src
        }))
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
                        name="skills"
                        values={cvInfo.skills}
                        handleInput={handleGroupIncreasingInput}
                        keys={["skill", "rating"]}
                    />
                    <MultipleIncreasingInput 
                        name="language"
                        values={cvInfo.language}
                        handleInput={handleGroupIncreasingInput}
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
                        id={'template'}                  
                    />
                                      
                </div>
            </div>
        </div>
    );
}

export default Editor2;