import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../lib/sanity';
import './Home.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Raipur',
    text: 'PREOMY transformed our 3BHK into a stunning space. The attention to detail and quality of materials exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Gupta',
    location: 'Bilaspur',
    text: 'Professional team, transparent pricing, and excellent execution. Our modular kitchen is now the highlight of our home. Thank you, PREOMY!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Iyer',
    location: 'Korba',
    text: 'From design to delivery, everything was seamless. The 3D visualization helped us see our dream home before it was built. Wonderful experience!',
    rating: 5,
  },
];

const services = [
  {
    id: 'full-home',
    title: 'Full Home Interiors',
    description: 'Complete end-to-end interior solutions for your entire home, from living rooms to bedrooms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    startingPrice: '₹8 Lakhs',
  },
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    description: 'Stylish, functional modular kitchens designed for the modern Indian home.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
        <line x1="12" y1="22" x2="12" y2="7"></line>
      </svg>
    ),
    startingPrice: '₹1.5 Lakhs',
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes',
    description: 'Custom wardrobes with smart storage solutions tailored to your lifestyle.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <path d="M9 8h2"></path>
        <path d="M13 8h2"></path>
      </svg>
    ),
    startingPrice: '₹75,000',
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    title: '10+ Years Experience',
    description: 'A decade of expertise delivering exceptional interior design projects across Chhattisgarh.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No hidden costs. Get detailed quotes with clear breakdowns before you commit.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    title: 'Premium Materials',
    description: 'We use only the finest materials from trusted brands for lasting quality.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'On-Time Delivery',
    description: '45-day delivery guarantee. We respect your time and deliver as promised.',
  },
];

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch featured projects from Sanity
  useEffect(() => {
    async function fetchProjects() {
      try {
        const sanityProjects = await getProjects();
        if (sanityProjects && sanityProjects.length > 0) {
          const formattedProjects = sanityProjects.slice(0, 6).map((p, index) => ({
            id: p._id || index + 1,
            title: p.title,
            location: p.location,
            style: p.style,
            area: p.area,
            category: p.category,
            image: p.images && p.images[0], // Use first image as cover
          }));
          setProjects(formattedProjects);
        }
      } catch (error) {
        console.log('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <main className="home-page">
      {/* Fullscreen Hero Section */}
      <section className="hero-fullscreen">
        {/* Background Image */}
        <div className="hero-bg-fullscreen">
          <div 
            className="hero-bg-image" 
            style={{ backgroundImage: 'url(/images/hero-fullscreen.png)' }}
          ></div>
          {/* Gradient Overlay */}
          <div className="hero-overlay"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container hero-content-fullscreen">
          <div className="hero-text-fullscreen animate-fadeInUp">
            <h1 className="hero-title-fullscreen">
              Timeless Interiors for Modern Living
            </h1>
            <p className="hero-subtext-fullscreen">
              Creating beautiful spaces that blend functionality with aesthetics. 
              Transform your house into a home you'll love coming back to.
            </p>
            <div className="hero-ctas-fullscreen">
              <Link to="/contact" className="btn-hero-primary">
                Get Free Consultation
              </Link>
              <Link to="/estimator" className="btn-hero-secondary">
                Calculate Your Cost
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="hero-trust-fullscreen">
              <div className="trust-stat">
                <span className="trust-number-fullscreen">300+</span>
                <span className="trust-label-fullscreen">Happy Homes</span>
              </div>
              <div className="trust-divider-fullscreen"></div>
              <div className="trust-stat">
                <span className="trust-number-fullscreen">10+</span>
                <span className="trust-label-fullscreen">Years Experience</span>
              </div>
              <div className="trust-divider-fullscreen"></div>
              <div className="trust-stat">
                <span className="trust-number-fullscreen">3</span>
                <span className="trust-label-fullscreen">Cities</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator-fullscreen">
          <span>Scroll to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>What We Offer</h2>
            <p>Comprehensive interior design solutions tailored to your unique style and budget.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span className="service-price">Starting at {service.startingPrice}</span>
                  <Link to="/estimator" className="service-link">
                    Get Quote
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-section">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <span className="section-badge">Why Choose Us</span>
              <h2>Interiors That Reflect Your Personality</h2>
              <p>
                At PREOMY, we believe every home tells a story. Our design philosophy combines 
                aesthetics with functionality, creating spaces that are not just beautiful but 
                truly livable. With a decade of experience and hundreds of happy homeowners, 
                we bring your vision to life with precision and care.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="why-features">
              {whyChooseUs.map((feature, index) => (
                <div 
                  key={index} 
                  className={`why-feature animate-fadeInUp stagger-${index + 1}`}
                >
                  <div className="why-feature-icon">{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {projects.length > 0 && (
      <section className="section projects-section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Portfolio</span>
            <h2>Featured Projects</h2>
            <p>Explore our latest interior design projects and get inspired for your own home.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card animate-fadeInUp stagger-${(index % 3) + 1}`}
              >
                <div 
                  className="project-image" 
                  style={project.image 
                    ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { backgroundColor: getProjectColor(index) }
                  }
                >
                  <div className="project-overlay">
                    <span className="project-category">{project.category.toUpperCase()}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <div className="project-meta">
                    <span>{project.location}</span>
                    <span className="meta-dot">•</span>
                    <span>{project.area}</span>
                    <span className="meta-dot">•</span>
                    <span>{project.style}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/portfolio" className="btn btn-secondary">View All Projects</Link>
          </div>
        </div>
      </section>
      )}

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Real stories from homeowners who trusted PREOMY with their dream interiors.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card animate-fadeInUp stagger-${index + 1}`}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fadeInUp">
            <h2>Ready to Transform Your Home?</h2>
            <p>
              Book a free consultation with our design experts and get a personalized 
              quote for your dream interior.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">Book Free Consultation</Link>
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

// Helper function to generate project colors
function getProjectColor(index) {
  const colors = [
    '#E0E0E0',
    '#D0D0D0',
    '#F0F0F0',
    '#C8C8C8',
    '#E8E8E8',
    '#D8D8D8',
  ];
  return colors[index % colors.length];
}

export default Home;
