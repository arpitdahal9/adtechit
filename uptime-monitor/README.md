# Uptime Monitoring Service

A backend-driven web application that checks the health of websites and alerts users to downtime.

## Features

- User Authentication (JWT)
- Register/Login
- Manage Monitors (Add, Delete, List)
- Automated Background Checks (Configurable interval)
- Check History Logs
- RESTful API

## Tech Stack

- Node.js & Express
- PostgreSQL
- Docker & Docker Compose

## Prerequisites

- Docker and Docker Compose installed.

## Getting Started

1.  **Clone the repository** (if not already).

2.  **Environment Variables**
    The project comes with a `.env` file for local development.
    For Docker, variables are defined in `docker-compose.yml`.

3.  **Run with Docker**

    ```bash
    docker-compose up --build
    ```

    This will start the PostgreSQL database and the Node.js application.

4.  **Initialize Database**

    Once the containers are running, you need to create the tables. Open a new terminal:

    ```bash
    # If running locally with node
    npm run init-db

    # If running with docker-compose, you can run the script inside the container
    docker-compose exec app npm run init-db
    ```

5.  **API Endpoints**

    The server runs on `http://localhost:3000`.

    -   **Auth**
        -   `POST /api/auth/register` - `{ "email": "...", "password": "..." }`
        -   `POST /api/auth/login` - `{ "email": "...", "password": "..." }` -> Returns `{ "token": "..." }`

    -   **Monitors** (Requires Header: `Authorization: Bearer <token>`)
        -   `GET /api/monitors`
        -   `POST /api/monitors` - `{ "url": "https://google.com", "interval": 1 }`
        -   `DELETE /api/monitors/:id`
        -   `GET /api/monitors/:id/logs`

## Deployment

This app is ready to be deployed to Fly.io or any Docker-compatible hosting.
-   **Dockerfile** is included.
-   Ensure you set `DATABASE_URL` and `JWT_SECRET` in your production environment.
