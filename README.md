# Node.js Backend with MongoDB and Axios

A basic Node.js backend application using Express, MongoDB, and Axios.

## Features

- Express.js server
- MongoDB integration
- Axios for HTTP requests
- CORS enabled
- Basic CRUD operations for User model
- Environment variable configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/nodejs-backend
   PORT=3000
   ```

## Running the Application

Start the server:
```bash
node server.js
```

The server will start on port 3000 (or the port specified in your .env file).

## API Endpoints

### Users
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### External API Example
- `GET /api/external` - Example endpoint using Axios to fetch external data

## Example User Object

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
``` 