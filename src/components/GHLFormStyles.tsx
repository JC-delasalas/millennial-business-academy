import React, { useEffect } from 'react';

const GHLFormStyles: React.FC = () => {
  useEffect(() => {
    // Add Inter font if not already included
    if (!document.getElementById('inter-font')) {
      const fontLink = document.createElement('link');
      fontLink.id = 'inter-font';
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      document.head.appendChild(fontLink);
    }

    // Add form-container class to the main form element
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.classList.add('form-container');
    });

    // Add form-group class to form field containers
    const formGroups = document.querySelectorAll('.form-group, .field-wrapper');
    formGroups.forEach(group => {
      group.classList.add('form-group');
    });

    // Add form-control class to input fields
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], textarea, select');
    inputs.forEach(input => {
      input.classList.add('form-control');
    });

    // Add submit-button class to submit buttons
    const submitButtons = document.querySelectorAll('button[type="submit"], .btn-primary, .submit-button');
    submitButtons.forEach(button => {
      button.classList.add('submit-button');
    });
  }, []);

  return (
    <style jsx global>{`
      /* Form Container */
      .form-container {
        max-width: 100% !important;
        width: 100% !important;
        margin: 0 auto !important;
        font-family: 'Inter', sans-serif !important;
      }

      /* Make form responsive */
      @media (min-width: 768px) {
        .form-container {
          max-width: 650px !important;
        }
      }

      /* Form Fields */
      .form-control {
        background-color: white !important;
        border: 1px solid var(--mba-gray-light) !important;
        border-radius: 8px !important;
        padding: 12px 16px !important;
        font-size: 16px !important;
        transition: all 0.3s ease !important;
        color: var(--mba-dark) !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
      }

      .form-control:focus {
        border-color: var(--mba-teal) !important;
        box-shadow: 0 0 0 3px rgba(77, 207, 217, 0.2) !important;
        outline: none !important;
      }

      /* Form background */
      .form-wrapper, .form-container, form {
        background-color: transparent !important;
      }

      /* PayPal button */
      .paypal-button {
        opacity: 1 !important;
        filter: brightness(1.2) !important;
      }

      /* PayPal button container */
      .paypal-button-container {
        margin-bottom: 30px !important;
        padding-bottom: 20px !important;
      }

      /* Ensure the form has enough space at the bottom */
      .form-container {
        padding-bottom: 50px !important;
      }

      /* Labels */
      label {
        font-weight: 500 !important;
        color: #1A1F2C !important; /* Dark text for better contrast */
        margin-bottom: 6px !important;
        font-size: 14px !important;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.5) !important; /* Add text shadow for better visibility */
      }

      /* Submit Button */
      .btn-primary,
      button[type="submit"],
      .submit-button {
        background: linear-gradient(90deg, var(--mba-teal) 0%, var(--mba-pink) 100%) !important;
        border: none !important;
        border-radius: 9999px !important;
        padding: 12px 24px !important;
        font-weight: 600 !important;
        color: white !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        position: relative !important;
        overflow: hidden !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
        width: 100% !important;
        text-transform: none !important;
        font-size: 16px !important;
      }

      /* Button Hover Effect */
      .btn-primary:hover,
      button[type="submit"]:hover,
      .submit-button:hover {
        opacity: 0.9 !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
      }

      /* Glossy Effect */
      .btn-primary:before,
      button[type="submit"]:before,
      .submit-button:before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 50% !important;
        background: linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%) !important;
        border-radius: 9999px !important;
      }

      /* Glow Effect */
      .btn-primary:after,
      button[type="submit"]:after,
      .submit-button:after {
        content: '' !important;
        position: absolute !important;
        top: -4px !important;
        left: -4px !important;
        right: -4px !important;
        bottom: -4px !important;
        background: linear-gradient(90deg, rgba(77, 207, 217, 0.3) 0%, rgba(210, 76, 142, 0.3) 100%) !important;
        border-radius: 9999px !important;
        filter: blur(8px) !important;
        opacity: 0 !important;
        z-index: -1 !important;
        transition: opacity 0.3s ease !important;
      }

      .btn-primary:hover:after,
      button[type="submit"]:hover:after,
      .submit-button:hover:after {
        opacity: 1 !important;
      }

      /* Checkbox and Radio Styling */
      input[type="checkbox"],
      input[type="radio"] {
        accent-color: var(--mba-teal) !important;
      }

      /* Error Messages */
      .error-message,
      .invalid-feedback {
        color: var(--mba-pink) !important;
        font-size: 12px !important;
        margin-top: 4px !important;
      }

      /* Form Groups - Add spacing between form elements */
      .form-group {
        margin-bottom: 20px !important;
      }

      /* Responsive adjustments for mobile */
      @media (max-width: 767px) {
        .form-control {
          font-size: 16px !important; /* Prevent zoom on mobile */
          padding: 10px 14px !important;
        }

        .btn-primary,
        button[type="submit"],
        .submit-button {
          padding: 12px 20px !important;
          font-size: 16px !important;
        }

        /* Ensure PayPal button is fully visible on mobile */
        .paypal-button-container {
          margin-bottom: 20px !important;
        }

        /* Reduce padding on mobile */
        .form-container {
          padding-bottom: 20px !important;
          padding-top: 10px !important;
        }

        /* Reduce spacing between form elements on mobile */
        .form-group {
          margin-bottom: 15px !important;
        }

        /* Make form more compact on mobile */
        form {
          margin-bottom: 0 !important;
          margin-top: 0 !important;
        }

        /* Adjust body padding */
        body {
          padding-bottom: 20px !important;
          padding-top: 0 !important;
        }

        /* Ensure form fits well on mobile */
        iframe {
          margin-top: 0 !important;
        }

        /* Fix the white space issue by ensuring content fits properly */
        html, body {
          height: auto !important;
          overflow: visible !important;
        }
      }

      /* Additional styles for PayPal section */
      .paypal-buttons {
        margin-bottom: 30px !important;
      }

      /* Ensure the iframe expands to show all content */
      html, body {
        height: auto !important;
        min-height: 100% !important;
        overflow-y: visible !important;
      }
    `}</style>
  );
};

export default GHLFormStyles;
