FROM node:10-alpine

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "./dist/index.js" ]