import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'full-home',
    title: 'Full Home Interiors',
    subtitle: 'Complete end-to-end interior solutions',
    description: 'Transform your entire home with our comprehensive interior design service. From living rooms to bedrooms, kitchens to bathrooms—we handle it all with meticulous attention to detail.',
    features: [
      'Complete space planning and layout design',
      'Living room, dining, and bedroom interiors',
      'Custom furniture and storage solutions',
      '3D visualization and virtual walkthrough',
      'Material selection and procurement',
      'End-to-end project management',
    ],
    idealFor: 'Homeowners moving into a new home or looking for a complete makeover of their existing space.',
    startingPrice: '₹8 Lakhs',
    deliveryTime: '45-60 days',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    subtitle: 'Stylish and functional kitchen designs',
    description: 'Create the heart of your home with our premium modular kitchen designs. Combining style with functionality, our kitchens are built to last and designed to inspire.',
    features: [
      'Custom modular kitchen cabinets',
      'Premium countertops (granite, quartz, marble)',
      'Built-in appliances integration',
      'Soft-close hardware and accessories',
      'Chimney, hob, and sink installation',
      'Backsplash and lighting design',
    ],
    idealFor: 'Families who love cooking and entertaining, or anyone looking to upgrade their kitchen space.',
    startingPrice: '₹1.5 Lakhs',
    deliveryTime: '25-35 days',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
        <line x1="12" y1="22" x2="12" y2="7"></line>
      </svg>
    ),
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes',
    subtitle: 'Custom storage solutions',
    description: 'Maximize your storage with our beautifully designed wardrobes. From walk-in closets to sliding door wardrobes, we create storage solutions that fit your lifestyle.',
    features: [
      'Custom-designed layouts',
      'Sliding and hinged door options',
      'Soft-close mechanisms',
      'Internal accessories and organizers',
      'Mirror integrations',
      'Premium finishes and materials',
    ],
    idealFor: 'Anyone looking to organize their belongings with style and efficiency.',
    startingPrice: '₹75,000',
    deliveryTime: '15-20 days',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <path d="M9 8h2"></path>
        <path d="M13 8h2"></path>
      </svg>
    ),
  },
  {
    id: 'turnkey',
    title: 'Turnkey Solutions',
    subtitle: 'From concept to completion',
    description: 'Our turnkey solutions cover everything from civil work to final styling. Move in to a fully-designed, ready-to-live home without any hassle.',
    features: [
      'Complete civil and electrical work',
      'Flooring and painting',
      'Full interior design and execution',
      'Furniture and soft furnishing',
      'Home automation integration',
      'Final styling and decor',
    ],
    idealFor: 'Busy professionals who want a hassle-free, complete home solution.',
    startingPrice: '₹15 Lakhs',
    deliveryTime: '75-90 days',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content animate-fadeInUp">
            <span className="section-badge">Our Services</span>
            <h1>Interior Solutions for Every Need</h1>
            <p>
              From modular kitchens to complete home interiors, we offer a range of 
              services designed to transform your living spaces into beautiful, 
              functional homes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list bg-white">
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-detail-content animate-fadeInUp">
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div>
                    <h2>{service.title}</h2>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-ideal">
                  <h4>Ideal For:</h4>
                  <p>{service.idealFor}</p>
                </div>

                <div className="service-pricing">
                  <div className="pricing-item">
                    <span className="pricing-label">Starting Price</span>
                    <span className="pricing-value">{service.startingPrice}</span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">Delivery Time</span>
                    <span className="pricing-value">{service.deliveryTime}</span>
                  </div>
                </div>

                <div className="service-ctas">
                  <Link to="/estimator" className="btn btn-gold">Calculate Cost</Link>
                  <Link to="/contact" className="btn btn-secondary">Talk to Designer</Link>
                </div>
              </div>
              
              <div className="service-detail-image animate-fadeIn stagger-2">
                <div className="service-image-placeholder" style={{ background: getServiceGradient(index) }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-fadeInUp">
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Our design experts can help you choose the right solution for your home. 
              Book a free consultation today.
            </p>
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

function getServiceGradient(index) {
  const gradients = [
    'linear-gradient(135deg, #E0E0E0, #D0D0D0)',
    'linear-gradient(135deg, #F0F0F0, #E0E0E0)',
    'linear-gradient(135deg, #D8D8D8, #C8C8C8)',
    'linear-gradient(135deg, #E8E8E8, #D0D0D0)',
  ];
  return gradients[index % gradients.length];
}

export default Services;
