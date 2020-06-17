FROM node:12.16.1-alpine

RUN mkdir -p /evonix-app/client

WORKDIR /evonix-app/client

COPY . .

RUN npm install && npm run build

CMD ["npm", "start"]