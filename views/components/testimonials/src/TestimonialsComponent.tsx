import { useState, useEffect } from 'react';
import { Testimonial } from './types';
import './styles.css';

const TestimonialsComponent = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonials/top');
                if (!response.ok) throw new Error('Failed to fetch testimonials');
                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) return <div className="testimonials-loading">Loading...</div>;
    if (error) return <div className="testimonials-error">Error: {error}</div>;

    return (
        <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-bubble-container">
                    <div className="bubble">
                        <h3>{testimonial.title}</h3>
                        <p>{testimonial.body}</p>
                    </div>
                    <div className="testimonial-avatar">
                        <img
                            src="/assets/img/avatar.png"
                            alt={testimonial.personName}
                            width="56"
                            height="56"
                        />
                    </div>
                    <div className="testimonial-info">
                        <strong>{testimonial.personName}</strong>
                        <span>{testimonial.personCompany}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialsComponent;