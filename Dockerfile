# Stage 1: Build AstroSphere component
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build:web

# Stage 2: Serve with Vercel (no extra runtime needed)
# Vercel will use the output of `next build`
