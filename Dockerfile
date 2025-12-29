FROM --platform=$BUILDPLATFORM ghcr.io/simonwep/genesis:v1.4.2 AS genesis

FROM --platform=$BUILDPLATFORM node:22-alpine AS frontend

ARG OCULAR_GENESIS_HOST
ARG OCULAR_BUILD_VERSION
ARG OCULAR_BUILD_SHA

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV OCULAR_BUILD_VERSION=${OCULAR_BUILD_VERSION}
ENV OCULAR_BUILD_SHA=${OCULAR_BUILD_SHA}

RUN npx pnpm install --global pnpm@10.11.0
WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
RUN pnpm install --frozen-lockfile

COPY . /app
RUN pnpm run build

FROM caddy:2.11-alpine

WORKDIR /

ARG GENESIS_PORT
ENV GENESIS_PORT=${GENESIS_PORT}

COPY --from=genesis /app/genesis /usr/local/bin/genesis
COPY --from=frontend /app/dist /usr/share/caddy

COPY ./docker/Caddyfile /etc/caddy/Caddyfile
COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:${GENESIS_PORT}/health || exit 1

ENTRYPOINT ["/entrypoint.sh"]
