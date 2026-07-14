import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/Bi';
import { MdOutlineAnalytics, MdEmail, MdOutlineFlightTakeoff, MdHealthAndSafety } from 'react-icons/md';

const Projects = () => {
  const projects = [
    {
      title: 'Loan Approval Prediction System',
      description: 'Built and deployed an interactive ML web app to predict loan approval based on applicant financial data. Achieved ~83% model accuracy.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Logistic Regression'],
      github: '#',
      demo: '#',
      icon: <BiNetworkChart />
    },
    {
      title: 'Customer Churn & Retention Strategy',
      description: 'Built an ML-based churn prediction system. Improved churn detection by optimizing classification threshold (81% recall) on a dataset with 7,000+ records.',
      tech: ['Python', 'XGBoost', 'Decision Tree', 'Streamlit'],
      github: '#',
      demo: '#',
      icon: <MdOutlineAnalytics />
    },
    {
      title: 'Email Responder AI Agent',
      description: 'Built an AI-powered email responder using n8n for workflow automation to classify incoming emails using intelligent NLP-based classification.',
      tech: ['n8n', 'NLP', 'AI Agent', 'Workflow Automation'],
      github: '#',
      demo: '#',
      icon: <MdEmail />
    },
    {
      title: 'Airline Ticket vs Fuel Costs',
      description: 'End-to-end analytics pipeline integrating 6+ datasets for airline pricing analysis. Created an interactive Tableau dashboard to visualize KPIs.',
      tech: ['Python', 'Pandas', 'NumPy', 'Tableau'],
      github: '#',
      demo: '#',
      icon: <MdOutlineFlightTakeoff />
    },
    {
      title: 'COVID-19 Impact on Maternal Health',
      description: 'Analyzed 5,000+ healthcare records to study maternal mental health trends. Built an interactive Google Sheets dashboard for KPI tracking.',
      tech: ['Data Analysis', 'Feature Engineering', 'Google Sheets'],
      github: '#',
      demo: '#',
      icon: <MdHealthAndSafety />
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
