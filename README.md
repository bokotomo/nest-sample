# nest api sample

nestjs の API のサンプル

## 使い方

### STEP.1 DB

```
cd ./infrastructure/docker

docker-compose up -d

cd ../../
```

### STEP.2 .ENV

```
cd ./env
cp develop.env .env
cp test.env .env.test
cd ../
```

### STEP.3 ceate key

```
cd ./key
ssh-keygen -t rsa -b 4096 -m PEM -f sample_jwt
ssh-keygen -f sample_jwt.pub -e -m pem > sample_jwt.pub_

rm sample_jwt.pub
mv sample_jwt.pub_ sample_jwt.pub

cd ../
```

### STEP.4 RUN API

```
npm run start
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
