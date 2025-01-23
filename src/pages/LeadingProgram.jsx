import React, {lazy, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/fonts.css';
import Navbar from '../Components/Navbar/Navbar';
import HeroFacts from '../Components/HeroFacts/HeroFacts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCarousel from '../Components/LogoCarousel/LogoCarousel';
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection"
import AdvantageSection from '../Components/AdvantageSection/AdvantageSection';
const CalendlySection = lazy(() => import('../Components/CalendlySection/CalendlySection'));
import ExpertsSection from '../Components/ExpertsSection/ExpertsSection';
import TechHero from '../Components/TechHero/TechHero';
import TechHeroLogo from '../Components/TechHeroLogo/TechHeroLogo';

export const LeadingProgram = () => {
  const [isCalendlyVisible, setCalendlyVisible] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const isMobile = window.innerWidth <= 768; // Mobile breakpoint
        if (isMobile) {
          setCalendlyVisible(window.scrollY > 1500); // Visible after scrolling 1000px
        } else {
          setCalendlyVisible(true); // Always visible on desktop/tablet
        }
      };
  
      // Run on initial render to set visibility based on screen size
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div>
      <Helmet>
          <title>Computer Science and Tech Programs College Counseling</title>
          <meta
            name="description"
            content="College Admissions counseling for top computer science and tech programs. Boost your chances of admission with personalized strategies and expert guidance."
          />
          <meta
            name="keywords"
            content="College Admissions Counseling, Computer Science Programs, Top Tech Programs, college counseling, computer science programs, tech programs, admission strategies, personalized college guidance, expert counseling, tech admissions"
          />
        </Helmet>
      <Navbar />
      <TechHero />
      <TechHeroLogo />
      <LogoCarousel />
      <TestimonialSection />
      <ExpertsSection />
      <AdvantageSection />
      {isCalendlyVisible && (
        <div>
          <CalendlySection />
        </div>
      )}

      <div id="calendly"></div>
    </div>
  )
}


export default LeadingProgram;