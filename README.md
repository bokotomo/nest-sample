# nest api sample

[構成２。こっちの方が良さそう](https://github.com/bokotomo/nest-sample/tree/pattern2/src)

## 使い方

### DB

```
docker network create nest-sample

cd ./infrastructure/docker

docker-compose up -d
```

### API

```
cd ./env
cp develop.env .env
cp test.env .env.test
cd ../

npm run start
```

### ceate key

```
ssh-keygen -t rsa -b 4096 -m PEM -o name
ssh-keygen -f name.pub -e -m pem > name.pub_
```

### SMPLE

```
curl -X GET http://localhost:3001/users
curl -X GET http://localhost:3001/users/1
curl -X POST http://localhost:3001/users/create -d 'name=boko' -d 'age=11'
```

### test

本当は entity に依存させるべきではないが今回は使ってる。

```
npm run test:e2e
```
