# Build container
FROM node:18.9.0 as builder
WORKDIR /work
COPY . .
RUN yarn install --frozen-lockfile && \
    yarn build

# Runtime container
FROM gcr.io/distroless/nodejs:18
COPY --from=builder /work/dist /dist

CMD ["/dist/index.js"]
