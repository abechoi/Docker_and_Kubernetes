<h1 align="center">
Docker and Kubernetes
</h1>
<p align="center">
Full Course for Beginners
</p>
<p align="center">
By Amigoscode, Techworld with NaNa, and FreeCodeCamp
</p>

# Projects

## 1. /website

- How To Mount Volumes And Share Between Containers
- How to Build a Docker Image

## 2. /user-service-api

- How to Containize Node API
- How to Reduce Size of Node API

## 3. Tags & Versions

- Always add versions to tags to prevent breaking changes.

Dockerfile

```
FROM nginx:1.21.0-alpine
```

Build with version tags

```
docker build -t website:1.21.0-alpine .
```

## 4. Docker Registries

- A highly scabable server side application that stores and lets you distribute Docker images.
- Used in CI/CD pipelines.
- Runs applications.
- Can be private or public with Docker Hub, quay.io, and Amazon ECR.

Sign into Docker Hub

```
docker login
```

Format image names and tags, then push to Docker Hub

```
docker tag abechoi-website:latest abechoi/website:latest
docker tag abechoi-website:1 abechoi/website:1
docket tag abechoi-website:2 abechoi/website:2

docker push abechoi/website:latest
docker push abechoi/website:1
docker push abechoi/website:2

# pulls latest if tag is unspecified
docker pull abechoi/website
```

## 5. Inspect & Logs

```
# returns low-level information on container
docker inspect user-service-api
# ctrl+f to search Cmd for commands
```

```
# returns logs
docker logs user-service-api
# returns logs in real-time.
docker logs -f abechoi-website
```

## Kubernetes

- Orchestration provides high availability, scalability, and disaster recovery.
- Architecture:

  1. Master Node - UI, API, CLI
     a. API Server - Entrypoint to K8S cluster
     b. Controller Manager - Keeps track of cluster events.
     c. Scheduler - Ensures Pods placement.
     d. etcd - Kubernetes backing key-value store and snapshots.
     e. Always have backup Master Nodes.

  2. Virtual Network - Creates a unified machine of nodes.
