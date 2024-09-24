FROM node:22.8
WORKDIR /app/front

# copy only the package.json
COPY package*.json ./

RUN npm install

# copy the rest of the code
COPY . ./
CMD ["npm", "run", "dev"]