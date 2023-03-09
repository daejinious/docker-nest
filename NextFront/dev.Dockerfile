FROM node:18-alpine

# Working Directory
WORKDIR /usr/src/app

#Copy dependencies first for effective caching
COPY . .

RUN npm i

CMD ["npm", "start"]
