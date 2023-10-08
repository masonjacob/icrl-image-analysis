FROM node:14

WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
# Dev Command: For live reload
CMD npm run dev
# Prod Command:
# CMD npm run start
