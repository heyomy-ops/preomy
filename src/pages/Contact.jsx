import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content animate-fadeInUp">
            <span className="section-badge">Get In Touch</span>
            <h1>Let's Create Something Beautiful Together</h1>
            <p>
              Have a question or ready to start your project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section bg-white">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper animate-fadeInUp">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {isSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="city">City *</label>
                      <select
                        id="city"
                        name="city"
                        className="form-select"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your city</option>
                        <option value="raipur">Raipur</option>
                        <option value="bilaspur">Bilaspur</option>
                        <option value="korba">Korba</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="full-home">Full Home Interiors</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobes</option>
                      <option value="turnkey">Turnkey Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-gold btn-lg w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info animate-fadeInUp stagger-2">
              <div className="info-card">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li>
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">Phone</span>
                      <a href="tel:+919876543210" className="info-value">+91 98765 43210</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">Email</span>
                      <a href="mailto:hello@preomy.in" className="info-value">hello@preomy.in</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon whatsapp">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">WhatsApp</span>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="info-value">Chat with us</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Business Hours</h3>
                <ul className="hours-list">
                  <li>
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Visit Our Experience Center</h3>
                <p className="address">
                  PREOMY Design Studio<br />
                  Raipur, Bilaspur, Korba<br />
                  Chhattisgarh
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <p>Interactive Map</p>
            <span>Google Maps integration</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
