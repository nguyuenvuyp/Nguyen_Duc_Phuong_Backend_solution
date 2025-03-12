# Node.js Resource Management API

## Introduction
This is a **RESTful API** built using **Node.js, Express, and SQLite**.  
It provides CRUD operations to manage **resources** with fields: `name` and `description`.

## Features
- **Create a resource** (`POST /resources`)
- **List all resources** (`GET /resources`)
- **Get a resource by ID** (`GET /resources/:id`)
- **Update a resource** (`PUT /resources/:id`)
- **Delete a resource** (`DELETE /resources/:id`)
- **SQLite database integration**


## Setup Guide
### Install Dependencies
npm install

### Start the Server
npm start
By default, the server runs on http://localhost:3001.

### API Endpoints
➤ Create a Resource
POST /resources
Request Body (JSON):
{
  "name": "Sample Resource",
  "description": "This is a sample resource."
}

Response:
{
  "id": 1,
  "name": "Sample Resource",
  "description": "This is a sample resource."
}

➤ Get All Resources
GET /resources
Response:
[
  { "id": 1, "name": "Sample Resource", "description": "This is a sample resource." }
]

➤ Get a Resource by ID
GET /resources/:id
Response (Success):
{
  "id": 1,
  "name": "Sample Resource",
  "description": "This is a sample resource."
}
Response (Not Found):
{ "message": "Resource not found" }

➤ Update a Resource
PUT /resources/:id
Request Body (JSON):
{
  "name": "Updated Resource",
  "description": "Updated description"
}
Response:
{
  "id": 1,
  "name": "Updated Resource",
  "description": "Updated description"
}

➤ Delete a Resource
DELETE /resources/:id
Response:
{ "message": "Deleted successfully" }


### How It Works
The server initializes the SQLite database (database.db).
Routes are set up using express.Router().
Controllers handle requests, calling corresponding database functions.
SQLite executes queries, storing data persistently.
### Security Considerations
Validate input (name, description should not be empty).
Ensure id is a valid number before querying the database.
Implement authentication for protected operations (not included in this version).
### Improvements
✅ Use a better database like PostgreSQL or MySQL for scalability.
✅ Implement JWT authentication to restrict resource modifications.
✅ Add pagination for listing resources.