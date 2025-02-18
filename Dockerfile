FROM node:22 as builder

WORKDIR /usr/src/app

COPY . .

RUN HUSKY_SKIP_INSTALL=true npm install

RUN npm run build

FROM node:22

WORKDIR /usr/app

COPY --from=builder /usr/src/app/dist .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/package-lock.json .
COPY --from=builder /usr/src/app/ecosystem.config.js .

RUN npm ci --only=production --remove-dev
RUN npm install pm2 -g

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
