FROM node:18-alpine

# Working Directory
WORKDIR /usr/app

#Copdy dependencies first for effective caching
COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "start:dev"]