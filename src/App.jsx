import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            HA<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero">
          <div className="hero-container">

            <div className="hero-content">

              <div className="availability">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <p className="hero-small">HELLO, I'M</p>

              <h1>
                Hussain <span>Adil</span>
              </h1>

              <h2>
                Computer Science Student &amp; Aspiring Software Developer
              </h2>

              <p className="hero-description">
                I'm a BSCS student passionate about building modern web
                applications, learning new technologies, and solving real-world
                problems through software.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary-btn">
                  View My Work →
                </a>

                <a href="#contact" className="btn secondary-btn">
                  Let's Connect
                </a>
              </div>

              <div className="social-links">
                <a href="#" aria-label="GitHub">GitHub ↗</a>
                <a href="#" aria-label="LinkedIn">LinkedIn ↗</a>
              </div>

            </div>

            {/* Profile Card */}
            <div className="hero-visual">

              <div className="profile-card">

                <div className="profile-image">
                  <div className="profile-placeholder">
                    <span>HA</span>
                  </div>
                </div>

                <div className="profile-info">
                  <h3>Hussain Adil</h3>
                  <p>BSCS Student</p>
                </div>

                <div className="profile-line"></div>

                <div className="stats">

                  <div className="stat">
                    <strong>04+</strong>
                    <span>Semesters</span>
                  </div>

                  <div className="stat">
                    <strong>02+</strong>
                    <span>Projects</span>
                  </div>

                  <div className="stat">
                    <strong>08+</strong>
                    <span>Skills</span>
                  </div>

                </div>

              </div>

              <div className="floating-card react-card">
                <span>⚛️</span>
                <div>
                  <strong>React</strong>
                  <small>Frontend</small>
                </div>
              </div>

              <div className="floating-card ai-card">
                <span>🤖</span>
                <div>
                  <strong>AI</strong>
                  <small>Learning</small>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">

          <div className="section-heading">
            <span>01</span>
            <div>
              <p>GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-grid">

            <div className="about-text">
              <h3>
                Turning ideas into <span>digital experiences.</span>
              </h3>

              <p>
                I'm Hussain Adil, a Computer Science student currently pursuing
                my BSCS degree at the University of Sialkot.
              </p>

              <p>
                I enjoy learning software development and building projects
                that help me improve my programming and problem-solving skills.
              </p>

              <p>
                My current interests include web development, React,
                artificial intelligence, databases, and backend development.
              </p>

              <div className="about-highlight">
                <span>🎓</span>
                <div>
                  <strong>BSCS Student</strong>
                  <p>University of Sialkot</p>
                </div>
              </div>
            </div>

            <div className="about-cards">

              <div className="info-card">
                <div className="info-icon">💻</div>
                <h3>Web Development</h3>
                <p>
                  Building responsive and modern websites using HTML, CSS,
                  JavaScript and React.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🤖</div>
                <h3>Artificial Intelligence</h3>
                <p>
                  Exploring AI concepts and developing AI-powered applications
                  to expand my technical skills.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">

          <div className="section-heading">
            <span>02</span>
            <div>
              <p>WHAT I WORK WITH</p>
              <h2>My Skills</h2>
            </div>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">🌐</span>
                <span>01</span>
              </div>
              <h3>HTML</h3>
              <p>Semantic and structured web pages.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">🎨</span>
                <span>02</span>
              </div>
              <h3>CSS</h3>
              <p>Responsive layouts and modern UI styling.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">⚡</span>
                <span>03</span>
              </div>
              <h3>JavaScript</h3>
              <p>Interactive and dynamic web applications.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">⚛️</span>
                <span>04</span>
              </div>
              <h3>React</h3>
              <p>Component-based modern frontend development.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">💻</span>
                <span>05</span>
              </div>
              <h3>C++</h3>
              <p>Programming fundamentals and problem solving.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">🗄️</span>
                <span>06</span>
              </div>
              <h3>MySQL</h3>
              <p>Database design and data management.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">🟢</span>
                <span>07</span>
              </div>
              <h3>Node.js</h3>
              <p>Backend development with JavaScript.</p>
            </div>

            <div className="skill-card">
              <div className="skill-top">
                <span className="skill-icon">🤖</span>
                <span>08</span>
              </div>
              <h3>AI</h3>
              <p>Learning AI concepts and AI application development.</p>
            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">

          <div className="section-heading">
            <span>03</span>
            <div>
              <p>WHAT I'VE BUILT</p>
              <h2>Featured Projects</h2>
            </div>
          </div>

          <div className="projects-grid">

            {/* AI CHATBOT */}
            <article className="project-card">

              <div className="project-number">01</div>

              <div className="project-icon">🤖</div>

              <div className="project-content">
                <span className="project-category">
                  AI • React • Node.js
                </span>

                <h3>AI Chatbot</h3>

                <p>
                  An AI-powered chatbot built with React and Node.js. It
                  includes chat history, dark mode, image analysis, Markdown
                  responses and a modern ChatGPT-style interface.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Gemini AI</span>
                </div>

                <div className="project-actions">
                  <a href="#" className="project-btn primary-project-btn">
                    View Project ↗
                  </a>

                  <a href="#" className="project-btn">
                    GitHub ↗
                  </a>
                </div>
              </div>

            </article>

            {/* LIBRARY MANAGEMENT */}
            <article className="project-card">

              <div className="project-number">02</div>

              <div className="project-icon">📚</div>

              <div className="project-content">
                <span className="project-category">
                  Full Stack • Database
                </span>

                <h3>Library Management System</h3>

                <p>
                  A full-stack library management application for managing
                  books, students, issued books and returns with a React
                  frontend, Express backend and MySQL database.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Express</span>
                  <span>MySQL</span>
                </div>

                <div className="project-actions">
                  <a href="#" className="project-btn primary-project-btn">
                    View Project ↗
                  </a>

                  <a href="#" className="project-btn">
                    GitHub ↗
                  </a>
                </div>
              </div>

            </article>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">

          <div className="contact-container">

            <div className="contact-heading">
              <span>04</span>
              <p>LET'S CONNECT</p>
              <h2>Have a project in mind?</h2>
              <p className="contact-description">
                I'm always interested in learning, building new projects and
                connecting with other developers.
              </p>
            </div>

            <div className="contact-cards">

              <a href="mailto:your-email@example.com" className="contact-card">
                <span>✉️</span>
                <div>
                  <small>Email</small>
                  <strong>your-email@example.com</strong>
                </div>
              </a>

              <a href="#" className="contact-card">
                <span>💻</span>
                <div>
                  <small>GitHub</small>
                  <strong>github.com</strong>
                </div>
              </a>

              <a href="#" className="contact-card">
                <span>🔗</span>
                <div>
                  <small>LinkedIn</small>
                  <strong>linkedin.com</strong>
                </div>
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-container">

          <div>
            <div className="footer-logo">
              HA<span>.</span>
            </div>
            <p>Computer Science Student &amp; Aspiring Developer</p>
          </div>

          <div className="footer-right">
            <p>© 2026 Hussain Adil. All rights reserved.</p>
            <a href="#home">Back to top ↑</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;