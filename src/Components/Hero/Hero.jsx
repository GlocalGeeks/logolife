import React, { useState, useEffect } from "react";
import "./Hero.css";
import play_icon from "../../assets/Play-Button.webp";
import review_logo from "../../assets/review-logo.webp";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import hero_section_video from "../../assets/hero-section-video.mp4";
import hero_section_short_video from "../../assets/hero_section_short.mp4";
import video_overlay from "../../assets/heroVideo-overlay.webp";

export const Hero = () => {
  const [videoClass, setVideoClass] = useState("hide");
  const [isPlaying, setIsPlaying] = useState(false);

  const showVideo = () => {
    setVideoClass((prevClass) => (prevClass === "hide" ? "" : "hide"));
    setIsPlaying(true);
  };

  const handleVideoEnd = (e) => {
    e.target.currentTime = 0; // Restart the video
    e.target.play(); // Play the video again
  };

  
  return (
    <div className="main-container dark-color">
      <section className="hero-section">
        <div className="left-container">
          <button className="parent-btn">Parents</button>
          <h1 className="hero-heading">
            98% Acceptance to Top<br />
            <span className="hero-gradient-h1"> Computer Science</span> and<br />
            <span className="hero-gradient-h1">Tech Programs</span>
          </h1>
          <img
            className="review-logo"
            src={review_logo}
            loading="lazy"
            alt="Review Logo"
          />
          <a href="#calendly">
            <button type="button" className="consultation-btn">
              Book Consultation
            </button>
          </a>
        </div>
        <div className="right-container">
          <video
            className="tech-hero-video"
            src={hero_section_short_video}
            poster={video_overlay}
            autoFocus
            autoPlay
            muted
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)
            }
            onEnded={handleVideoEnd}
            
          />
            <img
              src={play_icon}
              className="play-icon"
              onClick={showVideo}
              loading="lazy"
              alt="Play Icon"
            />
          <VideoPlayer src={hero_section_video} className={videoClass} />
          <a href="#calendly">
            <button type="button" className="consultation-btn">
              Book Consultation
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
