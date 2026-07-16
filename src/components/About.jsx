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

const PixelMarquee = ({ text }) => (
  <div className="pixel-marquee-wrap" aria-hidden="true">
    <div className="pixel-marquee-track">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="pixel-marquee-item">
          &lt;{text}/&gt;<span className="pixel-dot">_</span>
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  const skills = {
    'Languages & Core': ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'Machine Learning'],
    'Libraries & Tools': ['React', 'Pandas', 'NumPy', 'MySQL', 'Figma', 'Tableau'],
    'AI & Specialized': ['LLM', 'LangChain', 'RAG', 'GenAI', 'LangGraph', 'NLP', 'n8n'],
  };

  return (
    <section id="about" className="section about-section">
      {/* Corner crosshairs */}
      <div className="crosshair tl" aria-hidden="true" />
      <div className="crosshair tr" aria-hidden="true" />
      <div className="crosshair bl" aria-hidden="true" />
      <div className="crosshair br" aria-hidden="true" />

      <Marquee text="about" />

       <div style={{ marginTop: '5rem' }}>
        <PixelMarquee text="ABOUT" />
      </div>

      <div className="container" style={{ marginTop: '5rem' }}>
        <p className="section-label">Who I am</p>
        <h2 className="section-heading" style={{ color: '#ffffff' }}>
          My Journey
        </h2>

        <div className="about-grid">
          {/* Left — story + education */}
          <div className="about-text">
            <p>
              I am an AI/ML Enthusiast and Data Analyst currently pursuing a B.Tech
              in Artificial Intelligence at Newton School Of Technology, Rishihood University.
            </p>
            <p>
              I am passionate about creating AI-powered solutions — from machine learning models
              to agentic systems and analytics pipelines. I have hands-on experience with Python,
              Pandas, NumPy, React, and various LLM frameworks.
            </p>

            <h3>Education</h3>

            <div className="edu-list">
              <div className="edu-item">
                <p className="edu-num">01</p>
                <p className="edu-title">Bachelor of Technology — Artificial Intelligence</p>
                <p className="edu-sub">Newton School Of Technology, Rishihood University · 2024-2028 · GPA: 8.2/10</p>
              </div>
              <div className="edu-item">
                <p className="edu-num">02</p>
                <p className="edu-title">Intermediate (Class XII)</p>
                <p className="edu-sub">Vedantic International School · 2023-2024 · 91.0%</p>
              </div>
            </div>
          </div>

          {/* Right — skills */}
          <div className="about-skills">
            {Object.entries(skills).map(([category, list]) => (
              <div className="skills-block" key={category}>
                <p className="skill-category-name">{category}</p>
                <div className="skill-pills">
                  {list.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pixel-style retro heading band at bottom */}
  
    </section>
  );
};

export default About;
