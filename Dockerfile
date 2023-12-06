FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Set environment variables
ENV MONGODB_URI="mongodb://127.0.0.1:27017/MP-database"

CMD ["npm", "start"]
