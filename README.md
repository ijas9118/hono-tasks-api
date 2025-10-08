[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Hono](https://img.shields.io/badge/Built%20with-Hono-orange?logo=hono&logoColor=white)](https://hono.dev)

# Tasks API

Welcome to the **Tasks API**, a robust and lightweight RESTful API built with [Hono.js](https://hono.dev/) for managing tasks with full CRUD (Create, Read, Update, Delete) functionality.

- This API leverages [Drizzle ORM](https://orm.drizzle.team/) for seamless database interactions with [PostgreSQL](https://www.postgresql.org/), is containerized using [Docker](https://www.docker.com/), and orchestrated with [Docker Compose](https://docs.docker.com/compose/).
- The API is fully documented using [Scalar](https://www.scalar.com/) for an interactive and user-friendly API documentation experience.

<img width="1470" height="837" alt="Scalar API Docs UI" src="https://github.com/user-attachments/assets/3581778a-0e07-4c6c-967d-4ec7dbc96886" />

## 🛠️ Tech Stack

- **Framework**: Hono.js
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose
- **Documentation**: Scalar API
- **Package Manager**: PNPM

## 📋 Prerequisites

To run this project locally, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (v20 or higher, optional for local development outside Docker)
- [PNPM](https://pnpm.io/) (optional, if running without Docker)
- [Git](https://git-scm.com/) (for cloning the repository)

## 🏃‍♂️ Getting Started

Follow these steps to clone and run the Tasks API locally:

### 1. Clone the Repository

```bash
git clone https://github.com/ijas9118/tasks-api.git
cd tasks-api
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory by copying the `.env.example` file and filling in the required variables.

```bash
cp .env.example .env
```

**Note**: Ensure the `DATABASE_URL` matches the PostgreSQL credentials defined in the `docker-compose.yml` file (`POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`).

### 3. Build and Run with Docker Compose

Run the following command to build the Docker images and start the services (PostgreSQL and the Hono.js app):

```bash
docker compose up -d --build
```

This command:

- Builds the API image using the `Dockerfile`.
- Starts the PostgreSQL database and the API in detached mode (`-d`).
- Maps port `8080` for the API and `5432` for PostgreSQL on your local machine.

### 4. Verify the Setup

- **API**: Open your browser or use a tool like [Postman](https://www.postman.com/) or `curl` to access `http://localhost:8080`. You should see the API's root endpoint or a welcome message (depending on your implementation).

- **API Documentation**: Visit `http://localhost:8080/scalar` to explore the interactive API documentation.

### 5. Stop the Services

To stop the running containers:

```bash
docker compose down
```

To also remove the PostgreSQL data volume:

```bash
docker compose down -v
```

## 📚 API Documentation

The API is documented using [Scalar](https://www.scalar.com/), providing an interactive interface to explore endpoints, test requests, and view schemas. Access it at:

```
http://localhost:8080/scalar
```

### Example Endpoints

- **GET /tasks**: Retrieve a list of all tasks.
- **POST /tasks**: Create a new task.
- **GET /tasks/:id**: Retrieve a specific task by ID.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

Refer to the Scalar documentation for detailed request/response formats and examples.

## 📂 Project Structure

```
tasks-api/
├── docker-compose.yaml
├── Dockerfile
├── drizzle.config.ts
├── entrypoint.sh
├── eslint.config.js
├── package.json
├── tsconfig.json
├── .dockerignore
├── .env.example
└── src/
    ├── app.ts                        # Initializes main Hono app & configs
    ├── index.ts                      # Server entry point  
    ├── config/
    │   └── env.ts                 
    ├── db/
    │   ├── index.ts               
    │   └── schema.ts              
    ├── lib/
    │   ├── configure-open-api.ts     # OpenAPI setup
    │   ├── create-app.ts             # Hono app factory
    │   ├── default-hook.ts           # Default middleware hooks
    │   └── types.ts                  # Shared types
    ├── middlewares/
    │   ├── not-found.ts              # 404 handler
    │   ├── on-error.ts               # Error handler
    │   └── pino-logger.ts            # Logger middleware
    ├── routes/
    │   ├── index.routes.ts           # Root routes
    │   └── tasks/
    │       ├── tasks.handlers.ts     # Task logic
    │       ├── tasks.index.ts        # Task module export
    │       └── tasks.routes.ts       # Task endpoints
    └── utils/
        ├── create-error-schema.ts    # Error schema
        ├── create-message-object.ts  # Response messages
        ├── http-status-codes.ts      # HTTP codes
        ├── http-status-phrases.ts    # HTTP phrases
        ├── id-params.ts              # ID param validation
        ├── json-content-required.ts  # JSON body check
        ├── json-content.ts           # JSON parser
        └── not-found-schema.ts       # 404 schema

```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
