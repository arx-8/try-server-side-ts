# Pros/Cons

## Pros

- minimum deps. only parcel and nodemon.
- 1 dist/index.js includes node_modules.

## Cons

- node_modules cannot exec minify
  - package.json / targets.main.minify option is not working.
- nest.js cannot support?
  - In the case of nest.js, there is a dependency that for some reason requires additional installation.
  - In other words, even express.js may hit a case that does not work someday.
- parcel is not support jest
  - should use vitest or something

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
