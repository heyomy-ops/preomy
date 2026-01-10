import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../lib/sanity';
import './Portfolio.css';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch projects from Sanity CMS
  useEffect(() => {
    async function fetchProjects() {
      try {
        const sanityProjects = await getProjects();
        if (sanityProjects && sanityProjects.length > 0) {
          // Map Sanity data to our format
          const formattedProjects = sanityProjects.map((p, index) => ({
            id: p._id || index + 1,
            title: p.title,
            location: p.location,
            style: p.style,
            area: p.area,
            category: p.category,
            description: p.description,
            images: p.images || [], // Array of images
            image: p.images && p.images[0], // First image as cover
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

  // Reset image index when modal opens
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Navigation for slider
  const nextImage = () => {
    if (selectedProject?.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

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
          {isLoading ? (
            <div className="portfolio-empty">
              <div className="empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Loading Projects...</h3>
            </div>
          ) : projects.length === 0 ? (
            <div className="portfolio-empty">
              <div className="empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3>Projects Coming Soon!</h3>
              <p>We're currently curating our best work. Check back soon to see our stunning portfolio.</p>
              <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
            </div>
          ) : (
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`portfolio-card animate-fadeInUp stagger-${(index % 4) + 1}`}
                onClick={() => openProject(project)}
              >
                <div 
                  className="portfolio-image" 
                  style={project.image 
                    ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { background: getProjectGradient(project.id) }
                  }
                >
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
          )}
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
            <div className="modal-image-wrapper">
              <div 
                className="modal-image" 
                style={selectedProject.images && selectedProject.images[currentImageIndex]
                  ? { backgroundImage: `url(${selectedProject.images[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: getProjectGradient(selectedProject.id) }
                }
              ></div>
              
              {/* Slider Navigation */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <button className="slider-btn slider-prev" onClick={prevImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="slider-btn slider-next" onClick={nextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="slider-dots">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`slider-dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
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
