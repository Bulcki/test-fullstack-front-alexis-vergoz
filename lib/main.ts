import { serve } from "../deps.ts";
import { renderFile } from "../deps.ts";
import { getThreeTopTestimonials, testimonials } from "./testimonials.ts";

async function handler(req: Request): Promise<Response> {
  try {
    const url = new URL(req.url);
    console.log(`Request for: ${url.pathname}`);

    if (url.pathname === "/api/testimonials/top") {
      const topTestimonials = getThreeTopTestimonials(testimonials);
      console.log('Sending testimonials:', topTestimonials);
      return new Response(JSON.stringify(topTestimonials), {
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        status: 200,
      });
    }

    if (url.pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif)$/)) {
      try {
        const filePath = `views${url.pathname}`;
        console.log('Trying to read file:', filePath);
        const content = await Deno.readFile(filePath);
        const extension = url.pathname.split('.').pop() || '';
        const mimeTypes: Record<string, string> = {
          'css': 'text/css',
          'js': 'application/javascript',
          'png': 'image/png',
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'svg': 'image/svg+xml',
          'gif': 'image/gif'
        };
        
        const contentType = mimeTypes[extension] || 'application/octet-stream';
        console.log('File served successfully:', url.pathname);
        return new Response(content, {
          headers: { "Content-Type": contentType },
          status: 200,
        });
      } catch (error) {
        console.error(`Error reading file ${url.pathname}:`, error);
        return new Response("File not found", { status: 404 });
      }
    }

    if (url.pathname === "/") {
      const body = await renderFile("views/index.html");
      return new Response(body, {
        headers: { "Content-Type": "text/html" },
        status: 200,
      });
    }

    return new Response("Page not found", { status: 404 });
  } catch (error) {
    console.error('Server error:', error);
    return new Response("Internal server error", { status: 500 });
  }
}

console.log(`🚀 Server running on http://localhost:8000`);
await Deno.serve(handler);