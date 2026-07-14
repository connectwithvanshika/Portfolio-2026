const About = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'Machine Learning'],
    tools: ['React', 'Pandas', 'NumPy', 'MySQL', 'Figma', 'Tableau'],
    specialties: ['LLM', 'LangChain', 'RAG', 'GenAI', 'LangGraph', 'NLP', 'n8n']
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I am an AI/ML Enthusiast and Data Analyst currently pursuing a Bachelor of Engineering 
              in Artificial Intelligence at Newton School Of Technology, Rishihood University.
            </p>
            <p>
              I am passionate about creating AI-powered solutions, ranging from machine learning models 
              to agentic systems and analytics pipelines. I have hands-on experience with Python, Pandas, 
              NumPy, React, and various LLM frameworks.
            </p>
            <h3 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Education</h3>
            <ul style={{ color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Bachelor of Engineering (Artificial Intelligence)</strong><br />
                Newton School Of Technology, Rishihood University (2024 - 2028)<br />
                Grade: 7.7/10.0
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>Intermediate (Class XII)</strong><br />
                Vedantic International School (2023 - 2024)<br />
                Grade: 91.0%
              </li>
            </ul>
          </div>
          
          <div className="about-skills">
            <div className="skills-container">
              <div className="skill-category">
                <h4>Languages & Core</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Libraries & Tools</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>AI & Specialized</h4>
                <div className="skill-tags">
                  {skills.specialties.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
