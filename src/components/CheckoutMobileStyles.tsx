import React, { useEffect } from 'react';

const CheckoutMobileStyles: React.FC = () => {
  useEffect(() => {
    // Add mobile-specific styles for the checkout page
    const style = document.createElement('style');
    style.id = 'checkout-mobile-styles';
    style.textContent = `
      /* Fix the extra white space issue on mobile */
      .checkout-page {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        position: relative !important;
      }

      /* Fix the body and html overflow */
      html, body {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
        position: relative !important;
      }

      @media (max-width: 767px) {
        /* Adjust hero section padding for better spacing */
        .checkout-page .hero-section {
          padding-top: 7rem !important;
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Ensure content is properly centered */
        .checkout-page .content-container {
          width: 100% !important;
          max-width: 100% !important;
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }

        /* Fix the grid layout */
        .checkout-page .grid {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      // Clean up the style when component unmounts
      const styleElement = document.getElementById('checkout-mobile-styles');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CheckoutMobileStyles;
