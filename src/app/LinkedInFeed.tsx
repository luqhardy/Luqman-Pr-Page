"use client";

import React, { useEffect } from 'react';

const LinkedInFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Find and remove the script when the component unmounts
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // SociableKIT might leave other elements behind, this is a simple cleanup
      const widgetElement = document.querySelector('.sk-ww-linkedin-profile-post');
      if (widgetElement) {
        // You might need more specific cleanup depending on how the widget works
      }
    };
  }, []);

  return (
    <div className='sk-ww-linkedin-profile-post' data-embed-id='25596098'></div>
  );
};

export default LinkedInFeed;
