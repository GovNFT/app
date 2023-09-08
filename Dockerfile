FROM node:lts-alpine

RUN apk add yarn git

WORKDIR /app
COPY ./ /app

RUN yarn

EXPOSE 5173

CMD ["yarn", "dev", "--host"]
