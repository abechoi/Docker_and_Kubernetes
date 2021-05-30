<h1 align="center">
How to Containerize Node API
</p>

## 1. Setup

```
npm init
npm i --save express
docker pull node
```

# 2. Create index.js

index.js

```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.json([
    {
      name: "Abe",
      email: "me@abechoi.com",
    },
  ])
);

app.listen(port, () => console.log(`Listening to port:${port}...`));
```

## 3. Run Node API on localhost:3000

```
node index.js
```

## 4. Create Dockerfile at Root Directory

Dockerfile

```
FROM node:latest
WORKDIR /app
# cache - to prevent unnecessary package downloads
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js
```

## 5. Create Image

```
docker build --tag user-service-api:latest .
```

## 6. Create Dockerignore

.dockerignore

```
node_modules
Dockerfile
.git
```

## 7. Test Image

```
docker run -d --name user-api -p 3000:3000 user-service-api:latest
```

<h1 align="center">
How to Reduce Size of Node API
</h1>

## 1. Pull Alpine Linux Containers

```
docker pull node:alpine
```

## 2. Edit Dockerfile: FROM

Dockerfile

```
FROM node:alpine
```

## 3. Rebuild Image

```
docker build -t user-service-api:latest .
```
