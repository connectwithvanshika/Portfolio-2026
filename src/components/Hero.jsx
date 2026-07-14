import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <br /><span>Vanshika Yadav</span></h1>
          <h2>AI/ML Enthusiast & Data Analyst</h2>
          <p>
            Building Intelligent AI Systems with LLMs, RAG, LangChain & AI Agents. 
            Passionate about Analytics, Visualization & AI-Powered Applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-container">
            {/* Using a placeholder here. The user will replace this with their actual image */}
            <img src="/profile.jpg" alt="Vanshika Yadav" onError={(e) => {
                e.target.src = 'https://via.placeholder.com/350x450/111111/ffb6c1?text=Vanshika+Yadav';
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
