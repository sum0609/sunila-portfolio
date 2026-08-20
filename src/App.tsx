import { useEffect, useState, type FormEvent, type ReactNode } from 'react'

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
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    award: <><circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 21l5-3 5 3-1.5-9"/></>,
    publication: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>,
    back: <><path d="m15 18-6-6 6-6"/><path d="M9 12h10"/></>,
    check: <><path d="M20 6 9 17l-5-5"/></>,
  }
  return <svg {...common} aria-hidden="true">{paths[name]}</svg>
}

const skills = {
  "AI & Data": ["Python", "Pandas", "NumPy", "PySpark", "Scikit-learn", "TensorFlow", "NLP", "LLM", "Deep Learning", "Computer Vision", "Forecasting", "Statistical Analysis"],
  "Software Engineering": ["C#", "ASP.NET", "React", "Node.js", "Express.js", "Flutter", "Flask", "REST APIs", "JavaScript", "Tailwind CSS", "Git"],
  "Data & Databases": ["SQL", "PostgreSQL", "SQL Server", "SQLite", "Firebase", "Cloud Firestore", "Hadoop", "Power BI", "Data Pipelines", "Dashboards"],
}

type Project = {
  number: string
  title: string
  category: string
  status: string
  description: string
  outcome: string
  tech: string[]
  accent: string
  slug: string
  role: string
  challenge: string
  approach: string
  highlights: string[]
  evidence: { label: string; url: string }[]
  heroImage?: { src: string; alt: string; caption: string }
  gallery?: { src: string; alt: string; caption: string }[]
}

