FROM node:12.16.1-alpine

RUN mkdir -p /evonix-app/client

WORKDIR /evonix-app/client

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

CMD serve -s build

EXPOSE 3000