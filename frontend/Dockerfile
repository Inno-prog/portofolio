# Stage 1: Build Angular application
FROM node:20 AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY angular.json ./
COPY tsconfig*.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY ./src ./src
COPY ./public ./public

# Install dependencies
RUN npm install

# Build the Angular application
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular files from build stage
COPY --from=build /app/dist/portofolio/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
