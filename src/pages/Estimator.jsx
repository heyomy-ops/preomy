import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Estimator.css';

// Pricing data
const basePrices = {
  'full-home': { essential: 800000, premium: 1200000, luxury: 1800000 },
  'kitchen': { essential: 150000, premium: 250000, luxury: 400000 },
  'wardrobe': { essential: 75000, premium: 120000, luxury: 180000 },
};

const sizeMultipliers = {
  small: 0.8,
  medium: 1,
  large: 1.3,
  'extra-large': 1.6,
};

const layoutMultipliers = {
  straight: 0.9,
  'l-shaped': 1,
  'u-shaped': 1.2,
  parallel: 1.15,
};

const addOnPrices = {
  'tall-units': 25000,
  'soft-close': 15000,
  'accessories': 20000,
  'chimney-hob': 35000,
  'lighting': 30000,
  'handles': 10000,
};

const Estimator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    scope: '',
    layout: '',
    size: '',
    package: '',
    addOns: [],
    name: '',
    phone: '',
    city: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const totalSteps = 7;

  const handleScopeSelect = (scope) => {
    setFormData({ ...formData, scope });
    nextStep();
  };

  const handleLayoutSelect = (layout) => {
    setFormData({ ...formData, layout });
    nextStep();
  };

  const handleSizeSelect = (size) => {
    setFormData({ ...formData, size });
    nextStep();
  };

  const handlePackageSelect = (pkg) => {
    setFormData({ ...formData, package: pkg });
    nextStep();
  };

  const handleAddOnToggle = (addOn) => {
    const newAddOns = formData.addOns.includes(addOn)
      ? formData.addOns.filter(a => a !== addOn)
      : [...formData.addOns, addOn];
    setFormData({ ...formData, addOns: newAddOns });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculatePrice = () => {
    const basePrice = basePrices[formData.scope]?.[formData.package] || 0;
    const sizeMultiplier = sizeMultipliers[formData.size] || 1;
    const layoutMultiplier = layoutMultipliers[formData.layout] || 1;
    
    let addOnsTotal = 0;
    formData.addOns.forEach(addOn => {
      addOnsTotal += addOnPrices[addOn] || 0;
    });

    const totalPrice = (basePrice * sizeMultiplier * layoutMultiplier) + addOnsTotal;
    
    return {
      base: basePrice,
      sizeAdjustment: basePrice * (sizeMultiplier - 1),
      layoutAdjustment: basePrice * (layoutMultiplier - 1),
      addOns: addOnsTotal,
      total: totalPrice,
      min: Math.round(totalPrice * 0.9),
      max: Math.round(totalPrice * 1.1),
    };
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const price = calculatePrice();
    setEstimatedPrice(price);
    nextStep();
  };

  const formatPrice = (price) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>What would you like to design?</h2>
            <p>Select the scope of your interior project.</p>
            <div className="scope-grid">
              <button 
                className={`scope-card ${formData.scope === 'full-home' ? 'selected' : ''}`}
                onClick={() => handleScopeSelect('full-home')}
                style={{ backgroundImage: 'url(/images/scope-full-home.png)' }}
              >
                <div className="scope-overlay"></div>
                <div className="scope-content">
                  <div className="scope-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h3>Full Home</h3>
                  <p>Complete interior for your entire home</p>
                </div>
              </button>
              <button 
                className={`scope-card ${formData.scope === 'kitchen' ? 'selected' : ''}`}
                onClick={() => handleScopeSelect('kitchen')}
                style={{ backgroundImage: 'url(/images/scope-kitchen.png)' }}
              >
                <div className="scope-overlay"></div>
                <div className="scope-content">
                  <div className="scope-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                    </svg>
                  </div>
                  <h3>Modular Kitchen</h3>
                  <p>Stylish and functional kitchen design</p>
                </div>
              </button>
              <button 
                className={`scope-card ${formData.scope === 'wardrobe' ? 'selected' : ''}`}
                onClick={() => handleScopeSelect('wardrobe')}
                style={{ backgroundImage: 'url(/images/scope-wardrobe.png)' }}
              >
                <div className="scope-overlay"></div>
                <div className="scope-content">
                  <div className="scope-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="12" y1="3" x2="12" y2="21"></line>
                      <path d="M9 8h2"></path>
                      <path d="M13 8h2"></path>
                    </svg>
                  </div>
                  <h3>Wardrobe</h3>
                  <p>Custom storage solutions</p>
                </div>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>Select your preferred layout</h2>
            <p>Choose the layout that best suits your space.</p>
            <div className="layout-grid">
              {[
                { id: 'straight', name: 'Straight', desc: 'Single wall kitchen' },
                { id: 'l-shaped', name: 'L-Shaped', desc: 'Corner kitchen layout' },
                { id: 'u-shaped', name: 'U-Shaped', desc: 'Three-wall kitchen' },
                { id: 'parallel', name: 'Parallel', desc: 'Two parallel counters' },
              ].map(layout => (
                <button 
                  key={layout.id}
                  className={`layout-card ${formData.layout === layout.id ? 'selected' : ''}`}
                  onClick={() => handleLayoutSelect(layout.id)}
                >
                  <div className="layout-visual" style={{ background: getLayoutGradient(layout.id) }}></div>
                  <h4>{layout.name}</h4>
                  <p>{layout.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>What's your space size?</h2>
            <p>Select the approximate size of your {formData.scope === 'full-home' ? 'home' : formData.scope}.</p>
            <div className="size-grid">
              {getSizeOptions().map(size => (
                <button 
                  key={size.id}
                  className={`size-card ${formData.size === size.id ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size.id)}
                >
                  <span className="size-range">{size.range}</span>
                  <h4>{size.name}</h4>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>Choose your package</h2>
            <p>Select a package that fits your budget and preferences.</p>
            <div className="package-grid">
              <button 
                className={`package-card ${formData.package === 'essential' ? 'selected' : ''}`}
                onClick={() => handlePackageSelect('essential')}
              >
                <span className="package-badge">Value</span>
                <h3>Essential</h3>
                <p className="package-price">Starting at {formatPrice(basePrices[formData.scope]?.essential || 0)}</p>
                <ul className="package-features">
                  <li>Standard materials</li>
                  <li>Basic hardware</li>
                  <li>Essential accessories</li>
                  <li>45-day delivery</li>
                </ul>
              </button>
              <button 
                className={`package-card popular ${formData.package === 'premium' ? 'selected' : ''}`}
                onClick={() => handlePackageSelect('premium')}
              >
                <span className="package-badge gold">Most Popular</span>
                <h3>Premium</h3>
                <p className="package-price">Starting at {formatPrice(basePrices[formData.scope]?.premium || 0)}</p>
                <ul className="package-features">
                  <li>Premium materials</li>
                  <li>Soft-close hardware</li>
                  <li>Upgraded accessories</li>
                  <li>3D visualization</li>
                  <li>45-day delivery</li>
                </ul>
              </button>
              <button 
                className={`package-card ${formData.package === 'luxury' ? 'selected' : ''}`}
                onClick={() => handlePackageSelect('luxury')}
              >
                <span className="package-badge">Premium</span>
                <h3>Luxury</h3>
                <p className="package-price">Starting at {formatPrice(basePrices[formData.scope]?.luxury || 0)}</p>
                <ul className="package-features">
                  <li>Luxury materials</li>
                  <li>Designer hardware</li>
                  <li>Premium accessories</li>
                  <li>3D visualization</li>
                  <li>Priority support</li>
                  <li>45-day delivery</li>
                </ul>
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>Select add-ons (optional)</h2>
            <p>Enhance your {formData.scope === 'full-home' ? 'home' : formData.scope} with these upgrades.</p>
            <div className="addons-grid">
              {[
                { id: 'tall-units', name: 'Tall Units', price: 25000, desc: 'Floor-to-ceiling storage' },
                { id: 'soft-close', name: 'Soft-Close Hardware', price: 15000, desc: 'Throughout the project' },
                { id: 'accessories', name: 'Premium Accessories', price: 20000, desc: 'Organizers & baskets' },
                { id: 'chimney-hob', name: 'Chimney & Hob', price: 35000, desc: 'Premium brand appliances' },
                { id: 'lighting', name: 'Under-Cabinet Lighting', price: 30000, desc: 'LED strip lighting' },
                { id: 'handles', name: 'Designer Handles', price: 10000, desc: 'Imported handles' },
              ].map(addon => (
                <label 
                  key={addon.id}
                  className={`addon-card ${formData.addOns.includes(addon.id) ? 'selected' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={formData.addOns.includes(addon.id)}
                    onChange={() => handleAddOnToggle(addon.id)}
                  />
                  <div className="addon-content">
                    <div className="addon-header">
                      <h4>{addon.name}</h4>
                      <span className="addon-price">+₹{addon.price.toLocaleString('en-IN')}</span>
                    </div>
                    <p>{addon.desc}</p>
                  </div>
                  <div className="addon-check">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </label>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn btn-gold btn-lg" onClick={nextStep}>Continue</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="step-content animate-fadeInUp">
            <h2>Where should we send your estimate?</h2>
            <p>We'll also connect you with a designer for a free consultation.</p>
            <form onSubmit={handleContactSubmit} className="contact-form-estimator">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your city</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi NCR</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
              </div>
              <button type="submit" className="btn btn-gold btn-lg w-full">
                Get My Estimate
              </button>
            </form>
          </div>
        );

      case 7:
        return (
          <div className="step-content result-step animate-fadeInUp">
            <div className="result-header">
              <div className="result-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2>Your Estimated Price</h2>
              <p>Based on your selections, here's your indicative quote:</p>
            </div>

            <div className="price-display">
              <span className="price-range">
                {formatPrice(estimatedPrice?.min || 0)} - {formatPrice(estimatedPrice?.max || 0)}
              </span>
              <span className="price-note">*Prices are indicative and may vary based on final design</span>
            </div>

            <div className="price-breakdown">
              <h4>Cost Breakdown</h4>
              <ul>
                <li>
                  <span>Base Package ({formData.package})</span>
                  <span>{formatPrice(estimatedPrice?.base || 0)}</span>
                </li>
                {estimatedPrice?.sizeAdjustment !== 0 && (
                  <li>
                    <span>Size Adjustment</span>
                    <span>{estimatedPrice?.sizeAdjustment > 0 ? '+' : ''}{formatPrice(estimatedPrice?.sizeAdjustment || 0)}</span>
                  </li>
                )}
                {estimatedPrice?.layoutAdjustment !== 0 && (
                  <li>
                    <span>Layout Adjustment</span>
                    <span>{estimatedPrice?.layoutAdjustment > 0 ? '+' : ''}{formatPrice(estimatedPrice?.layoutAdjustment || 0)}</span>
                  </li>
                )}
                {estimatedPrice?.addOns > 0 && (
                  <li>
                    <span>Add-ons</span>
                    <span>+{formatPrice(estimatedPrice?.addOns || 0)}</span>
                  </li>
                )}
                <li className="total">
                  <span>Estimated Total</span>
                  <span>{formatPrice(estimatedPrice?.total || 0)}</span>
                </li>
              </ul>
            </div>

            <div className="result-ctas">
              <Link to="/contact" className="btn btn-gold btn-lg">Book Free Consultation</Link>
              <a 
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi PREOMY! I just used your estimator. My estimate was ${formatPrice(estimatedPrice?.total || 0)} for a ${formData.scope} project. I'd like to discuss this further.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Get Quote on WhatsApp
              </a>
            </div>

            <p className="result-disclaimer">
              This estimate is for reference only. Final pricing will be determined after 
              a site visit and detailed design consultation with our team.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const getSizeOptions = () => {
    if (formData.scope === 'full-home') {
      return [
        { id: 'small', name: 'Compact', range: '< 1000 sq.ft' },
        { id: 'medium', name: 'Standard', range: '1000 - 1500 sq.ft' },
        { id: 'large', name: 'Spacious', range: '1500 - 2500 sq.ft' },
        { id: 'extra-large', name: 'Large', range: '> 2500 sq.ft' },
      ];
    } else if (formData.scope === 'kitchen') {
      return [
        { id: 'small', name: 'Compact', range: '< 80 sq.ft' },
        { id: 'medium', name: 'Standard', range: '80 - 120 sq.ft' },
        { id: 'large', name: 'Spacious', range: '120 - 180 sq.ft' },
        { id: 'extra-large', name: 'Large', range: '> 180 sq.ft' },
      ];
    } else {
      return [
        { id: 'small', name: 'Compact', range: '< 50 sq.ft' },
        { id: 'medium', name: 'Standard', range: '50 - 80 sq.ft' },
        { id: 'large', name: 'Spacious', range: '80 - 120 sq.ft' },
        { id: 'extra-large', name: 'Walk-in', range: '> 120 sq.ft' },
      ];
    }
  };

  return (
    <main className="estimator-page">
      <section className="estimator-container">
        <div className="container">
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">Step {currentStep} of {totalSteps}</span>
          </div>

          {/* Step Content */}
          <div className="estimator-card">
            {currentStep > 1 && currentStep < 7 && (
              <button className="back-btn" onClick={prevStep}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back
              </button>
            )}
            {renderStep()}
          </div>
        </div>
      </section>
    </main>
  );
};

function getLayoutGradient(layout) {
  const gradients = {
    straight: 'linear-gradient(135deg, #E0E0E0, #D0D0D0)',
    'l-shaped': 'linear-gradient(135deg, #F0F0F0, #E0E0E0)',
    'u-shaped': 'linear-gradient(135deg, #D8D8D8, #C8C8C8)',
    parallel: 'linear-gradient(135deg, #E8E8E8, #D0D0D0)',
  };
  return gradients[layout] || gradients.straight;
}

export default Estimator;
