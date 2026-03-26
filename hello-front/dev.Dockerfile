FROM node:24

WORKDIR /usr/src/app

COPY . .

RUN npm install

# the extra parameters -- --host are needed
# to expose the development server to be visible outside the Docker network.
CMD ["npm", "run", "dev", "--", "--host"]