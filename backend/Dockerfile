FROM node:20-alpine
WORKDIR /src
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080
CMD [ "npm","start" ]