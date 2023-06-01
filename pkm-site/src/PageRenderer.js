import React from 'react';
import { useParams } from 'react-router-dom';

const PageRenderer = () => {
  const { pageName } = useParams();

  // Map the page name to the corresponding HTML file
  const getPagePath = (pageName) => {
    return `/pages/${pageName}.html`;
  };

  return (
    <div>
      <iframe 
        src={getPagePath(pageName)} 
        title={pageName} 
        style={{
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
        }}
      />
    </div>
  );
};

export default PageRenderer;