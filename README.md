# Project 1: Simple Dockerized Web Application

Projek pertama untuk latihan amali DevOps Homelab. Projek ini menunjukkan kitaran kerja (*workflow*) asas daripada pembangunan kod, pembungkusan kontena (Docker/Podman), kawalan versi (Git/GitHub), hingga ke *deployment* di server Ubuntu.

---

## 🛠️ Teknologi Yang Digunakan

* **Web Server:** Nginx (Alpine)
* **Containerization:** Docker / Podman
* **Version Control:** Git & GitHub
* **OS Environment:** Fedora Linux (Dev) & Ubuntu Server (Production)

---

## 🚀 Cara Menjalankan Projek (Local Development)

### 1. Bina Image
`podman build -t project1-app .`

*(Atau jika menggunakan Docker: `docker build -t project1-app .`)*

### 2. Jalankan Container
`podman run -d -p 8080:80 --name test-web project1-app`

### 3. Akses Aplikasi
Buka pelayar web (*browser*) dan layari:
http://localhost:8080

---

## 📌 Aliran DevOps (Workflow)

1. Tulis kod web asas (`index.html`).
2. Sediakan pembungkusan kontena (`Dockerfile`).
3. Uji penjejalan kontena secara tempatan di laptop Fedora.
4. Push kod ke repository GitHub.
5. Deploy bekas kontena ke laptop Server Ubuntu.