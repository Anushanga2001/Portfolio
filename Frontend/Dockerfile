# get docker image that include node already
FROM node: 20.11- alpine

# Defibe the folder path
COPY ./ ./

# Terminal command
RUN npm install

# What command to run
CMD ["npm", "run", "dev"]