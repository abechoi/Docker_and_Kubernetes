FROM node:alpine
WORKDIR /app
# cache - to prevent unnecessary package downloads
ADD package*.json .
RUN npm install
ADD . .
CMD node index.js