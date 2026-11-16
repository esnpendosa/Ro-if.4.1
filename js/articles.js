// Data artikel AgriVoice AI untuk deployment statis GitHub Pages
const ARTICLES = [
    {
        id: 1,
        slug: "gejala-awal-wereng-dan-solusi-pht",
        title: "Gejala Awal Serangan Wereng dan Solusi Pengendalian Hama Terpadu",
        category: "Tips Tani",
        date: "2026-11-15",
        dateFormatted: "15 November 2026",
        cover: "storage/uploads/883a412c10e83a35b4349fa73c3cc5ac.jpg",
        excerpt: "Kenali ciri-ciri awal serangan wereng coklat di lahan padi dan langkah preventif pengendalian hama terpadu (PHT) sebelum menyebar luas.",
        body: `Serangan hama wereng batang coklat (Nilaparvata lugens) sering kali menjadi ancaman terbesar bagi petani padi, terutama di musim tanam dengan kelembapan tinggi. Keterlambatan deteksi dini dapat mengakibatkan kerusakan fatal berupa "hopperburn" atau tanaman mengering seperti terbakar dalam waktu singkat.

Petugas Penyuluh Lapangan (PPL) menyarankan agar petani melakukan pengamatan rutin setidaknya dua kali seminggu pada pangkal rumpun padi. Gejala awal biasanya ditandai dengan perubahan warna daun bawah menjadi kekuningan, adanya cairan manis (embun madu) yang menempel pada batang, serta populasi nimfa yang mulai berkumpul di pangkal batang.

Dalam konsep Pengendalian Hama Terpadu (PHT), langkah pertama bukanlah penyemprotan pestisida kimia secara berlebihan, melainkan menjaga keseimbangan ekosistem sawah. Pemanfaatan musuh alami seperti laba-laba serigala (Lycosa pseudoannulata) dan kumbang Paederus terbukti efektif menekan populasi wereng secara alami.

Selain itu, sanitasi lahan dan pergiliran varietas benih tahan wereng (VUTW) menjadi kunci pertahanan jangka panjang. Jangan biarkan sisa jerami yang terinfeksi menumpuk di pematang.

Melalui aplikasi AgriVoice AI, penyuluh dapat mendokumentasikan foto tanaman yang dicurigai terserang dan mencatat jumlah rumpun terdampak lewat perintah suara. Sistem AI akan menganalisis tingkat keparahan dan menyajikan rekomendasi SOP penanganan PHT yang tepat untuk disampaikan kepada kelompok tani.`
    },
    {
        id: 2,
        slug: "uji-coba-lapangan-aplikasi-agrivoice-ai-ppl",
        title: "Uji Coba Lapangan Aplikasi AgriVoice AI Bersama PPL dan Kelompok Tani",
        category: "Berita Dinas",
        date: "2026-11-14",
        dateFormatted: "14 November 2026",
        cover: "storage/uploads/bf1b94fff7654a2a2448b68e3c376b1f.jpg",
        excerpt: "Dinas pertanian menggelar program percontohan pemanfaatan asisten penyuluhan suara di sejumlah balai penyuluhan pertanian.",
        body: `Program modernisasi penyuluhan pertanian terus bergulir. Bertempat di Balai Penyuluhan Pertanian (BPP), puluhan Petugas Penyuluh Lapangan bersama perwakilan kelompok tani mengikuti sesi uji coba lapangan aplikasi AgriVoice AI.

Selama ini, kendala utama para penyuluh adalah beban administrasi pelaporan pasca-kunjungan. Menulis formulir fisik berlembar-lembar di tengah sawah dan mengetik ulang laporan di kantor sering kali memakan waktu berjam-jam yang seharusnya bisa digunakan untuk pendampingan petani secara langsung.

Dengan hadirnya AgriVoice AI, penyuluh cukup berbicara secara wajar saat berdialog dengan petani di pematang. Aplikasi merekam, menstranskripsi, dan mengelompokkan data penting seperti luas lahan, varietas benih, kebutuhan pupuk, dan keluhan hama secara otomatis.

Para penyuluh mengapresiasi kemampuan aplikasi mengenali istilah bahasa daerah (Jawa dan Sunda) yang umum digunakan petani lokal, serta dukungan foto dengan koordinat GPS dan timestamp otomatis sebagai bukti autentik kunjungan.

Data kunjungan yang tersinkronisasi langsung masuk ke dasbor pimpinan dinas, memberikan visibilitas real-time mengenai kondisi ketahanan pangan dan sebaran kegiatan penyuluhan per wilayah binaan.`
    },
    {
        id: 3,
        slug: "inovasi-teknologi-suara-offline-agrivoice-ai",
        title: "Inovasi Fitur Offline-First dan Pengenalan Suara Multilingual AgriVoice AI",
        category: "Update AgriVoice",
        date: "2026-11-12",
        dateFormatted: "12 November 2026",
        cover: "storage/uploads/ee13942bee595b483b03f6987aabe7d5.jpg",
        excerpt: "AgriVoice AI merilis pembaruan arsitektur model suara on-device yang mendukung bahasa Jawa dan Sunda tanpa ketergantungan sinyal internet.",
        body: `Konektivitas internet yang belum merata di area pedesaan dan pelosok persawahan kerap menjadi tantangan utama implementasi teknologi digital di sektor agrikultur. Menjawab tantangan tersebut, tim pengembang AgriVoice AI secara resmi merilis pembaruan arsitektur Offline-First teranyar.

Fitur ini memungkinkan model speech-to-text ringan berjalan langsung di perangkat ponsel (on-device AI) tanpa perlu mengirimkan rekaman audio ke server cloud. Petugas penyuluh dapat merekam dialog, mengambil foto koordinat GPS, dan menyusun draf berita acara meski berada di area blank spot sinyal seluler.

Ketika perangkat kembali mendeteksi koneksi internet atau Wi-Fi, seluruh berkas kunjungan yang tersimpan lokal dienkripsi dan disinkronkan secara otomatis ke basis data pusat.

Selain itu, pembaruan ini juga menyempurnakan pemahaman kosakata dialek lokal (bahasa Jawa krama/ngoko dan bahasa Sunda) serta kamus taksonomi hama tanaman pangan Indonesia.

Pembaruan ini diharapkan mempercepat digitalisasi pertanian Indonesia hingga ke pelosok desa tanpa terkendala infrastruktur jaringan.`
    }
];

if (typeof window !== 'undefined') {
    window.ARTICLES = ARTICLES;
}
