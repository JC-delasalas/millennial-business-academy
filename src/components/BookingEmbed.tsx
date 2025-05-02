import React, { useEffect, useState } from 'react';

interface BookingEmbedProps {
  className?: string;
}

const BookingEmbed: React.FC<BookingEmbedProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const scriptId = 'ghl-form-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      // Load the GHL form embed script if it doesn't exist
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.millennialbusinessacademy.net/js/form_embed.js';
      script.async = true;

      // Append the script to the document
      document.body.appendChild(script);
    }

    // Set loading to false after a short delay to ensure iframe has time to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`booking-embed-container w-full h-full relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-lg">
          <div className="w-8 h-8 border-4 border-mba-teal border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src="https://www.millennialbusinessacademy.net/widget/form/5rnBslAAkfQvHEw6Bv3V"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        id="inline-5rnBslAAkfQvHEw6Bv3V"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 6"
        data-height="949"
        data-layout-iframe-id="inline-5rnBslAAkfQvHEw6Bv3V"
        data-form-id="5rnBslAAkfQvHEw6Bv3V"
        title="Start Your Analytics Journey"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default BookingEmbed;
