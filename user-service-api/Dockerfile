# use versions on tags to prevent breaking changes
FROM node:16-alpine
WORKDIR /app
# cache - to prevent unnecessary package downloads
ADD package*.json .
RUN npm install
ADD . .
CMD node index.js