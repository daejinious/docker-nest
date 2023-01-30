FROM node:18-alpine

# Working Directory
WORKDIR /usr/src/app

#Copy dependencies first for effective caching
COPY . .

RUN rm -rf ./node_modules

RUN npm i

RUN npm run build

CMD ["npm", "run", "start:dev"]
