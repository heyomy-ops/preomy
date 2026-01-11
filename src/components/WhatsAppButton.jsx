import './WhatsAppButton.css';

const InstagramButton = () => {
  const instagramUrl = 'https://www.instagram.com/preomy_interior/';

  return (
    <a 
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float instagram-float"
      aria-label="Follow us on Instagram"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"></circle>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle>
      </svg>
      <span className="whatsapp-tooltip">Follow us!</span>
    </a>
  );
};

export default InstagramButton;
