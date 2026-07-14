const Experience = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">HPAIR Delegate</h3>
                <h4 className="timeline-subtitle">Harvard Project for Asian International Relations</h4>
              </div>
              <span className="timeline-date">August 2025</span>
            </div>
            <p>
              Selected as a global delegate for HPAIR Asia 2025, hosted by Harvard University 
              at the University of Tokyo, Japan.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Break The Case Finalist</h3>
                <h4 className="timeline-subtitle">BITS Pilani, Hyderabad Campus</h4>
              </div>
              <span className="timeline-date">October 2025</span>
            </div>
            <p>
              Qualified for the Final Round of Break The Case '25, one of India's premier national 
              case competitions organized by the BITS Hyderabad Consulting Group.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Super Contributor</h3>
                <h4 className="timeline-subtitle">Hacktoberfest 2025</h4>
              </div>
              <span className="timeline-date">2025</span>
            </div>
            <p>
              Contributed significantly to open-source with 16 merged pull requests across various projects.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Finalist of Paper Presentation</h3>
                <h4 className="timeline-subtitle">IIT Kharagpur</h4>
              </div>
            </div>
            <p>
              Selected as a finalist for the Paper Presentation at the National Students' Space 
              Challenge (NSSC) organized by IIT Kharagpur.
            </p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Certifications</h3>
                <h4 className="timeline-subtitle">Infosys & Google</h4>
              </div>
              <span className="timeline-date">May 2025</span>
            </div>
            <p>
              <strong>Data Science (Infosys):</strong> Learned core concepts of data science, analysis, visualization, and real-world applications.<br/>
              <strong>Generative AI (Google Cloud Skills Boost):</strong> Learned the fundamentals of generative AI, models, and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
