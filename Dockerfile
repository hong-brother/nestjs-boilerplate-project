FROM node:18-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
RUN yarn

COPY --chown=node:node . .
RUN yarn build

# ---

FROM node:18-alpine

RUN apk add --no-cache tini

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/app.js"]