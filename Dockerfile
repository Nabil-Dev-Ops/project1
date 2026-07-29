FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

# Copy SEMUA fail dlm folder projek (termasuk index.html & server.js)
COPY . .

EXPOSE 80

CMD ["node", "server.js"]