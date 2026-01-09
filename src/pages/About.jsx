import { Link } from 'react-router-dom';
import './About.css';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & Lead Designer',
    bio: 'With 15+ years in luxury interior design, Arjun brings vision and creativity to every project.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Design Director',
    bio: 'Priya specializes in creating harmonious spaces that blend modern aesthetics with Indian sensibilities.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Project Manager',
    bio: 'Rahul ensures every project runs smoothly, on time, and exceeds client expectations.',
  },
  {
    name: 'Anita Desai',
    role: 'Material Specialist',
    bio: 'Anita curates the finest materials from trusted suppliers to ensure lasting quality.',
  },
];

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on materials or craftsmanship. Every detail matters.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    title: 'Client-Centric',
    description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to create smarter, more beautiful spaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'Transparent pricing, honest timelines, and ethical business practices always.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

const cities = [
  { name: 'Mumbai', projects: 150 },
  { name: 'Delhi NCR', projects: 120 },
  { name: 'Bangalore', projects: 100 },
  { name: 'Hyderabad', projects: 80 },
  { name: 'Pune', projects: 50 },
];

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content animate-fadeInUp">
            <span className="section-badge">About PREOMY</span>
            <h1>Crafting Beautiful Spaces Since 2014</h1>
            <p>
              We are a team of passionate designers, craftsmen, and project managers 
              dedicated to transforming houses into homes that reflect your unique personality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section bg-white">
        <div className="container">
          <div className="story-content">
            <div className="story-text animate-fadeInUp">
              <span className="section-badge">Our Story</span>
              <h2>A Journey of Design Excellence</h2>
              <p>
                PREOMY was born from a simple belief: everyone deserves a beautiful home. 
                Founded in 2014 by Arjun Mehta, a visionary designer with a passion for 
                creating spaces that inspire, we started as a small studio in Mumbai with 
                big dreams.
              </p>
              <p>
                Over the past decade, we've grown from a team of three to a family of 50+ 
                talented professionals. What hasn't changed is our commitment to quality, 
                craftsmanship, and client satisfaction. Every project we undertake is 
                treated with the same care and attention to detail, whether it's a cozy 
                apartment or a sprawling villa.
              </p>
              <p>
                Today, PREOMY is recognized as one of India's leading interior design 
                studios, with over 500 happy homes across five major cities. Our journey 
                continues, one beautiful home at a time.
              </p>
            </div>
            <div className="story-stats animate-fadeInUp stagger-2">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Homes Designed</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Cities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-image animate-fadeIn">
              <div className="philosophy-image-placeholder"></div>
            </div>
            <div className="philosophy-text animate-fadeInUp stagger-2">
              <span className="section-badge">Design Philosophy</span>
              <h2>Where Form Meets Function</h2>
              <p>
                At PREOMY, we believe that great design is about more than aesthetics. 
                It's about creating spaces that work for you—spaces that enhance your 
                daily life, reflect your personality, and bring joy to every moment 
                spent at home.
              </p>
              <p>
                Our design philosophy is rooted in three principles:
              </p>
              <ul className="philosophy-list">
                <li>
                  <strong>Personalization:</strong> Every home is unique, and so is 
                  every homeowner. We take the time to understand your lifestyle, 
                  preferences, and dreams.
                </li>
                <li>
                  <strong>Balance:</strong> We strike the perfect balance between 
                  beauty and practicality, creating spaces that are both stunning 
                  and functional.
                </li>
                <li>
                  <strong>Timelessness:</strong> We design for today and tomorrow, 
                  creating interiors that remain elegant and relevant for years to come.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us</h2>
            <p>The principles that guide every decision we make.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`value-card animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2>Meet the Experts</h2>
            <p>Passionate professionals dedicated to creating your dream home.</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`team-card animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>
                <h4>{member.name}</h4>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="section cities-section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Presence</span>
            <h2>Cities We Serve</h2>
            <p>Bringing premium interiors to homes across India.</p>
          </div>
          <div className="cities-grid">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className={`city-card animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="city-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4>{city.name}</h4>
                <span className="city-projects">{city.projects}+ Projects</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fadeInUp">
            <h2>Ready to Work With Us?</h2>
            <p>Schedule a free consultation and let's discuss your dream home.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">Get Free Consultation</Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
