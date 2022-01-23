import React from 'react';
import { Section, GridGallery, Thumbnail } from './PageStyle.style';
import { Link } from 'react-router-dom';

function SelectResume() {
  return <div>
    <h1>Select A Resume template to start</h1>
    <Section>
        <GridGallery width="300px">
            <Link to="/editor/compact">
                <Thumbnail src="img/Compact.png" />
            </Link>
            <Link to="/editor/elfin">
                <Thumbnail src="img/Elfin.png" />
            </Link>
            <Link to="/editor/serif">
                <Thumbnail src="img/Serif.png" />
            </Link>
        </GridGallery>
    </Section>
  </div>;
}

export default SelectResume;
