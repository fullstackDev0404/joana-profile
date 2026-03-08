"use client";

import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const roles = [
  "Backend-Focused Full-Stack Engineer",
  "Backend Engineer for Scalable SaaS Systems",
  "Full-Stack Engineer Specializing in Backend Systems"
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <section id="home" className="hero">
        <div className="top-bar">
          <a href="/resume.pdf" download className="resume-btn">
            Download CV
          </a>
        </div>
        
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-name">Joana Kelly</h1>

            <h2 className="hero-role">
              I'm <span className="typing">{text}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <div className="about-container">
            <h2 className="section-title">About</h2>
            <div className="underline"></div>

            <div className="about-content">
              <div className="about-image">
                <img src="/profile.png" alt="about" />
              </div>

              <div className="about-info">
                <h3 style = {{marginBottom: '45px'}}>Full-Stack Engineer | Strong Backend Focus</h3>

                <div className="info-grid">
                  <p><strong>Location:</strong> Turku, Finland</p>
                  {/* <p><strong>Website:</strong> joanakelly.dev</p> */}
                  <p><strong>Work:</strong> Remote / Freelance Available</p>
                  <p><strong>Email:</strong> joana0713kelly@outlook.com</p>
                  <p><strong>GitHub:</strong> <a href = 'https://github.com/fullstackDev0404' target="_blank">github.com/fullstackDev0404</a></p>
                  {/* <p><strong>Phone:</strong> +381 621 45 1077</p> */}
                  <p><strong>Degree:</strong> BSc Computer Science</p>
                  <p><strong>Focus:</strong> Backend Systems & Scalable SaaS</p>
                </div>

                <p className="about-text">
                  Backend-focused full-stack engineer building scalable web applications and APIs. Experienced with Node.js, React, and database-driven systems, with a focus on clean architecture, performance, and real-world product reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
    </>
  );
}