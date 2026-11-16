# AgriVoice AI 🌱

> Asisten Penyuluhan Pertanian Berbasis Suara & Kecerdasan Buatan (AI)
> **Penyuluh cukup bicara, laporan langsung jadi.**

## 🚀 Live Demo di GitHub Pages
Website statis ini aktif dan dapat diakses langsung melalui GitHub Pages:  
👉 **[https://esnpendosa.github.io/Ro-if.4.1/](https://esnpendosa.github.io/Ro-if.4.1/)**

---

## 📖 Fitur Utama

- **Beranda Interaktif**:
  - Hero dengan mockup aplikasi seluler AgriVoice AI.
  - Penjelasan profil & nilai utama (Voice-first, Offline-first, Multilingual).
  - 9 Fitur unggulan (Voice-to-Report, Paham Bahasa Daerah, Form 9 Tahap, Foto & GPS Geotag, Diagnosis AI, Dashboard GIS, dsb).
  - Alur kerja 5 tahap dari sawah hingga laporan siap cetak.
  - **Galeri Flyer Interaktif**: Carousel geser dengan navigasi panah, indikator titik (dots), dan **Lightbox Zoom** ketika flyer diklik.
  - Pratinjau berita terkini.
  - Accordion FAQ dan integrasi tombol kontak langsung ke WhatsApp.
  - Identitas kontak lengkap (Bari'ur Ro'if Aflah - CV Rozitech Multimedia Indonesia, Gresik).

- **Katalog Berita & Filter Real-Time (`berita.html`)**:
  - Filter kategori instan (*Tips Tani*, *Berita Dinas*, *Update AgriVoice*).
  - Pencarian judul artikel secara langsung (*live client-side search*).
  - Penghitung jumlah artikel otomatis.

- **Detail Artikel Dinamis (`berita_detail.html` & `artikel/`)**:
  - Halaman artikel lengkap dengan foto sampul resolusi tinggi.
  - Pembagian paragraf rapi dan tipografi optimal untuk membaca.
  - Tombol bagikan ke WhatsApp secara instan dengan judul artikel otomatis.

- **100% Statis & Cepat**:
  - Berjalan tanpa server database MySQL maupun PHP runtime.
  - Dilengkapi file `.nojekyll` untuk kompatibilitas penuh dengan GitHub Pages.
  - Dilengkapi GitHub Actions workflow (`.github/workflows/deploy.yml`) untuk otomatisasi deployment setiap update.

---

## 🛠️ Menjalankan Secara Lokal

Cukup buka file `index.html` langsung di browser, atau jalankan web server lokal sederhana:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan PHP built-in server
php -S localhost:8000
```

Buka `http://localhost:8000` pada peramban web Anda.

---

## 📁 Struktur Direktori

```text
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow untuk GitHub Pages
├── artikel/                # Halaman artikel statis mandiri
│   ├── gejala-awal-wereng-dan-solusi-pht.html
│   ├── inovasi-teknologi-suara-offline-agrivoice-ai.html
│   └── uji-coba-lapangan-aplikasi-agrivoice-ai-ppl.html
├── assets/images/          # Logo dan mockup layar aplikasi
│   ├── app-screen.jpg
│   └── logo.png
├── css/                    # Desain stylesheet responsif
│   ├── article.css
│   ├── home.css
│   └── news.css
├── js/                     # Interaktivitas slider, lightbox, & filter
│   ├── articles.js
│   └── home.js
├── storage/uploads/        # Aset gambar materi flyer & sampul berita
├── .nojekyll               # Penanda GitHub Pages agar tidak melewati Jekyll
├── 404.html                # Halaman penanganan 404
├── berita.html             # Halaman katalog & filter berita
├── berita_detail.html      # Halaman pembaca artikel dinamis
├── favicon.ico
├── index.html              # Halaman beranda utama
└── README.md
```

&copy; 2026 AgriVoice AI — CV Rozitech Multimedia Indonesia.
