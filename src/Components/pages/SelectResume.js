import React, { useEffect, useState, useRef } from 'react';
import { Section, GridGallery, Thumbnail } from './PageStyle.style';
import { Link } from 'react-router-dom';
import { GetProjectData } from '../../firebase/Projects';

function SelectResume() {
    
    const [projectData, setProjectData] = useState()
    GetProjectData(setProjectData)
    useEffect(() => {
        console.log(projectData)
    },[projectData])
  return <div>
    <h1>Select A Resume template to start</h1>
    <Section>
        <GridGallery width="300px">
            <Link to="/editor/compact">
                <Thumbnail name="Compact" >
                    <img src="img/Compact.png" />
                </Thumbnail> 
            </Link>
            <Link to="/editor/elfin">
                <Thumbnail name="Elfin" >
                    <img src="img/Elfin.png" />
                </Thumbnail> 
            </Link>
            <Link to="/editor/serif">
                <Thumbnail name="Serif" >
                    <img src="img/Serif.png" />
                </Thumbnail> 
            </Link>
        </GridGallery>
    </Section>
  </div>;
}

export default SelectResume;
