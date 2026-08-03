/**
 * ============================================================================
 * PRISMA 7 & POSTGRESQL SINGLETON CLIENT
 * ============================================================================
 * CATATAN PENTING UNTUK PENGEMBANGAN KE DEPAN:
 * 1. JANGAN PERNAH membuat instance `new PrismaClient()` baru di file model/controller/seeder lain!
 *    Membuat banyak instance akan mengakibatkan kebocoran koneksi database ("Too many connections").
 * 2. Selalu impor instance `prisma` dari file ini:
 *    import { prisma } from "../lib/prisma.js"; (atau relatif terhadap lokasi file).
 * 3. Pada Prisma 7, koneksi langsung ke PostgreSQL mewajibkan Driver Adapter (`@prisma/adapter-pg` & `pg`).
 * ============================================================================
 */

import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { PrismaClient } = pkg;
const { Pool } = pg;

// 1. Ambil URL koneksi database dari file .env
const connectionString = process.env.DATABASE_URL;

// 2. Buat PostgreSQL Connection Pool dan bungkus dengan Prisma Driver Adapter (Standard Prisma 7)
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 3. Simpan instance pada scope global untuk mencegah re-instansiasi saat hot-reload (Nodemon)
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// 4. Di mode development, simpan instance ke globalThis agar di-reuse saat auto-reload
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;