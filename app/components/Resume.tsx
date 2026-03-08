"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Experience</h2>
        <div className="underline"></div>

        <div className="resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">

            <h2 className="resume-subtitle">Summary</h2>

            <div className="resume-item">
              <h3>Joana Kelly</h3>

              <p style={{ marginTop: "7px" }}>
                Backend-focused full-stack engineer with 5+ years of experience
                building and scaling production SaaS applications. Experienced
                in designing reliable REST APIs, optimizing SQL performance,
                and maintaining systems used by 1,000+ active users.
              </p>

              <ul>
                <li>Open to Remote Opportunities</li>

                <li>
                  <a href="mailto:joana0713kelly@outlook.com">
                    joana0713kelly@outlook.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/joana0713"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/joana0713
                  </a>
                </li>
              </ul>
            </div>


            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3>BSc Computer Science</h3>
              <span className="resume-date">
                North Carolina State University
              </span>
              <p>
                Focused on software engineering fundamentals including system
                design, algorithms, database systems, and scalable web
                architecture.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h2 className="resume-subtitle">Professional Experience</h2>

            <div className="resume-item">
              <h3>Full-Stack Engineer (Backend Focus)</h3>
              <span className="resume-date">
                Nordic Digital Systems · Remote · 2024 – Present
              </span>

              <ul>
                <li>
                  Designed and maintained scalable REST APIs using Node.js
                  supporting 1,000+ active SaaS users
                </li>
                <li>
                  Improved API performance through SQL query optimization and
                  indexing strategies
                </li>
                <li>
                  Implemented secure authentication using JWT and RBAC
                </li>
                <li>
                  Containerized backend services with Docker for consistent
                  development and deployment
                </li>
                <li>
                  Integrated payment and analytics APIs supporting core product
                  operations
                </li>
              </ul>
            </div>


            <div className="resume-item">
              <h3>Full-Stack Engineer</h3>
              <span className="resume-date">
                TechNova Solutions · 2021 – 2023
              </span>

              <ul>
                <li>
                  Built and maintained multiple production web applications
                  using Node.js, Laravel, and React
                </li>
                <li>
                  Reduced API latency from ~600ms to ~320ms through SQL
                  optimization
                </li>
                <li>
                  Designed REST APIs with authentication, validation, and
                  structured error handling
                </li>
                <li>
                  Refactored backend modules to improve scalability and
                  maintainability
                </li>
                <li>
                  Dockerized services to standardize staging and development
                  environments
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}