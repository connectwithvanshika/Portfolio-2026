import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Giant BG watermark text */}
      <div className="hero-name-bg" aria-hidden="true">VANSHIKA</div>

      <div className="container">
        <div className="hero-wrapper">

          {/* ── Left column ── */}
          <div className="hero-left">
            <p className="hero-label">Available for opportunities</p>

            <h1 className="hero-title">
              <span className="name-line">Vanshika</span>
              <span className="name-line">Yadav</span>
              <span className="role-line">AI/ML Enthusiast &amp; Data Analyst</span>
            </h1>

            <p className="hero-desc">
              Building intelligent AI systems with LLMs, RAG, LangChain &amp; AI Agents.
              Passionate about Analytics, Visualization &amp; AI-Powered Applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" id="hero-view-work-btn" className="btn-primary">
                View My Work <FiArrowRight />
              </a>
              <a href="#contact" id="hero-contact-btn" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/connectwithvanshika" target="_blank" rel="noopener noreferrer" className="social-pill" id="hero-github" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/vanshika-y-a4702a304/" target="_blank" rel="noopener noreferrer" className="social-pill" id="hero-linkedin" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:vanshika.yadav2024@nst.rishihood.edu.in" className="social-pill" id="hero-email" aria-label="Email">
                <FiMail />
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <h3><span>5</span>+</h3>
                <p>ML Projects Shipped</p>
              </div>
              <div className="stat-item">
                <h3><span>16</span></h3>
                <p>Open Source PRs Merged</p>
              </div>
              <div className="stat-item">
                <h3><span>7.7</span></h3>
                <p>GPA at NST</p>
              </div>
            </div>
          </div>

          {/* ── Right column — photo ── */}
          <div className="hero-right">
            <div className="hero-img-wrap">
              {/* VANSHIKA behind the photo */}
              <div className="photo-name-bg" aria-hidden="true">VANSHIKA</div>

              {/* Pink blob background */}
              <div className="hero-photo-blob" aria-hidden="true" />

              {/* Pink corner accent */}
              <div className="hero-photo-accent" aria-hidden="true" />

              {/* Floating tag */}
              <div className="hero-tag" aria-hidden="true">🎓 B.E. in Artificial Intelligence</div>

              {/* The actual photo frame */}
              <div className="hero-photo-frame">
                <img
                  src="/profile.jpg"
                  alt="Vanshika Yadav — AI/ML Enthusiast"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Vanshika+Yadav&size=520&background=e91e8c&color=fff&bold=true&font-size=0.33';
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
