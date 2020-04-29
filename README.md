# nest api sample

一式やってみる

## 使い方

### DB

```
docker network create nest-sample

cd ./infrastructure/docker

docker-compose up -d
```

### API

```
npm run start
```

### SMPLE

```
curl -X POST http://localhost:3001/user/create
```
