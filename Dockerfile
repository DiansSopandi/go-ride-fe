# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

COPY . .
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
RUN pnpm build

# Stage 2: Run (Production)
FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app ./

EXPOSE 3000
CMD ["pnpm", "start"]
