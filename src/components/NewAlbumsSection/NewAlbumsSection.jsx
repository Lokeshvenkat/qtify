import React, { useState } from 'react';
import Section from '../Section/Section';

const NewAlbumsSection = () => {
  const [isTopAlbumsCollapsed, setIsTopAlbumsCollapsed] = useState(true);
  const [isNewAlbumsCollapsed, setIsNewAlbumsCollapsed] = useState(true);

  const toggleTopAlbumsView = () => {
    setIsTopAlbumsCollapsed(!isTopAlbumsCollapsed);
  };

  const toggleNewAlbumsView = () => {
    setIsNewAlbumsCollapsed(!isNewAlbumsCollapsed);
  };

  return (
    <div>
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
        isCollapsed={isTopAlbumsCollapsed}
        toggleView={toggleTopAlbumsView}
      />
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
        isCollapsed={isNewAlbumsCollapsed}
        toggleView={toggleNewAlbumsView}
      />
    </div>
  );
};

export default NewAlbumsSection;
