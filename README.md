# Pros/Cons

## Pros

- minimum deps. only swc and nodemon.
- no bundle is safety.
- hot reload, minify, source map, debugger, multistage build, jest ... All working.

## Cons

- Hard to read npm-scripts.
- lodash-es is not working (ERR_REQUIRE_ESM)

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

## Scripts

### update dependencies

```s
yarn upgrade-interactive
```
