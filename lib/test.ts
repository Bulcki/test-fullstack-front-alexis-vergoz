import { assertEquals, assert } from "https://deno.land/std@0.110.0/testing/asserts.ts";
import { getThreeTopTestimonials, testimonials } from "./testimonials.ts";

Deno.test("getThreeTopTestimonials - Descending order", () => {
    const result = getThreeTopTestimonials(testimonials);
    for (let i = 1; i < result.length; i++) {
        assert(
            result[i - 1].rating >= result[i].rating,
            `The testimonials are not in descending order of position ${i}`
        );
    }
});

Deno.test("getThreeTopTestimonials - Number of testimonials", () => {
    const result = getThreeTopTestimonials(testimonials);
    assertEquals(
        result.length,
        3,
        "The function must return exactly 3 testimonials"
    );
});

Deno.test("getThreeTopTestimonials - Top ratings", () => {
    const result = getThreeTopTestimonials(testimonials);
    const expectedRatings = [5, 4, 3];
    
    result.forEach((testimonial, index) => {
        assertEquals(
            testimonial.rating,
            expectedRatings[index],
            `Testimony on the index ${index} should have a rating of ${expectedRatings[index]}`
        );
    });
});

Deno.test("getThreeTopTestimonials - Empty table", () => {
    const result = getThreeTopTestimonials([]);
    assertEquals(
        result.length,
        0,
        "An empty array should return an empty array"
    );
});

Deno.test("getThreeTopTestimonials - Less than three testimonials", () => {
    const smallTestimonials = testimonials.slice(0, 2);
    const result = getThreeTopTestimonials(smallTestimonials);
    assertEquals(
        result.length,
        2,
        "Should return all testimonials if less than 3 available"
    );
});