# Pros/Cons

## Pros

- Almost the same as express.js.
- minimum deps. only esbuild and nodemon.
- 1 dist/index.js includes node_modules.
- minify, tree shaking, source map, ... All working.

## Cons

- I can't think of any. Best choice for server-side JS.
- `esbuild.BuildOptions.bundle = false` is not working.
  - If this could be done, it might make builds even faster during development.

## Start dev

```sh
# install cli tools via asdf
# (for mac users)
cut -d' ' -f1 .tool-versions | grep "^[^\#]" | xargs -I {} asdf plugin add {}
# (for linux users)
cat .tool-versions | cut -d' ' -f1 | grep "^[^\#]" | xargs -i echo {}

asdf install

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
