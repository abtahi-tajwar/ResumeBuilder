import React, { useEffect, useRef, useState } from 'react';
import CVPage from './Templates/CVPage';
import { useReactToPrint } from 'react-to-print';
import { template1 } from './Templates';
import jsPDF from 'jspdf';
import { Divider } from './CVComponents/Style.style';
import Collapsible from './FormComponents/Collapsible';
import { Button, Flex, Grid } from './MainStyle.style';
import TextInput from './FormComponents/TextInput';
import MultipleIncreasingInput from './FormComponents/v2/MultipleIncreasingInput';
import IncreasingGroupInput from './FormComponents/v2/IncreasingGroupInput';
import ImageUpload from './FormComponents/ImageUpload';
import { Editor } from '@tinymce/tinymce-react';
import ReferencesgroupInput from './FormComponents/v2/ReferencesgroupInput';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import { setSingleInfo, setGroupInfo, setAvatar, setCVInfo } from '../redux/cvInfo.js/slice';
import { SetProjectData, GetProjectData } from '../firebase/Projects';
import useWindowSize, { WINDOW_SIZE_M } from '../hooks/useWindowSize';
import NavigationTray from './Home/NavigationTray';
import styled from 'styled-components';
import { Preview } from 'react-html2pdf';
import { Link } from 'react-router-dom';


function Editor2() {

    /* Functions for handle pdf print and download */
    const componentRef  = useRef()
    const editorRef = useRef(null);
    const windowSize = useWindowSize()
    const { theme, id } = useParams()
    const [saveMsg, setSaveMsg] = useState()
    const [saveLoading, setSaveLoading] = useState(false)
    const [isTrayOpen, setIsTrayOpen]= useState(false)
    const [isStaticTheme, setIsStaticTheme] = useState(true)
    const dispatch = useDispatch()
    const staticThemes = ["compact", "elfin", "serif"]
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

        doc.html(pdfDom, {
            callback: () => {
                doc.save('resume.pdf');
                pdfDom.style.transform = `scale(1)`
                // const docOutput = doc.output("blob");
                // var csvURL = window.URL.createObjectURL(docOutput);
                // var tempLink = document.createElement('a');
                // tempLink.href = csvURL;
                // tempLink.setAttribute('download', 'resume.pdf');
                // tempLink.click();
                
            }
        });
    }
    /* Functions for handle pdf print and download */

    // Template for dynamic building, currenlty is not in use
    const template = template1
    const states = useSelector(state => state)
    let cvInfo = states.cvInfo
    const userInfo = states.userState.user
    const handleAbout = () => {
        dispatch(setSingleInfo({
            groupName: 'personalDetails',
            name: 'about',
            value: editorRef.current.getContent()
        }))
    }
    useEffect(() => {
        if(id) {
            GetProjectData(userInfo, id, data => {
                const obj = JSON.parse(data.cvInfo)
                dispatch(setCVInfo(obj))
            })
        }
        if(staticThemes.includes(theme)) {
            setIsStaticTheme(false)
        }
    }, [])
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
    const saveCurrentData = () => {
        setSaveLoading(true)
        setSaveMsg(<div><ClipLoader color="gray" loading={true} size={10} /> Saving </div>)
        SetProjectData(userInfo, theme, cvInfo, id, (docRef) => {
            setSaveLoading(false)
            setSaveMsg(<div><p style={{color: 'green'}}><i className="fas fa-check"> Saved</i></p></div>)
            setTimeout(() => {
                setSaveMsg("")
            }, 5000)
        })
    }
    return (
        <div className='flex'>
            <div className='container flex-1 scroll-window full-height'>
            <div style={{ marginBottom: '30px'}}>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'black',
                    padding: '10px',
                    backgroundColor: '#fafafa',
                }}><i className="fas fa-chevron-circle-left"></i> Go Back to home <i className="fas fa-home"></i></Link>
            </div>
            <h2 className="light-text">Live CV Editor</h2>
                <Flex justify="space-between" direction={windowSize.width < 440 ? 'column' : 'row' }>                   
                    <div>                        
                        <button onClick={handlePrint} className="btn m-1"><i className="fas fa-print"></i> Print</button>
                        <button onClick={pdfDownload} className="btn m-1"><i className="fas fa-download"></i> Download</button>
                    </div>
                    <Flex gap="10px">
                        {saveMsg}
                        <Button onClick={saveCurrentData} disabled={saveLoading}><i className="fas fa-save"></i>&nbsp;&nbsp; Save Your Progress</Button>
                        {/* <button onClick={saveCurrentData} className="btn btn-accent mt-1"><i className="fas fa-save"></i> Save Your Progress </button> */}
                    </Flex>
                </Flex>
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
                    selected
                >
                    <Grid
                        cols="repeat(auto-fit, minmax(250px, 1fr))"
                        rows="auto"
                        gap="10px"
                    >                        
                        <TextInput
                            name="name"
                            key="name"
                            value={cvInfo.personalDetails.name}
                            handleInput={handlePersonalDetails}
                            label="Name"
                            placeholder="Your Full Name.."
                        />
                        <TextInput
                            name="subtitle"
                            key="subtitle"
                            value={cvInfo.personalDetails.subtitle}
                            handleInput={handlePersonalDetails}
                            label="Subtitle"
                            placeholder="Subtitle, example: your designation.."
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
                            key="facebook"
                            value={cvInfo.personalDetails.facebook}
                            handleInput={handlePersonalDetails}
                            label="Facebook"
                            placeholder="Your Linkedin Information.."
                        />
                        <TextInput
                            name="github"
                            key="github"
                            value={cvInfo.personalDetails.github}
                            handleInput={handlePersonalDetails}
                            label="Github"
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
            { windowSize.device_size <= WINDOW_SIZE_M ?
                <NavigationTray
                    opened={isTrayOpen} 
                    closeIconColor="red"
                    handleNavOpen={setIsTrayOpen}  
                    left={false} 
                >
                    <div className="scroll-window full-height" style={{ backgroundColor: 'white', position: 'relative' }}>
                        <div className="">
                            <CVPage 
                                ref={componentRef}
                                page="letter"
                                contents={template}   
                                cvInfo={cvInfo}     
                                theme={theme}  
                                id={'template'}                  
                            />
                                            
                        </div>
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
                </NavigationTray> :
                <div className="scroll-window full-height" style={{backgroundColor: 'white', position: "relative"}}>
                    <div className="">
                        <CVPage 
                            ref={componentRef}
                            page="letter"
                            contents={template}   
                            cvInfo={cvInfo}     
                            theme={theme}  
                            id={'template'}                  
                        />                                        
                    </div>
                    <div className="pdfDownload">
                        <CVPage 
                            ref={componentRef}
                            page="letter"
                            contents={template}   
                            cvInfo={cvInfo}     
                            theme={theme}  
                            isStatic={isStaticTheme}
                            id={'template'}                  
                        />
                                        
                    </div>
                </div>
            }
            { windowSize.device_size <= WINDOW_SIZE_M && 
            <PreviewButton onClick={() => setIsTrayOpen(true)}>
                <i class="far fa-eye"></i>
                <p>Preview</p>
            </PreviewButton> }
            {isTrayOpen && <ScreenOverlay />}
        </div>
    );
}

const PreviewButton = styled.div`
    position: fixed;
    right: 10px;
    top: 50px;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    background-color: #fb8500;
    font-size: 0.7rem;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`
const ScreenOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.6);
`
export default Editor2;