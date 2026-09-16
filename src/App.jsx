import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleProfileImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <div className={darkMode ? "portfolio dark-mode" : "portfolio"}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            HA.
          </button>

          <div className="nav-links">
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="availability">
                <span></span>
                Available for opportunities
              </div>

              <p className="hero-label">HELLO, I'M</p>

              <h1>
                Hussain <span>Adil</span>
              </h1>

              <h2>BSCS Student & Aspiring Software Developer</h2>

              <p className="hero-description">
                I am a Computer Science student passionate about
                building modern web applications, learning new
                technologies, and turning ideas into practical
                software solutions.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work →
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Connect
                </button>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/hussainsbhatti8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="hero-card-area">
              <div className="profile-card">
                <div className="card-top">
                  <span>PROFILE</span>
                  <span>01</span>
                </div>

                {/* PROFILE PHOTO */}
                <div className="profile-photo-area">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Hussain Adil"
                      className="profile-photo"
                    />
                  ) : (
                    <div className="profile-avatar">HA</div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImage}
                    className="profile-file-input"
                    aria-label="Choose profile photo"
                  />

                  <button
                    type="button"
                    className="change-photo-button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <span className="photo-button-icon">＋</span>
                    {profileImage ? "Change Photo" : "Attach Photo"}
                  </button>
                </div>

                <h3>Hussain Adil</h3>

                <p>Computer Science Student</p>

                <div className="card-divider"></div>

                <div className="profile-stats">
                  <div>
                    <strong>04+</strong>
                    <span>Semesters</span>
                  </div>

                  <div>
                    <strong>02+</strong>
                    <span>Projects</span>
                  </div>

                  <div>
                    <strong>08+</strong>
                    <span>Skills</span>
                  </div>
                </div>
              </div>

              {/* SMALL AI BADGE */}
              <div className="floating-card ai-card">
                <strong>
                  <span>✦</span> AI
                </strong>
                <span>Intelligent Apps</span>
              </div>

              {/* SMALL REACT BADGE */}
              <div className="floating-card react-card">
                <strong>
                  <span>⚛</span> React
                </strong>
                <span>Frontend</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-container">
            <div className="section-heading">
              <p>01 — ABOUT</p>

              <h2>Learning, building and growing.</h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <p>
                  I am currently pursuing a Bachelor of Science
                  in Computer Science. I am interested in software
                  development, web technologies, databases and
                  artificial intelligence.
                </p>

                <p>
                  I enjoy learning through practical projects and
                  continuously improving my programming and
                  development skills.
                </p>
              </div>

              <div className="about-details">
                <div>
                  <span>Education</span>
                  <strong>BSCS</strong>
                </div>

                <div>
                  <span>University</span>
                  <strong>University of Sialkot</strong>
                </div>

                <div>
                  <span>Focus</span>
                  <strong>Software Development</strong>
                </div>

                <div>
                  <span>Learning</span>
                  <strong>React & AI</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-container">
            <div className="section-heading">
              <p>02 — SKILLS</p>

              <h2>Technologies I'm working with.</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <span>01</span>
                <div>
                  <h3>HTML</h3>
                  <small>Frontend</small>
                </div>
              </div>

              <div className="skill-card">
                <span>02</span>
                <div>
                  <h3>CSS</h3>
                  <small>Frontend</small>
                </div>
              </div>

              <div className="skill-card">
                <span>03</span>
                <div>
                  <h3>JavaScript</h3>
                  <small>Programming</small>
                </div>
              </div>

              <div className="skill-card">
                <span>04</span>
                <div>
                  <h3>React</h3>
                  <small>Frontend</small>
                </div>
              </div>

              <div className="skill-card">
                <span>05</span>
                <div>
                  <h3>C++</h3>
                  <small>Programming</small>
                </div>
              </div>

              <div className="skill-card">
                <span>06</span>
                <div>
                  <h3>MySQL</h3>
                  <small>Database</small>
                </div>
              </div>

              <div className="skill-card">
                <span>07</span>
                <div>
                  <h3>Node.js</h3>
                  <small>Backend</small>
                </div>
              </div>

              <div className="skill-card">
                <span>08</span>
                <div>
                  <h3>AI / Gemini</h3>
                  <small>Artificial Intelligence</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-container">
            <div className="projects-heading">
              <div className="section-heading">
                <p>03 — PROJECTS</p>

                <h2>Things I've built.</h2>
              </div>

              <a
                href="https://github.com/hussainsbhatti8"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub ↗
              </a>
            </div>

            <div className="projects-grid">
              {/* AI CHATBOT */}
              <div className="project-card">
                <div className="project-card-top">
                  <span>01</span>
                  <span>AI PROJECT</span>
                </div>

                <div className="project-card-content">
                  <h3>AI Chatbot</h3>

                  <p>
                    A modern AI assistant built with React and
                    Node.js, connected with Google Gemini for
                    intelligent conversations.
                  </p>

                  <div className="tech-list">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Gemini AI</span>
                  </div>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/hussainsbhatti8/AI-Chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    View My Project →
                  </a>

                  <a
                    href="https://github.com/hussainsbhatti8/AI-Chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* LIBRARY MANAGEMENT */}
              <div className="project-card">
                <div className="project-card-top">
                  <span>02</span>
                  <span>FULL-STACK PROJECT</span>
                </div>

                <div className="project-card-content">
                  <h3>Library Management System</h3>

                  <p>
                    A full-stack library management application
                    for managing books, students, issuing and
                    returning records.
                  </p>

                  <div className="tech-list">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MySQL</span>
                    <span>Express</span>
                  </div>
                </div>

                <div className="project-buttons">
                  <a
                    href="https://github.com/hussainsbhatti8/Library-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    View My Project →
                  </a>

                  <a
                    href="https://github.com/hussainsbhatti8/Library-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-container">
            <div className="contact-box">
              <div>
                <p>04 — CONTACT</p>

                <h2>
                  Let's connect and build something useful.
                </h2>

                <p>
                  I'm interested in learning, collaborating on
                  projects and exploring opportunities in software
                  development.
                </p>
              </div>

              <div className="contact-buttons">
                <a
                  href="mailto:hussains.bhatti8@gmail.com"
                  className="primary-button"
                >
                  Email Me →
                </a>

                <a
                  href="tel:03269619288"
                  className="secondary-button"
                >
                  Call Me →
                </a>

                <a
                  href="https://github.com/hussainsbhatti8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub Profile ↗
                </a>
              </div>

              <div className="contact-details">
                <a href="mailto:hussains.bhatti8@gmail.com">
                  ✉ hussains.bhatti8@gmail.com
                </a>

                <a href="tel:03269619288">
                  ☎ 03269619288
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>HA.</strong>
            <span>Hussain Adil</span>
          </div>

          <p>© 2026 Hussain Adil. Built with React.</p>

          <button onClick={() => scrollToSection("home")}>
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;