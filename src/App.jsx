import { useRef, useState } from "react";
import "./App.css";

/* =========================================================
   SVG ICONS
   ========================================================= */

function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 2l1.7 19L12 23l7.3-2L21 2H3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 6h10l-.3 3H10l.2 2h6.2l-.7 6.5-3.7 1-3.7-1-.3-3h3l.1 1.2.9.2.9-.2.2-1.7H7.8L7 6z" fill="currentColor" />
    </svg>
  );
}

function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 2l1.7 19L12 23l7.3-2L21 2H3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 6h10l-.3 3H10l.2 2h6.2l-.7 6.5-3.7 1-3.7-1-.3-3h3l.1 1.2.9.2.9-.2.2-1.7H7.8L7 6z" fill="currentColor" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
      <path
        d="M13.3 17.2c.5.8 1.1 1.2 2 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.4-1.3-2.4-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .5.3.7 1.1 1l.5.2c1.7.7 2.7 1.4 2.7 3 0 1.7-1.3 2.7-3.2 2.7-1.8 0-3-.9-3.6-2l1.5-.8z"
        fill="var(--skill-icon-bg, #fff)"
      />
      <path
        d="M7.5 10.7v5.7c0 .8-.3 1.1-.9 1.1-.5 0-.8-.3-1-.7l-1.5.9c.5 1 1.3 1.5 2.6 1.5 1.7 0 2.7-.9 2.7-2.8v-5.7H7.5z"
        fill="var(--skill-icon-bg, #fff)"
      />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(60 12 12)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(120 12 12)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function CppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5a3 3 0 0 1 1.5.4l6.1 3.5a3 3 0 0 1 1.5 2.6v6.9a3 3 0 0 1-1.5 2.6l-6.1 3.5a3 3 0 0 1-3 0l-6.1-3.5A3 3 0 0 1 2.9 16V9a3 3 0 0 1 1.5-2.6l6.1-3.5A3 3 0 0 1 12 2.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M14.4 10.1c-.5-.6-1.1-.9-1.9-.9-1.5 0-2.5 1.1-2.5 2.8s1 2.8 2.5 2.8c.8 0 1.5-.3 2-.9l1.1 1c-.8.9-1.8 1.4-3.2 1.4-2.3 0-4-1.7-4-4.3s1.7-4.3 4-4.3c1.3 0 2.4.5 3.1 1.4l-1.1 1z"
        fill="currentColor"
      />
      <path d="M17 10.4h1v1.3h-1zM19 10.4h1v1.3h-1zM17 13.2h1v1.3h-1zM19 13.2h1v1.3h-1z" fill="currentColor" />
    </svg>
  );
}

function MySqlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5.5C4 4.1 7.6 3 12 3s8 1.1 8 2.5S16.4 8 12 8 4 6.9 4 5.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 5.5v6c0 1.4 3.6 2.5 8 2.5 1.3 0 2.5-.1 3.5-.3M20 5.5v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 11.5v6c0 1.4 3.6 2.5 8 2.5 1.3 0 2.5-.1 3.5-.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M17.2 14.3c-.7 0-1.2.4-1.2 1s.5.8 1.4 1.1c.9.3 1.3.6 1.3 1.2 0 .8-.7 1.3-1.6 1.3-.8 0-1.4-.3-1.8-.9l.7-.5c.3.4.6.6 1.1.6.4 0 .7-.2.7-.5s-.2-.4-.8-.6c-1-.4-1.8-.7-1.8-1.7 0-1 .8-1.6 2-1.6.8 0 1.4.3 1.8.9l-.7.5c-.2-.3-.5-.5-1.1-.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.7l8.2 4.7v9.2L12 21.3l-8.2-4.7V7.4L12 2.7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.4 15.3V9.7l3.7 2.2 3.5-2.2v5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5l1.6 6.3L20 10.5l-6.4 1.7L12 18.5l-1.6-6.3L4 10.5l6.4-1.7L12 2.5z"
        fill="currentColor"
      />
      <path
        d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M11 4h5v5M16 4l-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   SKILL ICON COMPONENT
   ========================================================= */

function SkillIcon({ type }) {
  const icons = {
    html: <HtmlIcon />,
    css: <CssIcon />,
    javascript: <JavaScriptIcon />,
    react: <ReactIcon />,
    cpp: <CppIcon />,
    mysql: <MySqlIcon />,
    node: <NodeIcon />,
    ai: <AiIcon />,
  };

  return <div className={`skill-icon ${type}-icon`}>{icons[type]}</div>;
}

/* =========================================================
   MAIN APP
   ========================================================= */

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

  const skills = [
    {
      number: "01",
      name: "HTML",
      category: "Frontend",
      type: "html",
    },
    {
      number: "02",
      name: "CSS",
      category: "Frontend",
      type: "css",
    },
    {
      number: "03",
      name: "JavaScript",
      category: "Programming",
      type: "javascript",
    },
    {
      number: "04",
      name: "React",
      category: "Frontend",
      type: "react",
    },
    {
      number: "05",
      name: "C++",
      category: "Programming",
      type: "cpp",
    },
    {
      number: "06",
      name: "MySQL",
      category: "Database",
      type: "mysql",
    },
    {
      number: "07",
      name: "Node.js",
      category: "Backend",
      type: "node",
    },
    {
      number: "08",
      name: "AI / Gemini",
      category: "Artificial Intelligence",
      type: "ai",
    },
  ];

  return (
    <div className={darkMode ? "portfolio dark-mode" : "portfolio"}>
      <nav className="navbar">
        <div className="navbar-inner">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            HA.
          </button>

          <div className="nav-links">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
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
                  View My Work
                  <ArrowIcon />
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
                  GitHub
                  <ExternalIcon />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="hero-card-area">
              <div className="profile-card">
                <div className="card-top">
                  <span>PROFILE</span>
                  <span>01</span>
                </div>

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

              <div className="floating-card ai-card">
                <strong>
                  <span>✦</span> AI
                </strong>

                <span>Intelligent Apps</span>
              </div>

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
                  I am currently pursuing a{" "}
                  <strong> Bachelor of Science in Computer Science </strong>
                  at{" "}
                  <strong>University of Sialkot</strong>.
                  I am interested in software development, web
                  technologies, databases and artificial intelligence.
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
              {skills.map((skill, index) => (
                <div
                  className="skill-card"
                  key={skill.name}
                  style={{
                    "--skill-delay": `${index * 0.08}s`,
                  }}
                >
                  <SkillIcon type={skill.type} />

                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <small>{skill.category}</small>
                  </div>

                  <div className="skill-arrow">
                    <ArrowIcon />
                  </div>
                </div>
              ))}
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
                View GitHub
                <ExternalIcon />
              </a>
            </div>

            <div className="projects-grid">
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
                    View My Project
                    <ArrowIcon />
                  </a>

                  <a
                    href="https://github.com/hussainsbhatti8/AI-Chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <ExternalIcon />
                  </a>
                </div>
              </div>

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
                    View My Project
                    <ArrowIcon />
                  </a>

                  <a
                    href="https://github.com/hussainsbhatti8/Library-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <ExternalIcon />
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
                  Email Me
                  <ArrowIcon />
                </a>

                <a
                  href="tel:03269619288"
                  className="secondary-button"
                >
                  Call Me
                  <ArrowIcon />
                </a>

                <a
                  href="https://github.com/hussainsbhatti8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub Profile
                  <ExternalIcon />
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