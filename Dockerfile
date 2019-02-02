FROM node:10-alpine

RUN npm install -g yarn

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY components components
COPY pages pages
COPY static static
COPY utils utils
COPY server server

RUN yarn build

EXPOSE 3000

CMD yarn start
