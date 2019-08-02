FROM node:10 AS base

WORKDIR /code

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM base

RUN npm run build

CMD [ "node", "./dist/index.js" ]