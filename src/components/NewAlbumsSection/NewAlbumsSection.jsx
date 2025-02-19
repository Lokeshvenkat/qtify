import React, { useState } from 'react';
import Section from '../Section/Section';

function NewAlbumsSection() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleView = () => {
    setIsCollapsed(!isCollapsed);
  };

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
