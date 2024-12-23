(function loadTestimonialsWidget() {
    const script = document.createElement('script');
    script.src = '/testimonials/widget.js';
    script.async = true;
    script.onload = () => {
      window.TestimonialsWidget.init('#testimonials-root');
    };
    document.head.appendChild(script);
  })();