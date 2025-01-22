import React from 'react';
import './LogoCarousel.css'; 
import harvard from "../../assets/harvard.webp";
import dartmouth from "../../assets/dartmouth.webp";
import berkeley from "../../assets/berkeley.webp";
import georgiatech from "../../assets/georgiatech.webp";
import nyu from "../../assets/nyu.webp";
import virginiatech from "../../assets/virginiatech.webp";
import ucla from "../../assets/ucla.webp";
import brown from "../../assets/brown.webp";

export const LogoCarousel = () => {
  const images = [
    { src: harvard, alt: "University 1" },
    { src: dartmouth, alt: "University 2" },
    { src: berkeley, alt: "University 3" },
    { src: georgiatech, alt: "University 4" },
    { src: nyu, alt: "University 5" },
    { src: virginiatech, alt: "University 6" },
    { src: ucla, alt: "University 7" },
    { src: brown, alt: "University 8" }
  ];

  return (
    <div className='wrapper'>
      {images.map((image, index) => (
        <div key={index} className={`item item${index + 1}`}>
          <img 
            src={image.src} 
            alt={image.alt} 
            loading="lazy" // Enable lazy loading
            srcSet={`${image.src}?w=200 200w, ${image.src}?w=400 400w, ${image.src}?w=800 800w`} // Provide responsive sizes
            sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px" // Ensure proper sizing based on screen width
          />
        </div>
      ))}
    </div>
  );
}

export default LogoCarousel;
