# Build container
FROM node:18.9.0 as builder
WORKDIR /work
COPY . .
RUN yarn install --immutable && \
    yarn build && \
    yarn workspaces focus --all --production

# Runtime container
FROM gcr.io/distroless/nodejs:18

COPY --from=builder /work/dist /dist
COPY --from=builder /work/node_modules /node_modules

CMD ["/dist/index.js"]
