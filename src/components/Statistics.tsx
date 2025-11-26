import { useState, useEffect, useRef } from 'react';
import './Statistics.css';
import project from '../assets/project.png';
import experience from '../assets/experience.png';
import client from '../assets/client.png';
import award from '../assets/award.png';

const stats = [
  {
    icon: project,
    value: 500,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    icon: client,
    value: 250,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    icon: award,
    value: 50,
    label: "Awards Won",
    suffix: "+"
  },
  {
    icon: experience,
    value: 10,
    label: "Years Experience",
    suffix: "+"
  }
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-header">
          <h2 className="statistics-title">
            Our Achievements
          </h2>
          <p className="statistics-subtitle">
            Numbers that speak for our excellence and commitment
          </p>
        </div>

        <div className="statistics-grid">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon-container">
                    <img 
                      src={stat.icon} 
                      alt={stat.label} 
                      className="stat-icon-image"
                    />
                  </div>
                </div>
                <div className="stat-value">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;