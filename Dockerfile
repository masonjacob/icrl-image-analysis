# Stage 1
FROM node:14 as build-stage

WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# Dev Command: For live reload
CMD npm run start

EXPOSE $REACT_DOCKER_PORT

# Prod Command
#RUN npm run build

# Stage 2
# FROM nginx:1.17.0-alpine

# COPY --from=build-stage /frontend/build /usr/share/nginx/html
# EXPOSE $REACT_DOCKER_PORT

# CMD nginx -g 'daemon off;'
