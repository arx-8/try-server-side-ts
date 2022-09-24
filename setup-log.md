# setup yarn berry

```s
# see vers list: https://github.com/yarnpkg/berry/releases
yarn set version 3.2.3

# set config
yarn config set nodeLinker node-modules
yarn config set defaultSemverRangePrefix ""

# init
yarn init -p -y
yarn
```

# setup nest.js

```s
yarn dlx @nestjs/cli new try-server-side-ts

# merge ./ & ./try-server-side-ts manually ...
```
