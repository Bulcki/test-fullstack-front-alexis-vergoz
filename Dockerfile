FROM denoland/deno:latest

WORKDIR /app

COPY deps.ts deno.json deno.lock ./

RUN deno cache deps.ts

COPY lib/ lib/
COPY views/ views/
COPY Makefile .

EXPOSE 8000

CMD deno test lib/test.ts && deno run --allow-net --allow-read lib/main.ts