import React, { useEffect, useState, useRef } from 'react';
import GHLFormStyles from './GHLFormStyles';

interface BookingEmbedProps {
  className?: string;
  isMobile?: boolean;
}

const BookingEmbed: React.FC<BookingEmbedProps> = ({ className, isMobile = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState('100%');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to adjust iframe height
  const adjustIframeHeight = () => {
    try {
      const iframe = document.getElementById('inline-5rnBslAAkfQvHEw6Bv3V') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        // Get the scroll height of the iframe content
        const height = iframe.contentWindow.document.body.scrollHeight;

        // For mobile, only use the actual content height plus a small padding
        // For desktop, ensure minimum height
        const isMobileView = window.innerWidth < 768;
        if (isMobileView) {
          // On mobile, just use the actual content height plus minimal padding
          setIframeHeight(`${height + 20}px`);
        } else {
          // On desktop, add more padding to ensure PayPal button is visible
          setIframeHeight(`${height + 50}px`);
        }
      }
    } catch (error) {
      console.log('Could not adjust iframe height:', error);
    }
  };

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

    // Set up message listener for iframe communication
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from our iframe
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          // If form is submitted or payment is processed, adjust height
          if (data.type === 'form_submitted' || data.type === 'payment_processed' || data.type === 'form_step_changed') {
            setTimeout(adjustIframeHeight, 300);
          }
        } catch (e) {
          // Not a JSON message, ignore
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Set loading to false after a short delay to ensure iframe has time to load
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Try to inject styles directly into the iframe
      try {
        const iframe = document.getElementById('inline-5rnBslAAkfQvHEw6Bv3V') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          const iframeDocument = iframe.contentWindow.document;

          // Create a style element
          const style = document.createElement('style');
          style.textContent = `
            label { color: #1A1F2C !important; font-weight: bold !important; }
            .form-control { background-color: white !important; border: 1px solid #CDD5DF !important; }
            .paypal-button { opacity: 1 !important; filter: brightness(1.2) !important; }
            body, form { background-color: transparent !important; }
            .paypal-button-container { margin-bottom: 30px !important; }
            body { padding-bottom: 50px !important; }
          `;

          // Append the style to the iframe document
          iframeDocument.head.appendChild(style);

          // Set up mutation observer to detect DOM changes in the iframe
          const observer = new MutationObserver(() => {
            adjustIframeHeight();
          });

          observer.observe(iframeDocument.body, {
            childList: true,
            subtree: true,
            attributes: true
          });

          // Initial height adjustment
          adjustIframeHeight();
        }
      } catch (error) {
        console.log('Could not inject styles into iframe:', error);
      }
    }, 2000);

    // Set up resize handler
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      adjustIframeHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine if we're in mobile view
  const isMobileView = windowWidth < 768;

  return (
    <div
      ref={containerRef}
      className={`booking-embed-container w-full relative ${className}`}
      style={{
        minHeight: isMobileView ? 'auto' : '800px',
        height: isMobileView ? 'auto' : '100%',
        marginTop: isMobileView ? '10px' : '0',
        maxWidth: '100%',
        overflowX: 'hidden'
      }}
    >
      <GHLFormStyles />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-lg">
          <div className="w-8 h-8 border-4 border-mba-teal border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src="https://www.millennialbusinessacademy.net/widget/form/5rnBslAAkfQvHEw6Bv3V"
        style={{
          width: '100%',
          height: iframeHeight,
          border: 'none',
          borderRadius: '8px',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          maxHeight: isMobileView ? '100%' : 'none',
          marginTop: isMobileView ? '5px' : '0',
          maxWidth: '100%',
          overflowX: 'hidden'
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
        data-height="100%"
        data-layout-iframe-id="inline-5rnBslAAkfQvHEw6Bv3V"
        data-form-id="5rnBslAAkfQvHEw6Bv3V"
        title="Start Your Analytics Journey"
        onLoad={() => {
          setIsLoading(false);
          // Adjust height after iframe loads
          setTimeout(adjustIframeHeight, 500);
        }}
      />
    </div>
  );
};

export default BookingEmbed;
