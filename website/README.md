<h1 align="center">
How To Mount Volumes And Share Between Containers
</h1>

## 1. Go to Project Directory

## 2. Run and mount first volume to the current directory.

```
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name website nginx:latest
```

## 3. Run and mount second volume to the current directory

```
docker run -d -p 8081:80 -volumes-from website nginx:latest
```

<h1 align="center">
How to Build a Docker Image
</h1>

## 1. Create Dockerfile at Root Directory

Dockerfile

```
FROM nginx:latest
ADD . /usr/share/nginx/html
```

## 2. Create Image

```
docker build -t website:latest .
```

## 3. Test Image

```
docker run -d -p 8081:80 --name test website:latest
```
