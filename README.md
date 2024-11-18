# Movie Sales Analysis Application

## Introduction

The Movie Sales Analysis Application is a Node.js web application designed to analyze movie theater sales data. It allows users to find the top-performing theater based on ticket sales for a selected date.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Docker**
- **Docker Compose**

---

## Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/alinapotupchik/movie-research-node.js
   cd movie-research-node.js
   ```
## Environment Setup

The project is containerized using Docker and Docker Compose. Follow the steps below to set up the environment.

**Copy .env File**

```bash
cp .env.example .env
```

**Build and Start the Docker Containers**

```bash
docker-compose up -d --build
```

**Access the Application**

The application should be accessible at http://localhost:3000.

**Database Schema and Data Explanation.**

1.	`theaters`:
* id (Primary Key)
* name (String)
* location (String)
2.	`movies`:
* id (Primary Key)
* title (String)
* genre (String)
3.	`sales`:
* id (Primary Key)
* theater_id (Foreign Key to theaters.id)
* movie_id (Foreign Key to movies.id)
* sold_at (Timestamp)
* amount (Integer)

**Indexes**
* `sales` theater_id references theaters(id) on delete cascade.
* `sales` movie_id references movies(id) on delete cascade.
* `sales` unique index ix_sales_unique_sale on (theater_id, movie_id, sold_at) to prevent duplicate sales entries for the same theater, movie, and date combination.
* `sales` index ix_sale_date on sale_date to improve query performance when filtering by sale date.

Database Dump Files

Sample database dump is provided in the `init.sql` file.
