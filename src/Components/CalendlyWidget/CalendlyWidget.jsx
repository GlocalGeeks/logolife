import React, { useState, useEffect, useRef } from 'react';
import './CalendlyWidget.css';

const CalendlyWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef(null);

  const handleVisibility = () => {
    const rect = widgetRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Set up an IntersectionObserver to detect when the widget comes into view
    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.1, // Trigger when 10% of the widget is visible
    });
    if (widgetRef.current) observer.observe(widgetRef.current);

    return () => {
      if (widgetRef.current) observer.unobserve(widgetRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Dynamically load the Calendly widget script when it's in view
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.defer = true;
      document.body.appendChild(script);

      // Cleanup script when the component is unmounted or the widget is no longer visible
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isVisible]);

  return (
    <div
      className="calendly-inline-widget"
      ref={widgetRef}
      data-url="https://calendly.com/d/cmb7-jkb-kdx/logolife-acceptedx-college-counseling-consultation?hide_gdpr_banner=1"
      style={{ minWidth: '300px', height: '970px' }}
    />
  );
};

export default CalendlyWidget;
