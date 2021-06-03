<h1 align="center">
Docker and Kubernetes
</h1>
<p align="center">
Full Course for Beginners
</p>
<p align="center">
By Amigoscode, Techworld with NaNa, and FreeCodeCamp
</p>

# Docker

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

# Kubernetes

Orchestration provides high availability, scalability, and disaster recovery.

## 1. Kubernetes Architecture:

1. Master Node - UI, API, CLI
   a. API Server - Entrypoint to K8S cluster.
   b. Controller Manager - Keeps track of cluster events.
   c. Scheduler - Ensures Pods placement.
   d. etcd - Kubernetes backing key-value store and snapshots.
   e. Always have backup Master Nodes.

2. Virtual Network - Creates a unified machine of nodes.

3. Worker Nodes - Runs tasks assigned by the Master Node.

## 2. Components

1. Pod
   a. Smallest unit of K8s.
   b. Abstration over container.
   c. Usually 1 application per Pod.
   d. IP address per Pod.
   e. New IP address on recreation.

2. Sevice
   a. Permanent IP address.
   b. Lifecycle of Pods and Services is not correlated.
   c. Load balancer.

3. Ingress
   a. Forwards IP address to Services.

4. ConfigMap
   a. External configuration of your application.
   a. Stores database URL.

5. Secret
   a. Used to store secret data, such as credentials in base64 encoded format.

6. Deployment
   a. Blueprint to replicate Pods.
   b. Defines replicas and scalability.
   c. Abstraction of Pods.

7. StatefulSet
   a. Replicates databases, but databases are often hosted outside K8s clusters.

## 3. Volumes

K8s do not manage data persistance, so process the data to be stores locally or remotely.

## 4. Minikube and Kubectl

1. Minikube
   a. A lightweight hybrid node of master and worker.
   b. A single node K8s cluster that runs in Virtual Box.
   c. For testing purposes.

2. Kubectl
   a. Command line tool for Kubernetes.
   b. Creates and destroys Pods.
   c. Creates services.

3. Commands

```
# start minikub with hyperkit as vm driver
minikube start --vm-driver=hyperkit

# returns information about the minikube
minikube status

# returns nodes
kubectl get nodes

# returns pods
kubectl get pods

# returns services
kubectl get services

# returns deployments
kubectl get deployments

# creates a pod using nginx image
kubectl create deployment nginx-depl --image=nginx

# returns logs
kubectl logs nginx-depl-5c8bf76b5b-qj9tc

# returns info about pod
kubectl describe pod nginx-depl-5c8bf76b5b-qj9tc

# access interactive shell
kubectl exec -it mongo-depl-5fd6b7d4b4-wwwtz -- bin/bash
```

## 5. /kubectl-apply

- How to Create and Apply a Config File
