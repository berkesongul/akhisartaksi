# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (leverages caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy code and build
COPY . .
RUN npm run build

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# Custom nginx config to handle Next.js routing (Clean URLs)
RUN echo 'server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    try_files $uri $uri.html $uri/ /index.html; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
