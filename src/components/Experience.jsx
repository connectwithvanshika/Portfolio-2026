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



const experiences = [
  {
  title: 'SDE Intern',
  org: '6D Technologies',
  date: 'June 2026 - July 2026',
  desc: 'Worked as a Software Development Engineer Intern in the Development-Messaging team, contributing to software solutions and gaining hands-on experience in enterprise-scale telecom and messaging systems.',
  proof: 'https://drive.google.com/file/d/xxxxx/view'
},
  {
  title: 'HPAIR Delegate & ACONF Participant',
  org: 'Harvard Project for Asian International Relations (HPAIR)',
  date: 'August 2025 – 2026',
  desc: 'Selected as a global delegate for HPAIR Asia 2025, hosted by Harvard University at the University of Tokyo, Japan, and chosen to participate in ACONF 2026, engaging with emerging leaders and policymakers from around the world.',
  proof: 'https://drive.google.com/file/d/xxxxx/view
},
{
  title: 'Youth Assembly Delegate',
  org: 'AFS Youth Assembly — New York University (NYU)',
  date: '2025',
  desc: 'Accepted to attend the AFS Youth Assembly 2025, hosted at New York University (NYU), New York, USA, bringing together young leaders and changemakers from around the world.',
},
{
  title: 'AYIMUN Delegate',
  org: 'Asia World Model United Nations (AYIMUN)',
  date: '2025',
  desc: 'Selected as a delegate for the 18th Asia World Model United Nations (AYIMUN) Conference held in Kuala Lumpur, Malaysia.',
},
{
  title: 'AWMUN Delegate',
  org: 'Asia World Model United Nations (AWMUN)',
  date: '2025',
  desc: 'Selected as a delegate for the 12th Asia World Model United Nations (AWMUN XII) Conference held in Bali, Indonesia.',
},
  {
    title: 'Break The Case Finalist',
    org: 'BITS Pilani, Hyderabad Campus',
    date: 'October 2025',
    desc: "Qualified for the Final Round of Break The Case '25, one of India's premier national case competitions organized by the BITS Hyderabad Consulting Group.",
  },
  {
    title: 'Super Contributor',
    org: 'Hacktoberfest 2025',
    date: '2025',
    desc: 'Contributed significantly to open-source with 16 merged pull requests across various projects.',
  },
  {
    title: 'Paper Presentation Finalist',
    org: 'National Students\' Space Challenge — IIT Kharagpur',
    date: '2025',
    desc: 'Selected as a finalist for the Paper Presentation at the National Students\' Space Challenge (NSSC) organized by IIT Kharagpur.',
  },
  {
    title: 'Certifications',
    org: 'Infosys & Google Cloud Skills Boost',
    date: 'May 2025',
    desc: 'Data Science (Infosys): Core concepts of data science, analysis & visualization. Generative AI (Google Cloud): Fundamentals of generative AI, models, and workflows.',
  },
];

const Experience = () => (
  <section id="experience" className="section exp-section">
    <Marquee text="experience" reverse />

    <div className="container" style={{ marginTop: '5rem' }}>
      <p className="section-label">What I've done</p>
      <h2 className="section-heading">Achievements &amp; Experience</h2>

      <div className="exp-list" role="list">
        {experiences.map((item, i) => (
          <div className="exp-item" key={i} role="listitem" id={`exp-item-${i + 1}`}>
            <div className="exp-left">
              <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="exp-content">
                <h3>{item.title}</h3>
                <h4>{item.org}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
            {item.date && (
              <div className="exp-right">
                <span className="exp-date">{item.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>



  </section>
);

export default Experience;
