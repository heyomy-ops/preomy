import { Link } from 'react-router-dom';
import './Process.css';

const steps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'We begin with a detailed discussion to understand your requirements, preferences, and budget. Our design experts visit your space to assess the possibilities.',
    duration: 'Day 1-2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Design & Planning',
    description: 'Based on your inputs, our designers create a comprehensive plan including layout, color schemes, and material recommendations tailored to your lifestyle.',
    duration: 'Day 3-7',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    number: 3,
    title: '3D Visualization',
    description: 'Experience your dream home before it\'s built. Our photorealistic 3D renders let you see exactly how your interiors will look, allowing for refinements.',
    duration: 'Day 8-12',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Material Selection',
    description: 'Visit our experience center to touch and feel the materials. Choose from a wide range of premium finishes, hardware, and accessories for your project.',
    duration: 'Day 13-17',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Execution',
    description: 'Our skilled craftsmen bring your design to life with precision. We manage the entire execution process, ensuring minimal disruption to your daily routine.',
    duration: 'Day 18-40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    number: 6,
    title: 'Handover',
    description: 'After thorough quality checks and final touches, we hand over your beautifully transformed space, ready for you to move in and enjoy.',
    duration: 'Day 45',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
];

const Process = () => {
  return (
    <main className="process-page">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="container">
          <div className="process-hero-content animate-fadeInUp">
            <span className="section-badge">Our Process</span>
            <h1>From Vision to Reality in 45 Days</h1>
            <p>
              Our streamlined process ensures a smooth journey from initial consultation 
              to final handover. Here's how we transform your space.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section process-timeline bg-white">
        <div className="container">
          <div className="timeline">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`timeline-item animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">{step.icon}</div>
                  <span className="timeline-number">{step.number}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-duration">{step.duration}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section guarantees-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Guarantees</span>
            <h2>Promises We Keep</h2>
            <p>Your peace of mind is our priority.</p>
          </div>
          <div className="guarantees-grid">
            <div className="guarantee-card animate-fadeInUp stagger-1">
              <div className="guarantee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4>45-Day Delivery</h4>
              <p>We deliver on time, every time. If we're late, we compensate.</p>
            </div>
            <div className="guarantee-card animate-fadeInUp stagger-2">
              <div className="guarantee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4>10-Year Warranty</h4>
              <p>Long-lasting quality backed by our comprehensive warranty.</p>
            </div>
            <div className="guarantee-card animate-fadeInUp stagger-3">
              <div className="guarantee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h4>No Hidden Costs</h4>
              <p>Transparent pricing with detailed quotes. No surprises.</p>
            </div>
            <div className="guarantee-card animate-fadeInUp stagger-4">
              <div className="guarantee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4>Quality Assured</h4>
              <p>Premium materials from trusted brands, guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fadeInUp">
            <h2>Ready to Start Your Journey?</h2>
            <p>Book your free consultation today and take the first step towards your dream home.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">Get Free Consultation</Link>
              <Link to="/estimator" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Calculate Your Cost
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Process;
