import { useEffect, useRef } from 'react';

const AdBanner2 = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Create the atOptions object
    window.atOptions = {
      key: 'e1960c9764988d64b3aaa7741031640e',
      format: 'iframe',
      height: 60,
      width: 468,
      params: {},
    };

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/e1960c9764988d64b3aaa7741031640e/invoke.js';
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

export default AdBanner2;
