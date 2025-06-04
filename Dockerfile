FROM node 

RUN mkdir -p /user/api

WORKDIR /usr/api

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 4006

CMD ["npm", "run", "dev"]