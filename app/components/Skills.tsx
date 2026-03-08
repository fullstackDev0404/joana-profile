"use client";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="underline"></div>

        <p className="skills-desc">
          Backend-focused full-stack engineer building scalable SaaS
          applications and APIs using modern web technologies.
        </p>

        <div className="skills-grid">
          
          <div className="skill-category">
            <h3>Frontend</h3>
            <p>React • Next.js • TypeScript • Tailwind CSS</p>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <p>Node.js • Express • Spring Boot • REST APIs • Authentication (JWT)</p>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <p>MySQL • PostgreSQL • MongoDB • SQL Optimization</p>
          </div>

          <div className="skill-category">
            <h3>Dev & Infrastructure</h3>
            <p>Docker • Git • AWS (EC2, S3) • System Design</p>
          </div>

        </div>
      </div>
    </section>
  );
}