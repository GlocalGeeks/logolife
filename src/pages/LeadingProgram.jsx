import React from 'react'
import { Helmet } from 'react-helmet-async';
import '../styles/fonts.css';
import Navbar from '../Components/Navbar/Navbar';
import HeroFacts from '../Components/HeroFacts/HeroFacts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCarousel from '../Components/LogoCarousel/LogoCarousel';
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection"
import AdvantageSection from '../Components/AdvantageSection/AdvantageSection';
import CalendlySection from "../Components/CalendlySection/CalendlySection"
import ExpertsSection from '../Components/ExpertsSection/ExpertsSection';
import TechHero from '../Components/TechHero/TechHero';
import TechHeroLogo from '../Components/TechHeroLogo/TechHeroLogo';

export const LeadingProgram = () => {
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
      <CalendlySection />
    </div>
  )
}


export default LeadingProgram;