const projects: Project[] = [
  {
    number: "01",
    title: "Easy Event",
    category: "Accessible Web Application",
    status: "Contract phase completed · continuation pending",
    description: "A responsive event application developed for a council, focused on a clear user experience, accessibility and maintainable front-end delivery.",
    outcome: "Leading delivery with council stakeholders, accessibility testing and an Agile student team.",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "W3C accessibility"],
    accent: "blue",
    slug: "easy-event",
    role: "App Developer and Team Lead",
    challenge: "Turn council requirements into an inclusive event-finding experience that remains straightforward for a broad range of users.",
    approach: "Led user-journey refinement, responsive interface delivery, accessibility and usability testing, Git-based reviews and iterative stakeholder demonstrations.",
    highlights: ["Council stakeholder collaboration", "Accessibility-led interface decisions", "Agile planning and team coordination"],
    evidence: [],
  },
  {
    number: "02",
    title: "Smart Glove Sign-Language Translation",
    category: "AI / Computer Vision",
    status: "Published research · continued as Smart Glove 2.0",
    description: "Research project exploring sign-language detection and translation using a hybrid CNN–Transformer approach, combining machine learning with practical assistive technology.",
    outcome: "Selected by the university's Assistive Technology Research Group and developed into two publications.",
    tech: ["Python", "CNN", "Transformer", "Deep Learning"],
    accent: "violet",
    slug: "smart-glove",
    role: "AI Researcher and Developer",
    challenge: "Recognise sign-language patterns from smart-glove sensor data and translate them into a practical assistive-technology concept.",
    approach: "Developed and evaluated machine-learning and deep-learning approaches, including a hybrid CNN-Transformer model, and communicated the research through academic publications.",
    highlights: ["Selected by the Assistive Technology Research Group", "Hybrid CNN-Transformer evaluation", "Two related research publications"],
    evidence: [
      { label: "London Met project profile", url: "https://www.londonmet.ac.uk/research/centres-groups-and-units/assistive-technology-research-group/projects-and-partners/smart-glove-/" },
      { label: "Smart Glove · ICICC 2024", url: "https://link.springer.com/chapter/10.1007/978-981-97-3591-4_41" },
      { label: "Smart Glove 2.0 · ICDAM 2025", url: "https://link.springer.com/chapter/10.1007/978-3-032-02831-0_4" },
    ],
    heroImage: {
      src: "/images/smart-glove/prototype-2.webp",
      alt: "Smart Glove 2.0 prototype with flex sensors, wiring and its Arduino Nano ESP32 control board",
      caption: "Smart Glove 2.0 — the refined prototype supporting the hybrid CNN-Transformer research published at ICDAM 2025.",
    },
    gallery: [
      {
        src: "/images/smart-glove/prototype-1.webp",
        alt: "Original Smart Glove prototype connected to an Arduino Mega and breadboard",
        caption: "Original MSc prototype — selected by the Assistive Technology Research Group and published at ICICC 2024.",
      },
      {
        src: "/images/smart-glove/prototype-2-development.webp",
        alt: "Smart Glove 2.0 during development with exposed wiring and electronics on a workbench",
        caption: "Smart Glove 2.0 in development — further sensor integration and hardware research before the second publication.",
      },
    ],
  },
  {
    number: "03",
    title: "Healthcare Analytics",
    category: "Published Healthcare Analytics Research",
    status: "Completed · published research",
    description: "A data-driven study examining vitamin D patterns to support more sustainable healthcare decision-making across Inner London boroughs.",
    outcome: "Published in Computational Intelligence and recognised with First Place for Best Presentation at the 2024 research conference.",
    tech: ["Python", "PySpark", "Pandas", "Power BI"],
    accent: "green",
    slug: "healthcare-analytics",
    role: "Research Assistant and Data Developer",
    challenge: "Analyse complex vitamin D and healthcare data across Inner London boroughs and communicate findings that could support sustainable, evidence-led healthcare planning.",
    approach: "Built Python, Flask and PySpark data workflows, used Azure tooling, applied statistical analysis and forecasting, and presented results through dashboards and research outputs.",
    highlights: ["Published in Computational Intelligence", "Large-scale healthcare data analysis", "First Place research presentation"],
    evidence: [
      { label: "Published article · Computational Intelligence", url: "https://onlinelibrary.wiley.com/doi/10.1111/coin.70050" },
    ],
    heroImage: {
      src: "/images/healthcare-analytics/vitamin-d-dashboard.webp",
      alt: "Vitamin D NHS prescriptions analytics dashboard showing trends by practice, formulation, medication and dosage",
      caption: "Vitamin D prescription analytics dashboard built from aggregated NHS prescribing data.",
    },
  },
  {
    number: "04",
    title: "Staff Log Maintenance System",
    category: "Independent Full-Stack Product",
    status: "Private build · not publicly released",
    description: "A secure staff-record and maintenance logging application with authenticated access, structured reporting and document exports.",
    outcome: "Built independently between contracts to deepen full-stack product delivery, reporting and deployment experience.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "ExcelJS", "PDFKit"],
    accent: "blue",
    slug: "staff-log-maintenance",
    role: "Independent Full-Stack Developer",
    challenge: "Create a practical system for maintaining staff logs securely while making operational records easy to search, manage and export.",
    approach: "Built the interface with HTML, JavaScript and Tailwind CSS; developed an Express API backed by PostgreSQL; secured sessions with JWT, bcryptjs and HTTP-only cookies; and added Excel and PDF reporting.",
    highlights: ["Secure authentication and HTTP-only cookies", "Excel and PDF report generation", "GitHub-based delivery and Hostinger deployment workflow"],
    evidence: [],
  },
  {
    number: "05",
    title: "Kids Reward App",
    category: "Independent Cross-Platform App",
    status: "In development · not publicly released",
    description: "A multi-platform rewards application designed to help families record achievements and keep reward progress visible in real time.",
    outcome: "An independent Flutter and Firebase build targeting mobile, web and desktop from a shared codebase.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Material 3"],
    accent: "violet",
    slug: "kids-reward-app",
    role: "Independent App Developer",
    challenge: "Design a simple, responsive reward-tracking experience that can work consistently across mobile, web and desktop platforms.",
    approach: "Used Flutter and Material Design 3 for the shared interface, Firebase Core for platform configuration and Cloud Firestore streams for real-time data updates.",
    highlights: ["Android, iOS, web and desktop targets", "Real-time Cloud Firestore updates", "Flutter analysis and cross-platform build tooling"],
    evidence: [],
  },
  {
    number: "06",
    title: "Point of Sale System",
    category: "Independent Full-Stack Product",
    status: "In development · not publicly released",
    description: "A full-stack point-of-sale workspace covering cart operations, order handling, customer bills and print-ready counter and kitchen tickets.",
    outcome: "Built independently to explore reliable transaction workflows, embedded data storage and practical receipt printing.",
    tech: ["React", "Node.js", "Express.js", "SQLite", "JavaScript", "CSS"],
    accent: "green",
    slug: "point-of-sale-system",
    role: "Independent Full-Stack Developer",
    challenge: "Bring sales, order management and multiple print formats into one focused interface suitable for day-to-day point-of-sale use.",
    approach: "Built the workspace in React, created Express endpoints for order and bill workflows, used SQLite transactions and unique identifiers, and produced 80mm receipt and ticket layouts through the browser print engine.",
    highlights: ["Cart and order-management workflows", "SQLite transactions and parameterised queries", "Thermal receipt, bill and kitchen-ticket printing"],
    evidence: [],
  },
]

