# Youth Center Backend

A backend application for a Komarno Youth Center website built with **Express.js** and **Supabase**. The project provides a REST API for managing events and includes a simple admin dashboard for content management.

The application stores information about upcoming and past events in a Supabase PostgreSQL database, while event images are stored in Supabase Storage. Administrators can securely manage content through a protected web interface using Supabase Authentication.

## Features

- REST API for managing events
- CRUD operations for upcoming and past events
- Secure authentication using Supabase Auth
- Protected admin dashboard
- Event image upload to Supabase Storage
- Preview events before publishing
- Separation of business logic using a layered architecture
- Environment-based configuration

---

# Tech Stack

- Express.js
- Node.js
- Supabase PostgreSQL
- Supabase Storage
- Supabase Authentication
- EJS
- JavaScript

---

# Architecture

The project follows a layered architecture to keep responsibilities separated and make the codebase easier to maintain.

```text
   Client
      │
   Routes
      │
   Controllers
      │
   Services
      │
   Database
```

### Responsibilities

- **Routes** – define API endpoints.
- **Controllers** – handle HTTP requests and responses.
- **Services** – contain business logic.
- **Database** – communication with Supabase.
- **Middleware** – authentication and request processing.
- **Views** – EJS templates for the admin interface.

---

# Project Structure

```text
src/
├── controllers/
├── database/
├── middleware/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── services/
├── utils/
├── views/
├── server.js
```

---

# Authentication

The admin interface is protected using **Supabase Authentication**.

A middleware checks whether the current user has an active session before allowing access to protected pages.

```javascript
export const requireAuthRedirect = async (req, res, next) => {
    const { data, error } = await supabase.auth.getSession();

    if (data.session && !error) {
        next();
    } else {
        res.redirect("/view/login");
    }
};
```

---

# Admin Dashboard

The application includes a lightweight admin panel built with **EJS**.

Authenticated users can:

- create events
- edit existing events
- delete events
- upload event images
- preview how events will appear on the public website

---

# Image Storage

Images are uploaded to **Supabase Storage**.

Current implementation:

- filenames are generated using `Date.now()`
- no image optimization or compression
- images are stored in separate folders

---

# API Endpoints

## View

| Method | Endpoint |
|---------|----------|
| GET | `/view/` |
| GET | `/view/login` |
| GET | `/view/newevents` |
| GET | `/view/pastevents` |

## User

| Method | Endpoint |
|---------|----------|
| POST | `/user/login` |
| POST | `/user/logout` |
| GET | `/user/` |

## Images

| Method | Endpoint |
|---------|----------|
| GET | `/images/geturl/:folder/:path` |
| GET | `/images/geturl/:folder` |
| POST | `/images/upload/:folder` |

## Events

CRUD operations are available for:

- `/newevents`
- `/pastevents`

---

# Environment Variables

Example:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_key
```

---

# Getting Started

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# Future Improvements

- Global error handling
- Request logging
- Input validation
- Image optimization before upload
- Unit and integration tests
- Docker support
- Deployment on Railway

---

# Purpose

This project was developed as part of my backend portfolio. It demonstrates building an Express.js application using a layered architecture, Supabase services, authentication, file storage, and a server-rendered admin dashboard.