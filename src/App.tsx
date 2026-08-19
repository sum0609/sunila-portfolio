import { useState, type ReactNode } from 'react'

type IconProps = { size?: number }

const Icon = ({ name, size = 20 }: { name: string } & IconProps) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    brain: <><path d="M9.5 3a3.5 3.5 0 0 0-3 5.5A3.5 3.5 0 0 0 8 15.1V18a3 3 0 0 0 3 3h2"/><path d="M14.5 3a3.5 3.5 0 0 1 3 5.5A3.5 3.5 0 0 1 16 15.1V18a3 3 0 0 1-3 3"/><path d="M8 8h2"/><path d="M14 8h2"/><path d="M9 13h2"/><path d="M13 13h2"/><path d="M12 5v15"/></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></>,
    accessibility: <><circle cx="12" cy="4" r="2"/><path d="M5 8h14"/><path d="M12 8v5"/><path d="m8 21 4-8 4 8"/><path d="m7 13 5 2 5-2"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></>,
    graduation: <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11v5c3 2 7 2 10 0v-5"/><path d="M21 9v6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    linkedin: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M12 13a3 3 0 0 1 6 0v3"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.8S18 .4 15 2.4a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>,
    external: <><path d="M14 4h6v6"/><path d="m10 14 10-10"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  }
  return <svg {...common} aria-hidden="true">{paths[name]}</svg>
}

const skills = {
  "AI & Data": ["Python", "Pandas", "NumPy", "PySpark", "Scikit-learn", "TensorFlow", "NLP", "LLM", "Deep Learning", "Computer Vision", "Forecasting", "Statistical Analysis"],
  "Software Engineering": ["C#", "ASP.NET", "Flask", "REST APIs", "JavaScript", "HTML5", "Tailwind CSS", "Git", "Agile"],
  "Data & Databases": ["SQL", "PostgreSQL", "SQL Server", "Oracle", "SQLite", "Hadoop", "Power BI", "Data Pipelines", "Dashboards"],
}

const projects = [
  {
    number: "01",
    title: "Easy Event",
    category: "Accessible Web Application",
    description: "A responsive event application developed for a council, focused on a clear user experience, accessibility and maintainable front-end delivery.",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "W3C accessibility"],
    accent: "blue",
  },
  {
    number: "02",
    title: "Smart Glove Sign-Language Translation",
    category: "AI / Computer Vision",
    description: "Research project exploring sign-language detection and translation using a hybrid CNN–Transformer approach, combining machine learning with practical assistive technology.",
    tech: ["Python", "CNN", "Transformer", "Deep Learning"],
    accent: "violet",
  },
  {
    number: "03",
    title: "Healthcare Analytics",
    category: "Big Data / Analytics",
    description: "Healthcare analytics work involving large datasets, data processing, statistical analysis and visual reporting to turn complex data into useful insights.",
    tech: ["Python", "PySpark", "Pandas", "Power BI"],
    accent: "green",
  },
]

