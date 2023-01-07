FROM nginx:1.22 as base


# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:16.17 as build
# Install all the dependencies

RUN npm install -g @angular/cli@13                                     #cache point

COPY ["angular*.json", "app-build/"]
COPY ["tsconfig*.json", "app-build/"]
COPY ["package*.json", "app-build/"]
RUN cd /app-build && npm install --force                               #cache point

# Set the working directory
WORKDIR /app-build
# Add the source code to app
COPY . .
# Generate the build of the application
RUN npm run build-prod


# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM base as final
# Copy the build output to replace the default nginx contents.
COPY --from=build /app-build/dist /usr/share/nginx/html
