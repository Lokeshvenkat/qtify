import React, { useState } from 'react';
import Section from '../Section/Section';

function NewAlbumsSection() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleView = () => {
    //console.log('Toggling view:', !isCollapsed);
    setIsCollapsed(!isCollapsed);
  };

  //console.log('NewAlbumsSection rendered with isCollapsed:', isCollapsed);

  return (
    <Section
      title="New Albums"
      apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
      isCollapsed={isCollapsed}
      toggleView={toggleView}
    />
  );
}

export default NewAlbumsSection;
