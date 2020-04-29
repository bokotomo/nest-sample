PATH := ./migrations/
HOST := nest-sample-db
PORT := 3306
DATABSE := dev
USER := root
PASSWORD := dev
DATABASE_URL := 'mysql://${USER}:${PASSWORD}@tcp(${HOST}:${PORT})/${DATABSE}'
EXT := sql
MIGRATE := /go/src/github.com/golang-migrate/migrate/bin/migrate

# コマンド
## make create NAME=create_table_name
.PHONY: create
create:
	${MIGRATE} create -ext ${EXT} -dir ${PATH} ${NAME}

.PHONY: up
up:
	${MIGRATE} -database ${DATABASE_URL} -path ${PATH} up

.PHONY: down
down:
	${MIGRATE} -database ${DATABASE_URL} -path ${PATH} down
