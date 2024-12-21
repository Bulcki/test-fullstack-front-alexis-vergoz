import React, { useState, useEffect } from 'react';

const TestimonialsComponent = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials/top');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="testimonial-header">
            <div className="avatar">{testimonial.personName[0]}</div>
          </div>
          <h3>{testimonial.title}</h3>
          <p>{testimonial.body}</p>
          <div className="testimonial-footer">
            <div className="author-info">
              <h4>{testimonial.personName}</h4>
              <p>{testimonial.personCompany}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsComponent;