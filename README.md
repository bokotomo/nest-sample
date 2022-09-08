# nest api sample

nestjs の API のサンプル

## 使い方

### STEP.1 DB

```
cd ./infrastructure/docker

docker network create nestjs-sample

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

### package

```
npm i -D jest typescript ts-jest @types/jest

npm i -D @nestjs/cli @nestjs/schematics @nestjs/testing @types/express @types/node @types/passport-jwt @types/supertest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard-with-typescript eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard prettier supertest ts-loader ts-node tsconfig-paths

npm i @nestjs/common @nestjs/config @nestjs/core @nestjs/jwt @nestjs/passport @nestjs/platform-express class-transformer class-validator mysql passport passport-jwt reflect-metadata rimraf rxjs typeorm
```
