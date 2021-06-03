<h1 align="center">
How to Connect Mongo DB and Express Pods
</h1>

## 1. Create a Secret

mongodb-secret.yaml

```
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-secret
type: Opaque
data:
  # echo -n 'username' | base64
  mongo-root-username: dXNlcm5hbWU=
  # echo -n 'password' | base64
  mongo-root-password: cGFzc3dvcmQ=
```

## 2. Create a Deployment

mongo.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb-deployment
  labels:
    app: mongodb
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
        - name: mongodb
          image: mongo
          ports:
            - containerPort: 27017
          env:
            - name: MONGO_INITDB_ROOT_USERNAME
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-username
            - name: MONGO_INITDB_ROOT_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-password

```

## 3. Apply Secret and Deployment

```
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongo.yaml
```
