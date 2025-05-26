# Backend Sakoo

Selamat datang di dokumentasi untuk layanan backend Website Sakoo. Backend ini bertanggung jawab untuk mengelola data pengguna dan fitur utama kami yaitu Cek Finansial.

## Teknologi Utama

* **Database:** PostgreSQL

## Prasyarat

Sebelum Anda dapat menjalankan backend ini secara lokal, pastikan sistem Anda telah memenuhi prasyarat berikut:

1.  **Node.js dan npm:** Pastikan Node.js dan npm (Node Package Manager) sudah terinstal. Anda bisa mengunduh dan menginstalnya dari [nodejs.org](https://nodejs.org/).
2.  **PostgreSQL:** Pastikan server PostgreSQL sudah terinstal dan berjalan di sistem Anda atau Anda memiliki akses ke instance PostgreSQL.

## Instalasi dan Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan backend ini di lingkungan pengembangan Anda:

1.  **Clone Repository (Jika Belum):**
    ```bash
    git clone [https://github.com/firza-nrk/Sakoo.git](https://github.com/firza-nrk/Sakoo.git)
    cd Sakoo
    ```

2.  **Checkout ke Branch `Back-End`:**
    Kode untuk backend berada di branch `Back-End`. Pindah ke branch tersebut menggunakan perintah berikut:
    ```bash
    git checkout Back-End
    ```
    Jika Anda juga perlu mengambil perubahan terbaru dari remote branch (jika ada):
    ```bash
    git pull origin Back-End
    ```

3.  **Instal Dependensi:**
    Setelah berada di branch `Back-End` (yang seharusnya berisi file `package.json` untuk backend), gunakan npm untuk menginstal semua dependensi proyek.
    ```bash
    npm install
    ```

4.  **Konfigurasi Koneksi Database PostgreSQL:**
    * Anda perlu menyesuaikan konfigurasi koneksi ke database PostgreSQL Anda. Biasanya, informasi ini disimpan dalam file konfigurasi (misalnya, `.env`, `config/database.js`, `ormconfig.json`, atau variabel lingkungan).
    * Cari file atau bagian kode yang bertanggung jawab untuk koneksi database.
    * Sesuaikan parameter berikut dengan detail koneksi PostgreSQL Anda:
        * `DB_HOST` atau `host`: Alamat server PostgreSQL (misalnya, `localhost`).
        * `DB_PORT` atau `port`: Port server PostgreSQL (biasanya `5432`).
        * `DB_USER` atau `username`: Nama pengguna untuk mengakses database.
        * `DB_PASSWORD` atau `password`: Kata sandi untuk pengguna database.
        * `DB_NAME` atau `database`: Nama database yang akan digunakan.
    * **Contoh (jika menggunakan file `.env`):**
        Buat file `.env` di root direktori backend (jika belum ada dan tidak terlacak oleh Git) dan isi dengan format seperti ini:
        ```
        DB_HOST=localhost
        DB_PORT=5432
        DB_USER=username_anda
        DB_PASSWORD=password_anda
        DB_NAME=nama_database_anda
        ```
        Pastikan Anda membuat database `nama_database_anda` di PostgreSQL Anda terlebih dahulu jika belum ada.

4.  **Jalankan Migrasi Database (Jika Ada):**
    Jika proyek ini menggunakan migrasi database (misalnya dengan Sequelize, TypeORM, Knex.js), jalankan perintah migrasi untuk membuat skema tabel yang diperlukan. Perintah spesifik akan bergantung pada ORM atau library migrasi yang digunakan.
    ```bash
    # Contoh (tergantung ORM/library):
    # npm run migrate
    # npx sequelize-cli db:migrate
    # npx typeorm migration:run
    ```

5.  **Jalankan Server Backend:**
    Setelah semua dependensi terinstal dan koneksi database dikonfigurasi, Anda dapat menjalankan server backend.
    ```bash
    npm start
    # atau jika ada script dev di package.json
    # npm run dev
    ```
    Server backend biasanya akan berjalan pada port tertentu (misalnya, `http://localhost:3000` atau `http://localhost:8080`). Periksa output di terminal untuk mengetahui alamat dan port yang digunakan.

## Endpoint API 🔑

Berikut adalah beberapa endpoint API utama yang tersedia:

### 1. Registrasi Pengguna

* **Method:** `POST`
* **Endpoint:** `/register`
* **Deskripsi:** Mendaftarkan pengguna baru ke sistem.
* **Request Body:** `application/json`
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
    * `name` (string): Nama lengkap pengguna.
    * `email` (string): Alamat email pengguna (harus unik).
    * `password` (string): Kata sandi pengguna.

* **Success Response (201 Created):**
    ```json
    {
      "message": "User registered successfully"
    }
    ```
* **Error Response:** (Contoh)
    * `400 Bad Request`: Jika data tidak valid atau ada field yang kurang.
    * `409 Conflict`: Jika email sudah terdaftar.

### 2. Login Pengguna

* **Method:** `POST`
* **Endpoint:** `/login`
* **Deskripsi:** Mengautentikasi pengguna yang sudah ada dan mengembalikan token JWT.
* **Request Body:** `application/json`
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
    * `email` (string): Alamat email pengguna yang terdaftar.
    * `password` (string): Kata sandi pengguna.

* **Success Response (200 OK):**
    ```json
    {
      "message": "Login successful",
      "token": "jwttoken"
    }
    ```
    * `token` (string): JSON Web Token untuk autentikasi pada request selanjutnya.

* **Error Response:** (Contoh)
    * `400 Bad Request`: Jika data tidak valid.
    * `401 Unauthorized`: Jika email atau password salah.
