FROM oven/bun:1

WORKDIR /project
RUN apt-get update -y && apt-get install -y openssl
ARG DATABASE_URL

COPY ./bun.lock ./bun.lock
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./packages ./packages
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws

RUN bun install
RUN DATABASE_URL=${DATABASE_URL} bun run db:generate 

EXPOSE 8081

CMD [ "bun", "run", "start:ws" ]