# Pros/Cons

## Pros

- minimum deps. only esbuild and nodemon.
- 1 dist/index.js includes node_modules.
- minify, tree shaking, source map, ... All working.

## Cons

- I can't think of any. Best choice for server-side JS.

## Start dev

```sh
# install cli tools via asdf
# (for mac users)
cut -d' ' -f1 .tool-versions | grep "^[^\#]" | xargs -I {} asdf plugin add {}
# (for linux users)
cat .tool-versions | cut -d' ' -f1 | grep "^[^\#]" | xargs -i echo {}

asdf install

# setup env variables
cp .env.example .env

# install node packages
yarn

# run dev server
yarn dev
```

> **Note**
> If you got the following error message:  
> `⛔ Missing one or more of the following dependencies: tar, gpg`  
> Run the following cmd:  
> `$ brew install gpg`

## Run on Docker

### Run all

```sh
docker-compose -f ./dockerfiles/docker-compose.yml up -d --build

# down
docker-compose -f ./dockerfiles/docker-compose.yml down

# (clean up garbages sometimes)
docker image prune
```

### Run only DB

```sh
docker-compose -f ./dockerfiles/docker-compose.yml up -d db
```

### Connect DB

```sh
mysql -uroot -ptoor -h 127.0.0.1 -P 30002
```

Try:

```sql
show databases;
use app_db;
show tables;
```

## Scripts

### update dependencies

```s
yarn upgrade-interactive
```
