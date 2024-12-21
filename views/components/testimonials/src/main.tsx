import React from 'react';
import ReactDOM from 'react-dom/client';
import TestimonialsComponent from './TestimonialsComponent';

const init = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    ReactDOM.createRoot(element).render(
      <React.StrictMode>
        <TestimonialsComponent />
      </React.StrictMode>
    );
  } else {
    console.error(`Element with id '${elementId}' not found`);
  }
};

// Exposer explicitement l'initialisation au niveau global
declare global {
  interface Window {
    TestimonialsWidget: {
      init: (elementId: string) => void;
    };
  }
}

window.TestimonialsWidget = { init };