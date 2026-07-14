import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/bi';
import { MdOutlineAnalytics, MdEmail, MdOutlineFlightTakeoff, MdHealthAndSafety } from 'react-icons/md';

/* Pixel text marquee — uses monospace CSS font */
const PixelMarquee = () => (
  <div className="pixel-marquee-wrap" aria-hidden="true">
    <div className="pixel-marquee-track">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="pixel-marquee-item">
          &lt;PROJECTS/&gt;<span className="pixel-dot">_</span>
        </span>
      ))}
    </div>
  </div>
);

const Marquee = ({ text, count = 6, reverse = false }) => (
  <div className="marquee-section" aria-hidden="true">
    <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="marquee-word">
          {text}<span className="marquee-dot"> .</span>{' '}
        </span>
      ))}
    </div>
  </div>
);

const projects = [
  {
    title: 'Loan Approval Prediction System',
    description: 'Built and deployed an interactive ML web app to predict loan approval based on applicant financial data. Achieved ~83% model accuracy.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Logistic Regression'],
    github: '#',
    demo: '#',
    icon: <BiNetworkChart />,
  },
  {
    title: 'Customer Churn & Retention Strategy',
    description: 'ML-based churn prediction system with 81% recall on a dataset with 7,000+ records using XGBoost and optimized classification thresholds.',
    tech: ['Python', 'XGBoost', 'Decision Tree', 'Streamlit'],
    github: '#',
    demo: '#',
    icon: <MdOutlineAnalytics />,
  },
  {
    title: 'Email Responder AI Agent',
    description: 'AI-powered email responder using n8n for workflow automation to classify incoming emails using intelligent NLP-based classification.',
    tech: ['n8n', 'NLP', 'AI Agent', 'Workflow Automation'],
    github: '#',
    demo: '#',
    icon: <MdEmail />,
  },
  {
    title: 'Airline Ticket vs Fuel Costs',
    description: 'End-to-end analytics pipeline integrating 6+ datasets for airline pricing analysis. Interactive Tableau dashboard to visualize KPIs.',
    tech: ['Python', 'Pandas', 'NumPy', 'Tableau'],
    github: '#',
    demo: '#',
    icon: <MdOutlineFlightTakeoff />,
  },
  {
    title: 'COVID-19 Impact on Maternal Health',
    description: 'Analyzed 5,000+ healthcare records to study maternal mental health trends. Built an interactive Google Sheets dashboard for KPI tracking.',
    tech: ['Data Analysis', 'Feature Engineering', 'Google Sheets'],
    github: '#',
    demo: '#',
    icon: <MdHealthAndSafety />,
  },
];

const Projects = () => (
  <section id="projects" className="section projects-section">
    <Marquee text="projects" />

    {/* Pixel-style retro heading band */}
    <PixelMarquee />

    <div className="container" style={{ marginTop: '4rem' }}>
      <p className="section-label">What I've built</p>
      <h2 className="section-heading">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index} id={`project-card-${index + 1}`}>
            <div className="proj-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="proj-icon">{project.icon}</span>
                <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="proj-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} id={`proj-github-${index + 1}`}>
                  <FiGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`} id={`proj-demo-${index + 1}`}>
                  <FiExternalLink />
                </a>
              </div>
            </div>

            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc">{project.description}</p>

            <div className="proj-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
