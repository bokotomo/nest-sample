# nest api sample

[構成２](https://github.com/bokotomo/nest-sample/tree/pattern2/src)

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
curl -X GET http://localhost:3001/users
curl -X GET http://localhost:3001/users/1
curl -X POST http://localhost:3001/users/create -d 'name=boko' -d 'age=11'
```
