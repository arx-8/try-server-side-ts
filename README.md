# Pros/Cons

## Pros

- nest.js is one of the most famous web frameworks ... are you serious?

## Cons

- es decorators is not working.
- requires a large amount of dependence for bundling. something is wrong.
- default nest.js build/bundle is too slow.
- can not bundle = fat docker runtime container.

I would not adopt this framework.

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

## Scripts

### update dependencies

```s
yarn upgrade-interactive
```
