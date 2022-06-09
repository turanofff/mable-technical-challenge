# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.17.1-alpine as builder

WORKDIR /app

COPY src /app/src

COPY [ "angular.json" ,"package.json","package-lock.json",  "tsconfig.json", "tsconfig.app.json", ".browserslistrc", "./"]
# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --configuration=production

# Stage 2: Serve app with nginx server

# # Use official nginx image as the base image
FROM nginx:latest
COPY --from=builder /app/dist/directory-structure /usr/share/nginx/html
COPY [ "nginx.conf", "/etc/nginx/conf.d/default.conf" ]

# Copy the build output to replace the default nginx contents.
# COPY [ "nginx.conf", "/etc/nginx/conf.d/default.conf" ]
