import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  { id: 1, title: 'Modern Minimalist Villa', location: 'Mumbai', style: 'Minimalist', area: '2800 sq.ft', category: 'villa', description: 'A stunning 4BHK villa with clean lines and natural materials.' },
  { id: 2, title: 'Contemporary L-Kitchen', location: 'Delhi', style: 'Contemporary', area: '180 sq.ft', category: 'kitchen', description: 'An L-shaped modular kitchen with smart storage solutions.' },
  { id: 3, title: 'Scandinavian 2BHK', location: 'Bangalore', style: 'Scandinavian', area: '1100 sq.ft', category: '2bhk', description: 'Light-filled apartment with Nordic-inspired interiors.' },
  { id: 4, title: 'Luxury Walk-in Wardrobe', location: 'Pune', style: 'Luxury', area: '150 sq.ft', category: 'wardrobe', description: 'Custom walk-in closet with island and lighting features.' },
  { id: 5, title: 'Classic 3BHK Home', location: 'Hyderabad', style: 'Classic', area: '1800 sq.ft', category: '3bhk', description: 'Timeless interiors blending tradition with modern comfort.' },
  { id: 6, title: 'Industrial Kitchen', location: 'Mumbai', style: 'Industrial', area: '220 sq.ft', category: 'kitchen', description: 'Open kitchen with exposed elements and bold finishes.' },
  { id: 7, title: 'Compact 2BHK Design', location: 'Pune', style: 'Modern', area: '950 sq.ft', category: '2bhk', description: 'Space-efficient design maximizing every square foot.' },
  { id: 8, title: 'Elegant 3BHK Apartment', location: 'Delhi', style: 'Elegant', area: '2000 sq.ft', category: '3bhk', description: 'Sophisticated interiors with premium finishes throughout.' },
  { id: 9, title: 'Mediterranean Villa', location: 'Bangalore', style: 'Mediterranean', area: '3500 sq.ft', category: 'villa', description: 'Warm, inviting spaces inspired by Mediterranean design.' },
  { id: 10, title: 'U-Shaped Kitchen', location: 'Hyderabad', style: 'Modern', area: '200 sq.ft', category: 'kitchen', description: 'Efficient U-shaped layout with breakfast counter.' },
  { id: 11, title: 'Master Bedroom Suite', location: 'Mumbai', style: 'Contemporary', area: '400 sq.ft', category: '3bhk', description: 'Luxurious master suite with custom wardrobe and seating.' },
  { id: 12, title: 'Sliding Wardrobe Design', location: 'Delhi', style: 'Minimalist', area: '80 sq.ft', category: 'wardrobe', description: 'Sleek sliding wardrobe with mirror and organized interiors.' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: '2bhk', label: '2BHK' },
  { id: '3bhk', label: '3BHK' },
  { id: 'villa', label: 'Villas' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'wardrobe', label: 'Wardrobes' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content animate-fadeInUp">
            <span className="section-badge">Our Portfolio</span>
            <h1>Inspiring Spaces We've Created</h1>
            <p>
              Explore our collection of thoughtfully designed homes. Each project 
              reflects our commitment to quality, aesthetics, and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter bg-white">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat.id}
                className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section portfolio-grid-section bg-white">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`portfolio-card animate-fadeInUp stagger-${(index % 4) + 1}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image" style={{ background: getProjectGradient(project.id) }}>
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.category.toUpperCase()}</span>
                    <div className="portfolio-view">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      View Project
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <div className="portfolio-meta">
                    <span>{project.location}</span>
                    <span className="meta-dot">•</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-image" style={{ background: getProjectGradient(selectedProject.id) }}></div>
            <div className="modal-details">
              <span className="modal-category">{selectedProject.category.toUpperCase()}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{selectedProject.location}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Area</span>
                  <span className="meta-value">{selectedProject.area}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Style</span>
                  <span className="meta-value">{selectedProject.style}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-gold">Get Similar Design</Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fadeInUp">
            <h2>Love What You See?</h2>
            <p>Let's create something beautiful for your home too.</p>
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

function getProjectGradient(id) {
  const gradients = [
    'linear-gradient(135deg, #E0E0E0, #D0D0D0)',
    'linear-gradient(135deg, #F0F0F0, #E0E0E0)',
    'linear-gradient(135deg, #D8D8D8, #C8C8C8)',
    'linear-gradient(135deg, #E8E8E8, #D0D0D0)',
    'linear-gradient(135deg, #D5D5D5, #C0C0C0)',
    'linear-gradient(135deg, #F5F5F5, #E0E0E0)',
  ];
  return gradients[(id - 1) % gradients.length];
}

export default Portfolio;
