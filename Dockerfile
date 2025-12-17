# Stage 1: build
FROM node:20-alpine AS builder

ENV PORT=80

# Expose the port the container will listen on
EXPOSE 80

WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .
RUN npm run build

# Stage 2: production
FROM nginx:alpine

# Remove default nginx config so template is used
RUN rm /etc/nginx/conf.d/default.conf

# Copy built site
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .

# Copy nginx template and entrypoint
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Optional lightweight healthcheck for local Docker runs
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- --timeout=2 http://127.0.0.1:80/ >/dev/null || exit 1

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
