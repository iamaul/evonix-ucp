FROM node:12.16.1-alpine

RUN mkdir -p /evonix-app/client

WORKDIR /evonix-app/client

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
