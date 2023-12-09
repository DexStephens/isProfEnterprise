# Use an official Node.js runtime as a base image
FROM --platform=linux/arm64 node

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Set the working directory inside the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the container
COPY backend/package*.json ./

# Install npm-run-all globally
RUN npm install -g npm-run-all

# Set the working directory inside the container
WORKDIR /app
# Copy the rest of the application code to the container
COPY . .

# Install dependencies after copying files
WORKDIR /app/frontend
RUN npm ci

WORKDIR /app/backend
RUN npm ci

# Expose the port that your app will run on
EXPOSE 5173 8080

# Start both frontend and backend using npm-run-all
CMD ["npm", "run", "start:all"]