const ThemeToggle = ({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) => (
  <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
    <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
  </button>
)

const ProjectDetail = ({ project, theme, onToggleTheme }: { project: Project; theme: "dark" | "light"; onToggleTheme: () => void }) => (
  <div className="site-shell project-page">
    <header className="navbar">
      <a className="brand" href="#home"><span className="brand-mark">SM</span><span>Sunila Maharjan</span></a>
      <div className="nav-tools"><ThemeToggle theme={theme} onToggle={onToggleTheme} /><a className="button secondary compact" href="#projects"><Icon name="back" size={17} /> Back to work</a></div>
    </header>
    <main>
      <article className={`project-detail section ${project.accent}`}>
        <p className="eyebrow">CASE STUDY · {project.number}</p>
        <p className="project-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-lead">{project.description}</p>
        {project.heroImage && <figure className="project-hero-photo"><img src={project.heroImage.src} alt={project.heroImage.alt} /><figcaption>{project.heroImage.caption}</figcaption></figure>}
        <div className="detail-meta"><div><span>STATUS</span><strong>{project.status}</strong></div><div><span>ROLE</span><strong>{project.role}</strong></div><div><span>TOOLKIT</span><strong>{project.tech.join(" · ")}</strong></div></div>
        <div className="detail-grid">
          <section><p className="eyebrow">THE CHALLENGE</p><h2>Starting with the problem.</h2><p>{project.challenge}</p></section>
          <section><p className="eyebrow">THE APPROACH</p><h2>Turning research into delivery.</h2><p>{project.approach}</p></section>
        </div>
        {project.gallery && <section className="prototype-section"><p className="eyebrow">PROTOTYPE EVOLUTION</p><h2>From first prototype to further research.</h2><div className="prototype-gallery">{project.gallery.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>}
        <div className="detail-highlights"><p className="eyebrow">HIGHLIGHTS</p>{project.highlights.map(item => <div key={item}><Icon name="check" size={18} /><span>{item}</span></div>)}</div>
        {project.evidence.length > 0 && <div className="evidence-links"><p className="eyebrow">VERIFIED EXTERNAL EVIDENCE</p>{project.evidence.map(item => <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>{item.label}<Icon name="external" size={16} /></a>)}</div>}
        <a className="button primary" href="mailto:sunilamaharjan.2022@gmail.com?subject=Portfolio project enquiry">Ask me about this project <Icon name="arrow" size={17} /></a>
      </article>
    </main>
  </div>
)

const experience = [
  {
    date: "Oct 2025 — Contract phase completed · continuation pending",
    role: "Easy Event App Developer / Project Lead",
    company: "London Metropolitan University · Local council project",
    text: "Led the contracted delivery phase of an accessible event application for a local council, coordinating the student team, stakeholder requirements, user journeys, code reviews and demonstrations. The original contract is complete; the council has requested further development and the next phase is awaiting a new contract.",
  },
  {
    date: "Project-based research engagements",
    role: "Healthcare Analytics Researcher / Team Lead",
    company: "Assistive Technology Research Group · London Metropolitan University",
    text: "Completed the Vitamin D analytics project as the first project assigned by the research group, resulting in a published paper and a First Place presentation award. I was then assigned a diabetes healthcare analytics project with responsibility for leading the project team.",
  },
  {
    date: "Between contracts · Ongoing",
    role: "Independent Product Developer",
    company: "Self-directed projects",
    text: "Used periods between paid engagements to keep building: a secure staff log maintenance system, a cross-platform kids reward app and a full-stack point-of-sale system. These remain private or in development and are presented as independent products, not client work.",
  },
  {
    date: "Jan 2025 — Mar 2025",
    role: "Scale-Ability Bootcamp",
    company: "Code Cumbria",
    text: "Completed an intensive software and professional development programme, strengthening practical engineering, collaboration and delivery skills.",
  },
  {
    date: "Mar 2018 — Sep 2021",
    role: "Software Engineer",
    company: "Arhant Solutions",
    text: "Built enterprise ASP.NET, JavaScript and SQL Server applications, REST APIs and secure role-based systems. Introduced CI/CD automation that reduced deployment time by 60%.",
  },
]

const publications = [
  {
    title: "Sign Language Detection and Translation Using Smart Glove",
    venue: "Innovative Computing and Communications · ICICC 2024",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-3591-4_41",
  },
  {
    title: "Vitamin D Analysis for Sustainable Healthcare in Inner London Borough",
    venue: "Computational Intelligence",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/coin.70050",
  },
  {
    title: "Sign Language Detection and Translation Using Smart Glove 2.0 Using Hybrid CNN-Transformer Model",
    venue: "Proceedings of Data Analytics and Management · ICDAM 2025",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-02831-0_4",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("portfolio-theme")
    if (saved === "dark" || saved === "light") return saved
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  })
  const [activeProject, setActiveProject] = useState<Project | undefined>(() => projects.find(project => window.location.hash === `#/projects/${project.slug}`))
  const [formStatus, setFormStatus] = useState("")

  const closeMenu = () => setMenuOpen(false)

  const toggleTheme = () => setTheme(current => current === "dark" ? "light" : "dark")

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get("company")) {
      event.preventDefault()
      setFormStatus("Thanks - your message has been received.")
      return
    }
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
    if (!endpoint) {
      event.preventDefault()
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`)
      const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`)
      window.location.href = `mailto:sunilamaharjan.2022@gmail.com?subject=${subject}&body=${body}`
      setFormStatus("Your email app should now be open with the message ready to send.")
    }
  }

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    const updateRoute = () => {
      const project = projects.find(item => window.location.hash === `#/projects/${item.slug}`)
      setActiveProject(project)
      if (project) {
        window.scrollTo(0, 0)
      } else if (/^#[A-Za-z][\w-]*$/.test(window.location.hash)) {
        window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 0)
      }
    }
    window.addEventListener("hashchange", updateRoute)
    return () => window.removeEventListener("hashchange", updateRoute)
  }, [])

  useEffect(() => {
    if (activeProject) return
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(.hero)"))
    sections.forEach(section => section.classList.add("reveal"))
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
        observer.unobserve(entry.target)
      }
    }), { threshold: .08, rootMargin: "0px 0px -40px" })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [activeProject])

  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    if (!domain || document.querySelector("script[data-portfolio-analytics]")) return
    const script = document.createElement("script")
    script.defer = true
    script.dataset.domain = domain
    script.dataset.portfolioAnalytics = "true"
    script.src = "https://plausible.io/js/script.js"
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  if (activeProject) return <ProjectDetail project={activeProject} theme={theme} onToggleTheme={toggleTheme} />

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SM</span>
          <span>Sunila Maharjan</span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#publications" onClick={closeMenu}>Research</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse-dot" /> SOFTWARE ENGINEER · AI & DATA</p>
            <h1>Software engineering with <span>intelligence</span> and purpose.</h1>
            <p className="hero-text">
              I'm Sunila, a Software Engineer and AI-focused developer with 3+ years of professional
              development experience and an MSc in Artificial Intelligence with Distinction.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <Icon name="arrow" size={18} /></a>
              <a className="button secondary" href="/Sunila-Maharjan-CV.pdf" download>Download CV <Icon name="download" size={17} /></a>
            </div>
            <div className="hero-meta">
              <span>Cockermouth, Cumbria, UK</span>
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
              <div className="stat"><strong>3</strong><span>Research publications</span></div>
              <div className="stat"><strong>1st</strong><span>Best Presentation · Research Conference 2024</span></div>
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
              <p className="eyebrow">04 · PROJECT PORTFOLIO</p>
              <h2>Projects with a <em>purpose</em>.</h2>
            </div>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <a className={`project-card ${project.accent}`} href={`#/projects/${project.slug}`} key={project.title} aria-label={`Read the ${project.title} case study`}>
                <div className="project-top"><span>{project.number}</span><Icon name="code" size={18} /></div>
                <p className="project-category">{project.category}</p>
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-outcome">{project.outcome}</p>
                <div className="chips">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
                <span className="project-link">Read case study <Icon name="arrow" size={16} /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="publications" className="section publications-section">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">05 · RESEARCH & RECOGNITION</p>
              <h2>Work that reached <em>beyond</em> the build.</h2>
            </div>
            <div className="achievement"><Icon name="award" /><span><strong>First Place</strong> · Best Presentation<br />Student & Staff Research Conference 2024</span></div>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-item" key={publication.title}>
                <div className="publication-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="publication-icon"><Icon name="publication" /></div>
                <div>
                  <h3><a href={publication.url} target="_blank" rel="noreferrer">{publication.title} <Icon name="external" size={15} /></a></h3>
                  <p>{publication.venue}</p>
                </div>
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
            <p className="eyebrow">06 · CONTACT</p>
            <h2>Have a problem worth <em>building</em>?</h2>
            <p>I'm interested in software engineering, AI, data and product-focused opportunities where I can keep learning while creating useful things.</p>
            <form className="contact-form" onSubmit={submitContact} action={import.meta.env.VITE_CONTACT_FORM_ENDPOINT || undefined} method="POST">
              <div className="form-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
              <label>Message<textarea name="message" rows={5} required /></label>
              <label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
              <div className="contact-actions"><button className="button primary" type="submit">Send message <Icon name="mail" size={18} /></button><a className="button secondary" href="/Sunila-Maharjan-CV.pdf" download>Download CV <Icon name="download" size={17} /></a></div>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            </form>
            <div className="socials">
              <a href="https://www.linkedin.com/in/sunilamaharjan/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              <a href="https://github.com/sum0609" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
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
