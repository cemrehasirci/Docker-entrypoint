FROM node:18

#Labels
LABEL maintrainer "cemre"
LABEL description "Express + PostgreSQL + pgAdmin uygulaması imajı"

WORKDIR /app

COPY package*.json ./
RUN npm install

# Netcat kurulumu
RUN apt-get update && apt-get install -y netcat-openbsd

COPY . .

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "index.js"]
