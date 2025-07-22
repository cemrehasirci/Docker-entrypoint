#Node versiyonunu değiştirmek istersek diye ARG olarak yazdık
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}

#Labels
LABEL maintrainer "cemre"
LABEL description "Express + PostgreSQL + pgAdmin uygulaması imajı"

WORKDIR /app

#COPY sayesinde eğer package*.json dosyaları değişmediyse tekrar install yapmaz
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
