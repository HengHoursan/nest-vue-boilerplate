# nest-vue-boilerplate

A clean, production-ready **NestJS + Vue 3** boilerplate with **Role-Based Access Control (RBAC)** — authentication, authorization, user management, and role/permission management out of the box.

## Tech Stack

| Layer    | Technology                                          |
|----------|-----------------------------------------------------|
| Backend  | NestJS 11, TypeORM, PostgreSQL, JWT, Passport       |
| Frontend | Vue 3, Vite, PrimeVue 4 (Aura Theme), Pinia, Vue Router |
| Styling  | PrimeVue components + Tailwind CSS (utilities only) |
| Auth     | JWT Access + Refresh Token, Token Blacklist         |

## Project Structure

```
nest-vue-boilerplate/
├── api/          # NestJS backend
└── web/          # Vue 3 frontend
```

## Features

### Backend (`api/`)
- ✅ JWT Authentication (Access Token + Refresh Token)
- ✅ Role-Based Access Control (RBAC)
- ✅ User Management (CRUD, soft delete, status toggle)
- ✅ Role & Permission Management
- ✅ Password change + force-reset on first login
- ✅ Cloudinary image upload
- ✅ Activity Log
- ✅ Swagger API docs
- ✅ Database seeding (roles, permissions, admin user)

### Frontend (`web/`)
- ✅ Login & Register pages
- ✅ Protected routes with permission directives (`v-permission`)
- ✅ User management (list, create, edit)
- ✅ Role & Permission assignment UI
- ✅ Profile & Security settings
- ✅ Dark / Light mode toggle
- ✅ Multilingual support (English + Khmer)
- ✅ PrimeVue component library (no custom components needed)

## Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL

### Backend Setup

```bash
cd api
cp .env.example .env
# Fill in your DB credentials, JWT secrets, Cloudinary keys
npm install
npm run start:dev
```

Run database seed (first time only):
```bash
npm run seed
```

### Frontend Setup

```bash
cd web
cp .env.Example .env
# Set VITE_API_BASE_URL=http://localhost:3000/v1/api/
npm install
npm run dev
```

## Default Admin Credentials

After seeding, use these credentials to log in:

| Field    | Value              |
|----------|--------------------|
| Email    | `admin@gmail.com`  |
| Password | `Admin@123`        |

## Environment Variables

### `api/.env`
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=nest_vue_boilerplate
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### `web/.env`
```env
VITE_API_BASE_URL=http://localhost:3000/v1/api/
```

## License

MIT
