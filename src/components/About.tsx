import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo.png"
import './About.css';
import { useNavigate } from "react-router-dom";

interface Stat {
  number: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [statsVisible, setStatsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats: Stat[] = [
    { number: '3150+', label: 'Projects Delivered' },
    { number: '3200+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '5+', label: 'Award Winner' }
  ];

  const features: Feature[] = [
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom IT infrastructure and cybersecurity solutions designed specifically for your business needs.'
    },
    {
      icon: '⚡',
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest technologies to deliver innovative software and app development services.'
    },
    {
      icon: '🔒',
      title: 'Robust Security',
      description: 'Advanced cybersecurity measures to protect your digital assets and ensure business continuity.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Empowering businesses with social media apps and digital solutions for modern challenges.'
    }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <h3 className="about-section-label text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Top Software Company in Dubai</h3>

        <p className="about-description">
          When seeking the best software company in Dubai, the United Arab Emirates, the majority
          of us Google "software development company Dubai." Just Google Dott Ciblez Technologies
          the next time. One of the best mobile app developers in Dubai, United Arab Emirates,
          specializing in software, online, and mobile app development, is Dott Ciblez Technologies.
          We work hard to provide best-in-class service to businesses of all sizes.
        </p>

        <div className={`about-main-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="about-years-badge">
            <div className="years-number">5</div>
            <div className="years-circle">
              <img
                src={logo}
                alt="Dott Ciblez Logo"
                className="badge-logo"
                style={{ height: '50px', width: 'auto' }}
              />
              <div className="circle-text">YEARS OF EXCELLENCE</div>
            </div>
            <div className="decorative-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="about-text-content">
            <h2 className="about-main-heading">
              5 Years in Delivering Excellence
            </h2>

            <p className="about-description">
              We provide software solutions that are user-friendly. The greatest outcomes for your
              organization are produced by our software tools. Being the best software company in Dubai,
              United Arab Emirates, we combine our knowledge and experience to produce the best apps
              and software solutions for your organization. Our talented and passionate software and
              creative team create top-notch front-end and back-end systems for a variety of uses in
              order to deliver excellent solutions.
            </p>

            <a className="read-more-btn" onClick={() => navigate('/about-us')}>Read More</a>
          </div>
        </div>

        {/* <div className={`stats-section ${statsVisible ? 'stats-visible' : ''}`} ref={statsRef}>
          <div className="stats-grid">
            {stats.map((stat: Stat, index: number) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-line"></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`about-cta ${isVisible ? 'fade-in-up' : ''}`}>
          <h3 className="cta-heading">Ready to Transform Your Business?</h3>
          <p className="cta-text">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-btn primary">Get Started</a>
            <a href="#services" className="cta-btn secondary">Our Services</a>
          </div>
        </div> */}
      </div>

      <div className="about-bg-shape shape-1"></div>
      <div className="about-bg-shape shape-2"></div>
    </section>
  );
};

export default About;