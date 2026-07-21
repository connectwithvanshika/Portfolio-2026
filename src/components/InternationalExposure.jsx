import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaGlobeAmericas, FaTrophy, FaHandshake, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

// Marquee component reused and adjusted for this section
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

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
};

const programs = [
  {
    name: "HPAIR 2025",
    org: "Harvard Project for Asian and International Relations",
    category: "Conference Delegate",
    status: "Selected",
    year: "2025",
    desc: "Selected to participate in one of Asia's leading student leadership conferences, engaging with global policymakers, entrepreneurs, and researchers.",
    icon: <FaMapMarkerAlt />,
    location: "New Delhi, India",
    proof: { label: "View Invitation", url: "https://drive.google.com/file/d/1nq-H-3hH0j3YyAp29uj8fLhatus5GSy-/view?usp=sharing" }
  },
  {
    name: "ACONF 2026",
    org: "ACONF",
    category: "Delegate",
    status: "Selected",
    year: "2026",
    desc: "Chosen to participate in an international innovation and leadership conference alongside students from multiple countries.",
    icon: <FaMapMarkerAlt />,
    location: "Global",
    proof: { label: "View Acceptance", url: "https://drive.google.com/file/d/1W2ll_TvIvAPrECt2Ott8F68iEa7h4NEP/view?usp=sharing" }
  },
  {
    name: "AYIMUN",
    org: "Asian Youth International Model United Nations",
    category: "Delegate",
    status: "Selected",
    year: "2025",
    desc: "Selected as an international delegate to participate in diplomatic discussions and global policy simulations.",
    icon: <FaMapMarkerAlt />,
    location: "Kuala Lumpur, Malaysia",
    proof: { label: "View Certificate", url: "https://drive.google.com/file/d/17B0UCf_z-s-1rDR9Fr9TD9kVMf374Lbn/view?usp=sharing" }
  },
  {
  name: "Asia World Model United Nations (AWMUN XII)",
  org: "Asia World Model United Nations",
  category: "International Conference",
  status: "Selected Delegate",
  year: "2025",
  desc: "Selected as an official delegate for the Asia World Model United Nations (AWMUN XII) Conference in Bali, Indonesia, representing India at an international forum focused on diplomacy, global leadership, policy discussions, and cross-cultural collaboration.",
  icon: <FaMapMarkerAlt />,
  location: "Bali, Indonesia",
  proof: {
    label: "View Acceptance Letter",
    url: "https://drive.google.com/file/d/14EHwr8v_XTpXOC0KZcLAilS5VT6sHCLj/view?usp=sharing"
  }
}
];

const logos = ['HPAIR', 'ACONF', 'AYIMUN', 'Algoverse', 'HPAIR', 'ACONF', 'AYIMUN', 'Algoverse'];

const InternationalExposure = () => {
  return (
    <section id="international-exposure" className="section int-exposure-section">
      <Marquee text="global" />

      <div className="container" style={{ marginTop: '5rem' }}>
        <p className="section-label">International Exposure</p>
        <h2 className="section-heading" style={{ maxWidth: '800px', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          Recognized Globally
        </h2>

        {/* Statistics Section */}
        <div className="int-stats-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="int-stat-item"
          >
            <div className="stat-icon"><FaGlobeAmericas /></div>
            <h3><AnimatedCounter end={4} suffix="+" /></h3>
            <p>International Programs</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="int-stat-item"
          >
            <div className="stat-icon"><FaTrophy /></div>
            <h3><AnimatedCounter end={100} suffix="%" /></h3>
            <p>Selection Rate</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="int-stat-item"
          >
            <div className="stat-icon"><FaHandshake /></div>
            <h3><AnimatedCounter end={15} suffix="+" /></h3>
            <p>Countries Represented</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="int-stat-item"
          >
            <div className="stat-icon"><FaGraduationCap /></div>
            <h3>AI + Global</h3>
            <p>Research & Conferences</p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="int-programs-grid">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="int-card"
            >
              <div className="int-card-glow"></div>
              <div className="int-card-header">
                <div className="int-logo-placeholder">
                  {program.name.charAt(0)}
                </div>
                <div className="int-badge">{program.status}</div>
              </div>
              <div className="int-card-body">
                <h3 className="int-card-title">{program.name}</h3>
                <h4 className="int-card-category">{program.category}</h4>
                <p className="int-card-desc">{program.desc}</p>
              </div>
              <div className="int-card-footer">
                <div className="int-card-meta">
                  <span className="int-location">{program.icon} {program.location}</span>
                  <span className="int-year">{program.year}</span>
                </div>
                <a 
                  href={program.proof.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="int-proof-btn"
                >
                  {program.proof.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* <div className="int-logo-strip-container">
        <div className="int-logo-strip">
          <div className="int-logo-track">
            {logos.map((logo, i) => (
              <div key={i} className="int-strip-logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default InternationalExposure;
