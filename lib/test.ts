import { assertEquals, assert } from "https://deno.land/std@0.110.0/testing/asserts.ts";
import { getThreeTopTestimonials, testimonials } from "./testimonials.ts";

Deno.test("getThreeTopTestimonials - Ordre décroissant", () => {
    const result = getThreeTopTestimonials(testimonials);
    for (let i = 1; i < result.length; i++) {
        assert(
            result[i - 1].rating >= result[i].rating,
            `Les témoignages ne sont pas dans l'ordre décroissant à la position ${i}`
        );
    }
});

Deno.test("getThreeTopTestimonials - Nombre de témoignages", () => {
    const result = getThreeTopTestimonials(testimonials);
    assertEquals(
        result.length,
        3,
        "La fonction doit retourner exactement 3 témoignages"
    );
});

Deno.test("getThreeTopTestimonials - Meilleurs ratings", () => {
    const result = getThreeTopTestimonials(testimonials);
    const expectedRatings = [5, 4, 3];
    
    result.forEach((testimonial, index) => {
        assertEquals(
            testimonial.rating,
            expectedRatings[index],
            `Le témoignage à l'index ${index} devrait avoir un rating de ${expectedRatings[index]}`
        );
    });
});

Deno.test("getThreeTopTestimonials - Tableau vide", () => {
    const result = getThreeTopTestimonials([]);
    assertEquals(
        result.length,
        0,
        "Un tableau vide devrait retourner un tableau vide"
    );
});

Deno.test("getThreeTopTestimonials - Moins de trois témoignages", () => {
    const smallTestimonials = testimonials.slice(0, 2);
    const result = getThreeTopTestimonials(smallTestimonials);
    assertEquals(
        result.length,
        2,
        "Devrait retourner tous les témoignages si moins de 3 disponibles"
    );
});