const experience = [
  {
    date: "Oct 2025 — Present",
    role: "App Developer / Team Lead",
    company: "London Metropolitan University",
    text: "Part-time application development and team coordination, including delivery of the Easy Event application for a council. Focused on responsive UI, accessibility, stakeholder needs, Git-based collaboration and documentation.",
  },
  {
    date: "Jan 2024 — Present",
    role: "Research Assistant / App Developer",
    company: "London Metropolitan University",
    text: "Software development and applied AI research spanning healthcare analytics, data pipelines, dashboards and intelligent application prototypes.",
  },
  {
    date: "Mar 2018 — Sep 2021",
    role: "Software Engineer",
    company: "Arhant Solutions",
    text: "Professional software engineering experience building and maintaining applications, working with databases, APIs and development teams.",
  },
  {
    date: "Jan 2025 — Mar 2025",
    role: "Scale-Ability Bootcamp",
    company: "Code Cumbria",
    text: "Completed an intensive software and professional development programme, strengthening practical engineering, collaboration and delivery skills.",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SM</span>
          <span>Sunila Maharjan</span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse-dot" /> SOFTWARE ENGINEER · AI · DATA</p>
            <h1>Building useful software with <span>intelligence</span> and purpose.</h1>
            <p className="hero-text">
              I'm Sunila, a Software Engineer and AI-focused developer with 3+ years of professional
              development experience and an MSc in Artificial Intelligence with Distinction.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <Icon name="arrow" size={18} /></a>
              <a className="button secondary" href="#contact">Let's connect</a>
            </div>
            <div className="hero-meta">
              <span>📍 Cumbria, UK</span>
              <span>Open to software & AI opportunities</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Technology profile">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="window-bar"><i /><i /><i /></div>
              <pre><code><span className="syntax-key">const</span> <span className="syntax-var">engineer</span> = {'{'}
  name: <span className="syntax-string">'Sunila'</span>,
  focus: [<span className="syntax-string">'AI'</span>,
          <span className="syntax-string">'Software'</span>,
          <span className="syntax-string">'Data'</span>],
  mindset: <span className="syntax-string">'build + learn'</span>
{'}'}</code></pre>
            </div>
            <div className="floating-tag tag-ai"><Icon name="brain" size={17} /> AI</div>
            <div className="floating-tag tag-code"><Icon name="code" size={17} /> Full Stack</div>
            <div className="floating-tag tag-data"><Icon name="database" size={17} /> Data</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">01 · ABOUT</p>
            <h2>A developer who likes to understand the <em>why</em>.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="large-copy">My work sits at the intersection of software engineering, data and artificial intelligence.</p>
              <p>I enjoy taking a problem from an early idea through to a working application — understanding users, designing the experience, writing the code and refining the result.</p>
              <p>Alongside professional development, my academic and research work has given me hands-on experience with machine learning, computer vision, NLP, big-data analytics and data-driven applications.</p>
            </div>
            <div className="stats">
              <div className="stat"><strong>3+</strong><span>Years software development</span></div>
              <div className="stat"><strong>MSc</strong><span>Artificial Intelligence · Distinction</span></div>
              <div className="stat"><strong>70.72%</strong><span>BE Computer Engineering · First Division</span></div>
              <div className="stat"><strong>AI</strong><span>Research & applied projects</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">02 · TOOLKIT</p>
            <h2>Technologies I use to <em>build</em>.</h2>
          </div>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items], index) => (
              <article className="skill-card" key={group}>
                <div className="skill-icon"><Icon name={index === 0 ? "brain" : index === 1 ? "code" : "database"} /></div>
                <h3>{group}</h3>
                <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">03 · EXPERIENCE</p>
            <h2>Where I've been <em>building</em>.</h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.date}`}>
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-content">
                  <p className="timeline-date">{item.date}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">04 · SELECTED WORK</p>
              <h2>Projects with a <em>purpose</em>.</h2>
            </div>
            <p className="heading-note">A selection of academic, research and professional work.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top"><span>{project.number}</span><Icon name="external" size={18} /></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <div className="education-card">
            <div className="skill-icon"><Icon name="graduation" /></div>
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h2>MSc Artificial Intelligence</h2>
              <p className="edu-school">London Metropolitan University · Distinction</p>
              <p>Advanced study across machine learning, AI, data analysis and intelligent systems, complemented by research and application development.</p>
            </div>
            <div className="edu-secondary">
              <strong>BE Computer Engineering</strong>
              <span>First Division · 70.72%</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-inner">
            <p className="eyebrow">05 · CONTACT</p>
            <h2>Have a problem worth <em>building</em>?</h2>
            <p>I'm interested in software engineering, AI, data and product-focused opportunities where I can keep learning while creating useful things.</p>
            <a className="button primary" href="mailto:your.email@example.com">Get in touch <Icon name="mail" size={18} /></a>
            <div className="socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sunila Maharjan</span>
        <span>Designed & built with React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App
