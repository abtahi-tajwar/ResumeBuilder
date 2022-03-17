import React, { useEffect, useState, useRef } from 'react';
import { Section, GridGallery, Thumbnail } from './PageStyle.style';
import { Link } from 'react-router-dom';
import { TestProjectData, GetAllProjects } from '../../firebase/Projects';
import { useSelector } from 'react-redux';
import CVPage from '../Templates/CVPage';
import styled from 'styled-components';
import useWindowSize, { WINDOW_SIZE_M } from '../../hooks/useWindowSize';
import { GetAllTemplates } from '../../firebase/Templates';

function SelectResume() {
    const userState = useSelector(state => state.userState)
    const windowSize = useWindowSize()
    const user = userState.user
    const loginStatus = userState.loginStatus
    const [projects, setProjects] = useState()
    const [templates, setTemplates] = useState([])
    useEffect(() => {
        GetAllTemplates(templates => {
            setTemplates(templates)
        })
    }, [])
    useEffect(() => {
        if(loginStatus === 1) {
            GetAllProjects(user, projects => {
                setProjects(projects)
            })
        } 
    }, [user])
  return <div>
      {projects && <Section style={{ marginBottom: '50px'}}>
          <h1 style={{marginBottom: '20px'}}>Saved CV Projects</h1>
        <GridGallery autoFit width={windowSize.width <= 655 ? '150px' : '300px'}>
            {projects.map((item, index) => (
                <Link key={index} to={`/editor/compact/${item.id}`} style={{ textDecoration: 'none'}}>
                    <SavedProjectWrapper>                        
                        <CVPage 
                            page="letter"
                            cvInfo={JSON.parse(item.cvInfo)}
                            theme={item.theme}
                            thumbnail={true}
                        />                        
                        <div className="info">
                            <p>{JSON.parse(item.cvInfo).personalDetails.name}</p>
                            <p className='subtitle'>{JSON.parse(item.cvInfo).personalDetails.subtitle}</p>
                        </div>
                    </SavedProjectWrapper>
                </Link>
            ))}                
        </GridGallery>
      </Section>}
    <h1>Select A Resume template to start</h1>
    <Section>        
        <GridGallery width={windowSize.width <= 450 ? '150px' : '300px'}>
            <Link to="/editor/compact">
                <Thumbnail name="Compact">
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
            <Link to="/editor/dazzle">
                <Thumbnail name="Dazzle" >
                    <img src="img/Dazzle.png" />
                </Thumbnail> 
            </Link>
            {/* {templates.map(item => <Link to={`/editor/${item.name}`}>
                <Thumbnail name={item.name} >
                    <img src="img/no-image.jpg" />
                </Thumbnail> 
            </Link>)} */}
        </GridGallery>
    </Section>
  </div>;
}

const SavedProjectWrapper = styled.div`
    width: 100%;
    box-shadow: 7px 2px 11px 0px rgba(0,0,0,0.13);
    box-sizing: border-box;
    transition: box-shadow .3s ease-out;
    color: black;
    &:hover {
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.13);
    }
    & > .info {
        font-size: 1.3rem;
        font-weight: 300;
        background-color: #f2f2f2;
        padding: 15px;
        .subtitle {
            font-size: 0.9rem;
            font-weight: bold;
            
        }
    }
`

export default SelectResume;
