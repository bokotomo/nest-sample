# マイグレーション

1つのDBに複数のシステムがアクセスすることを考えてマイグレーションを分けたが、API,BatchごとにDBを持たせるべきなので、やっぱTypeORMで完結させる。  
これは消す。

[typeormのマイグレーション](https://typeorm.io/)は以下の DB に対応しているが、

```
 MySQL / MariaDB / Postgres / CockroachDB / SQLite / Microsoft SQL Server / Oracle / SAP Hana / sql.js
```

[golang-migrate](https://github.com/golang-migrate/migrate)の方がユーザも多く、より多くのDBに対応しているのでこちらを使う。

```
PostgreSQL / Redshift / Ql / Cassandra / SQLite (todo #165) / MySQL / MariaDB / Neo4j / MongoDB / CrateDB (todo #170) / Shell (todo #171) / Google Cloud Spanner / CockroachDB / ClickHouse / Firebird / MS SQL Server
```

## はじめ方

```
docker-compose up -d
docker-compose exec nest-sample-migrate ash
```

```
make create NAME=create_table_name
// マイグレート
make up
// ロールバック
make down
```
