<h1 align="center">
How to Create and Apply a Config File
</h1>

## 1. Create a Kubernetes Configuration File

nginx-deployment.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
# specifications for the deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    # specifications for the pod
    spec:
      containers:
        - name: nginx
          image: nginx:1.21
          ports:
            - containerPort: 80
```

## 2. Deploy the Kubernetes Configuration File

```
kubectl apply -f nginx-deployment.yaml
```

## 3. Delete the Kubernetes Configuration File

```
kubectl delete -f nginx-deployment.yaml
```
