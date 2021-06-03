<h1 align="center">
How to Connect Mongo DB and Express Pods
</h1>

## 1. Create a Secret for Mongo DB

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

## 2. Create a Deployment for Mongo DB

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
            # connects to targetPort
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
---
# Service Configuration
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
spec:
  # selects app to bind to
  selector:
    app: mongodb
  ports:
    - protocol: TCP
      port: 27017
      # connects to containerPort
      targetPort: 27017

```

## 3. Apply Secret and Deployment for Mongo DB

```
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongo.yaml
```

## 4. Create a Config Map for Mongo Express

mongo-configmap.yaml

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb-configmap
data:
  # map to the service
  database_url: mongodb-service
```

## 5. Create a Deployment for Mongo Express

mongo-express.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo-express
  labels:
    app: mongo-express
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo-express
  template:
    metadata:
      labels:
        app: mongo-express
    spec:
      containers:
        - name: mongo-express
          image: mongo-express
          ports:
            - containerPort: 8081
          env:
            - name: ME_CONFIG_MONGODB_ADMINUSERNAME
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-username
            - name: ME_CONFIG_MONGODB_ADMINPASSWORD
              valueFrom:
                secretKeyRef:
                  name: mongodb-secret
                  key: mongo-root-password
            - name: ME_CONFIG_MONGODB_SERVER
              valueFrom:
                configMapKeyRef:
                  name: mongodb-configmap
                  key: database_url
```

## 6. Apply Config Map and Deployment for Mongo Express
