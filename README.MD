# Internship Portal Backend API

RESTful API Backend untuk Sistem Manajemen Portal Magang & Berita berbasis Express.js dan Prisma ORM dengan PostgreSQL.

---

## 🚀 Fitur Utama

- **Autentikasi & Otorisasi**: Login, Register, Logout, dan Refresh Token berbasis JWT & Cookie.
- **Manajemen Role**: Access control multi-role (`public`, `intern`, `admin`).
- **Portal Berita (News)**:
  - CRUD Berita & Kategori.
  - Sistem Moderasi (Pending, Approved, Revised).
  - Interaksi pengguna (Like, Save/Bookmark, Comment).
- **Manajemen Tugas Magang (Tasks & Marks)**: Penugasan task ke pemagang dan pemberian nilai oleh admin.
- **Upload Media**: Pengunggahan dan manajemen gambar menggunakan Multer & Cloudinary.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database & ORM**: PostgreSQL, Prisma ORM
- **Authentication**: JWT (jsonwebtoken), Cookie-parser, Bcrypt
- **File Upload**: Multer, Cloudinary

---

## 📂 Struktur Direktori

```text
intern-be/
├── prisma/
│   ├── schema.prisma       # Skema Database Prisma
│   └── seed.js             # Seeder data awal
├── src/
│   ├── app.js              # Inisialisasi Express & Middleware
│   ├── controllers/        # Logika Bisnis & Handlers
│   ├── lib/                # Konfigurasi Library (Prisma Client, Cloudinary, dll)
│   ├── middlewares/        # Auth & Role-based Middlewares
│   ├── models/             # Query / Model helper
│   ├── routes/             # Endpoints API (auth, news, public, intern, admin)
│   └── utils/              # Utility & Helper Functions
├── server.js               # Entry point utama aplikasi
├── swagger.json            # Spesifikasi OpenAPI / Swagger Docs
├── Docs-dev.MD             # Catatan pengembangan backend
└── package.json            # Dependencies & Scripts NPM
```

---

## ⚙️ Persyaratan Sistem & Instalasi

### 1. Prerequisites
- Node.js (v18+ direkomendasikan)
- PostgreSQL Database

### 2. Cloning & Install Dependencies
```bash
git clone <repository-url>
cd intern-be
npm install
```

### 3. Konfigurasi Environment (`.env`)
Buat file `.env` di root direktori dan sesuaikan variabel berikut:

```env
PORT=8080
CLIENT_URL=http://localhost:3000
DATABASE_URL="postgresql://postgres:password@localhost:5432/intern_db?schema=public"

JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_token_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🗄️ Database Setup (Prisma)

1. **Jalankan Migrasi Database**:
   ```bash
   npm run migrate
   ```

2. **Jalankan Seeder (Opsional)**:
   ```bash
   npm run seed
   ```

3. **Reset Database (Jika diperlukan)**:
   ```bash
   npm run reset
   ```

---

## 🚦 Menjalankan Aplikasi

- **Mode Pengembang (Development with Nodemon)**:
  ```bash
  npm run dev
  ```
  Server akan berjalan di `http://localhost:8080`.

- **Mode Produksi**:
  ```bash
  node server.js
  ```

---

## 📖 Dokumentasi API (Swagger UI)

Dokumentasi interaktif OpenAPI / Swagger dapat diakses secara langsung melalui browser saat server berjalan:

- **Swagger UI**: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)
- **OpenAPI Specification File**: [swagger.json](file:///D:/@Magang/WinniCode/intern-be/swagger.json)

---

## 📌 Prefix Endpoints API

API diakses melalui prefix `/api`:

| Base Path | Role / Modul | Deskripsi |
| :--- | :--- | :--- |
| `/api-docs` | Docs | Swagger UI Interaktif API Documentation |
| `/api/` | Auth | Register, Login, Refresh Token, Logout |
| `/api/news` | News | Manajemen & Pembacaan Berita |
| `/api/public` | Public User | Fitur pengguna umum |
| `/api/intern` | Intern User | Fitur khusus peserta magang |
| `/api/admin` | Admin | Panel administrasi, moderasi & penilaian |

---

## 📝 Lisensi

ISC
