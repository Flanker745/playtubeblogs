import { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Create the atOptions object
    window.atOptions = {
      key: '4a4b032955aa500c298209c2be1cd4be',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    };

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/4a4b032955aa500c298209c2be1cd4be/invoke.js';
    script.async = true;

    if (adRef.current) {
      adRef.current.innerHTML = ''; // Clear if re-rendered
      adRef.current.appendChild(script);
    }

    return () => {
      // Cleanup if component unmounts
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={adRef} />;
};

export default AdBanner;



