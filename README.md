<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <b>HR Evaluation REST API</b> — a production-ready backend built with
  <a href="https://nestjs.com/" target="_blank">NestJS</a>,
  showcasing authentication, role-based access control, pagination,
  background-ready architecture, Swagger docs, and full Docker support.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-v10-red" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-blue" />
  <img src="https://img.shields.io/badge/Docker-ready-blue" />
  <img src="https://img.shields.io/badge/Swagger-OpenAPI-green" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange" />
</p>

---

## 📌 Description

This project is a **small but real-world SaaS-style backend API** designed as a technical assessment implementation using **NestJS (latest LTS)**.

It demonstrates:

- ✅ JWT authentication (Register & Login)
- ✅ Role-based authorization (Admin / User)
- ✅ CRUD operations for **Evaluations**
- ✅ Pagination on listing endpoints
- ✅ API documentation using **Swagger / OpenAPI**
- ✅ PostgreSQL database with TypeORM
- ✅ Full **Docker + Docker Compose** setup for one-command deployment

---

## 🚀 Tech Stack

- **Framework:** NestJS (v10+)
- **Language:** TypeScript
- **Auth:** JWT + Passport
- **Database:** PostgreSQL 16
- **ORM:** TypeORM
- **Docs:** Swagger (OpenAPI)
- **Containers:** Docker & Docker Compose

---

## ✨ API Features

### Authentication
- `POST /auth/register`
- `POST /auth/login`

### Evaluations (Protected)
- `POST /evaluations`
- `GET /evaluations?page=&limit=` _(paginated)_
- `GET /evaluations/:id`
- `PUT /evaluations/:id`
- `DELETE /evaluations/:id` _(Admin only)_

---

## 🔐 Roles

| Role | Permissions |
|------|--------------|
| **user** | Create, view, update evaluations |
| **admin** | All above + delete records |

---

## 🐳 Run with Docker

### 1️⃣ Environment variables

Create a `.env` file in the project root with **exactly these values**:

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=hr_evaluation_db

JWT_SECRET=super_secret_jwt_key
```
### 2️⃣ Start services
```
docker compose up -d --build
```
This command launches:

NestJS API on port 3000

PostgreSQL database (persisted via Docker volume)

### 📄 Swagger Documentation
Once services are running, access the interactive API documentation:
```
http://127.0.0.1:3000/docs
```
✅ Swagger UI includes:

Auth flow testing

JWT Bearer token support

Full request/response schemas

Pagination parameters

### 🧪 Local (non-Docker) development
Install dependencies
```
npm install
```
Run in dev mode
```
npm run start:dev
```
### 🔧 Build for production
```
npm run build
npm run start:prod
```
### 🏗 Architecture Overview
This backend follows a clean modular structure:

Auth module

JWT authentication

Passport strategy

Users module

Role support

Evaluations module

CRUD & pagination workflows

Common

Guards + decorators (JWT, roles)

Infrastructure

PostgreSQL

Docker compose environment

Swagger documentation

It is designed to be easily extendable to multi-tenancy, background jobs (RabbitMQ), caching (Redis), and microservice architecture if required.

### 🌍 Professional Notes
This project was intentionally built as:

✅ Production-style API (not just demo CRUD)

✅ Clean NestJS module separation

✅ Secure authentication + RBAC

✅ Containerized onboarding for easy CI/CD pipelines

✅ Backend architecture suited for scalable SaaS platforms

### 📜 License
MIT