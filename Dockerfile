FROM node:18-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY .env /usr/app/.env
COPY ./ ./

RUN yarn set version stable
RUN yarn install 
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
