FROM mhart/alpine-node
WORKDIR /app
# Expose the port 8080
EXPOSE 8080
# Set the default command to run when a container starts
# Install app dependencies
COPY package*.json /app
RUN npm install
# Copy your code in the docker image
COPY . /app
CMD [ "node", "server.js" ]
