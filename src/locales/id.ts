import type { Dictionary } from "./types";

export const dictionaryID: Dictionary = {
  navbar: {
    menu: "[ Menu ]",
    close: "[ Close ]",
    items: [
      { label: "Intro", href: "#intro" },
      { label: "Works", href: "#works" },
      { label: "Achievements", href: "#achievements" },
      { label: "Organizations", href: "#organizations" },
      { label: "Contact", href: "#contact" },
    ],
  },
  intro: {
    sectionTag: "Section [02]",
    figureTag: "[ Fig. 01 ]",
    portraitLabel: "Portrait",
    headline:
      "Software Engineer & Creative Developer yang mendalami titik temu antara kejelasan sistem dan estetika visual.",
    paragraphs: [
      "Saya Muhammad Haqil Abdillah, mahasiswa Teknik Informatika Universitas Kuningan yang berfokus pada bidang Web Design, Web & Mobile Development, serta Internet of Things (IoT). Saya terbiasa merancang antarmuka yang intuitif sekaligus membangun aplikasi terintegrasi menggunakan teknologi seperti React, Next.js, PHP, Kotlin, dan Dart untuk menghasilkan solusi digital yang fungsional.",
      "Selain pengembangan perangkat lunak, saya juga mengeksplorasi integrasi perangkat keras dalam proyek berbasis IoT serta aktif dalam kegiatan organisasi kampus guna mengasah kepemimpinan dan kolaborasi tim. Dengan pendekatan yang adaptif dan fokus pada penyelesaian masalah (problem solving), saya selalu antusias mempelajari teknologi baru serta berkolaborasi dalam berbagai proyek pengembangan.",
      "Bagi saya, rekayasa perangkat lunak dan kepekaan visual harus berjalan selaras. Setiap baris kode dan keputusan desain merupakan proses terencana untuk menyaring kerumitan sistem menjadi solusi digital yang tenang, efisien, dan bernilai guna.",
    ],
    institution: "UNIVERSITAS KUNINGAN",
    major: "TEKNIK INFORMATIKA",
  },
  works: {
    sectionTag: "Section [04]",
    title: "Selected Works",
    viewProject: "Lihat Proyek",
    viewMore: "Lihat Lebih Banyak",
    viewLess: "Tampilkan Lebih Sedikit",
    items: [
      {
        id: "jejak-karya",
        title: "Jejak Karya",
        category: "Mobile Application",
        description:
          "Aplikasi mobile eksplorasi dan katalogisasi karya seni rupa serta artefak bersejarah berbasis kurasi terpadu. Menghadirkan pengalaman penjelajahan galeri digital yang imersif melalui kategorisasi medium, arsip detail informasi karya, serta antarmuka visual yang tenang dan intuitif guna memudahkan apresiasi seni bagi publik.",
      },
      {
        id: "informatika-umc",
        title: "Profil Program Studi Teknik Informatika UMC",
        category: "Web Platform",
        description:
          "Perancangan dan pengembangan website profil institusi Program Studi Teknik Informatika Universitas Muhammadiyah Cirebon. Menghadirkan identitas visual modern, integrasi informasi kurikulum akademik, fasilitas peminatan, serta alur pendaftaran mahasiswa yang responsif lintas perangkat.",
      },
      {
        id: "lensa-cerdas",
        title: "Lensa Cerdas",
        category: "Mobile Application",
        description:
          "Aplikasi mobile pemindaian dan peringkas dokumen cerdas berbasis kecerdasan buatan (Vision AI). Memadukan pemindaian optik dokumen fisik dengan konversi teks presisi, pengekstraksian poin-poin utama secara instan, serta manajemen arsip aktivitas penelusuran dokumen.",
      },
      {
        id: "sipas-windusengkahan",
        title: "SIPAS Desa Windusengkahan",
        category: "E-Government",
        description:
          "Sistem Informasi Pelayanan Administrasi Surat berbasis web untuk warga Balai Desa Windusengkahan. Menghadirkan alur pengajuan surat online yang transparan, otomasi pembuatan draf persuratan, serta efisiensi tata kelola arsip kependudukan desa secara terpusat.",
      },
      {
        id: "kasep",
        title: "KASEP — Kontrol Anak Sehat dan Edukasi Posyandu",
        category: "Healthcare Platform",
        description:
          "Platform pemantauan tumbuh kembang balita dan layanan posyandu digital berbasis web. Mengintegrasikan pencatatan parameter gizi anak, kalkulasi kurva pertumbuhan standar kesehatan, analisis pencegahan stunting, serta pusat edukasi interaktif bagi orang tua.",
      },
      {
        id: "cv-generator",
        title: "CV Generator",
        category: "Web Application, Document Engine",
        description:
          "Aplikasi berbasis web untuk pembuatan Curriculum Vitae (CV) terstandarisasi secara otomatis dalam hitungan menit. Dilengkapi formulir input data terstruktur, kalkulasi tata letak dokumen, serta integrasi pustaka TCPDF guna menghasilkan berkas PDF yang presisi, rapi, dan siap digunakan.",
      },
    ],
  },
  achievements: {
    sectionTag: "Section [05]",
    title: "Prestasi & Penghargaan",
    zoomLabel: "Perbesar",
    modalDocTag: "Dokumentasi Prestasi",
    modalDocTitle: "Dokumentasi Prestasi",
    modalClose: "Tutup",
    items: [
      {
        id: "achievement-01",
        year: "2026",
        title: "Juara 1 Lomba Web Design Tingkat Nasional",
        category: "Tingkat Nasional",
        organizer: "Universitas Muhammadiyah Cirebon",
        description:
          "Meraih Juara 1 dalam kompetisi Lomba Web Design Tingkat Nasional pada perhelatan Dies Natalis HIMASANTIKA Universitas Muhammadiyah Cirebon. Proyek ini memadukan estetika tipografi editorial yang presisi, sistem desain modular, dan arsitektur frontend modern yang responsif di berbagai perangkat. Fokus utama mencakup hierarki informasi yang intuitif, optimasi performa rendering antarmuka, serta kepatuhan standar aksesibilitas web guna menghadirkan pengalaman pengguna (UX) yang mulus, dinamis, dan bernilai guna tinggi.",
      },
      {
        id: "achievement-02",
        year: "2026",
        title: "Juara 2 Lomba PKM-PM Olimpiade Mahasiswa",
        category: "Tingkat Universitas",
        organizer: "Universitas Kuningan",
        description:
          "Meraih Juara 2 dalam ajang Olimpiade Intelektual Mahasiswa bidang Program Kreativitas Mahasiswa Pengabdian kepada Masyarakat (PKM-PM) di Universitas Kuningan. Mengembangkan inovasi sistem IoT Smart Komposter guna mengatasi problematika pencemaran limbah eceng gondok. Mengintegrasikan telemetri sensorik mikrokontroler untuk pemantauan suhu, kelembapan, dan gas dekomposisi secara real-time, mentransformasikan limbah gulma air menjadi pupuk organik bernilai ekonomis guna mendorong pemberdayaan warga setempat.",
      },
    ],
  },
  certifications: {
    sectionTag: "Section [06]",
    title: "Sertifikasi & Lisensi",
    showMore: "Lihat Lebih Banyak ({count} Sertifikat)",
    showLess: "Tampilkan Lebih Sedikit",
    viewCertificate: "Lihat sertifikat",
    prevCertificate: "Sertifikat sebelumnya",
    nextCertificate: "Sertifikat berikutnya",
    closeModal: "Tutup tampilan sertifikat",
    items: [
      {
        id: "cert-juara1-web",
        title: "Juara 1 Lomba Web Design Tingkat Nasional",
        issuer: "Universitas Muhammadiyah Cirebon",
        date: "Mei 2026",
      },
      {
        id: "cert-juara2-pkm",
        title: "Juara 2 Lomba PKM-PM Olimpiade Mahasiswa",
        issuer: "Universitas Kuningan",
        date: "Jun 2026",
      },
      {
        id: "cert-aws-ai-academy",
        title: "AWS AI Academy 2026 (Level Dasar & Pemula)",
        issuer: "AWS & Dicoding Indonesia",
        date: "Sep 2026",
      },
      {
        id: "cert-genai-azure",
        title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
        issuer: "Dicoding Indonesia",
        date: "Agu 2026",
      },
      {
        id: "cert-ds-fabric",
        title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
        issuer: "Dicoding Indonesia",
        date: "Agu 2026",
      },
      {
        id: "cert-sdd-kiro",
        title: "Spec-Driven Development dengan Kiro",
        issuer: "Dicoding Indonesia",
        date: "Agu 2026",
      },
      {
        id: "cert-ignite-2026",
        title: "Panitia IoT Generation Initiative & Tech Exhibition (IGNITE)",
        issuer: "Universitas Kuningan",
        date: "Agu 2026",
      },
      {
        id: "cert-pm-cihirup-2026",
        title: "Panitia Pengabdian Masyarakat (Desa Cihirup)",
        issuer: "Universitas Kuningan",
        date: "Jul 2026",
      },
      {
        id: "cert-ekraf-bootcamp",
        title: "Productivity with AI Bootcamp — Badan Ekraf Digital Talent 2026",
        issuer: "Badan Ekonomi Kreatif RI & Dicoding",
        date: "Mei 2026",
      },
      {
        id: "cert-ekraf-partisipasi",
        title: "Badan Ekraf Digital Talent 2026 — Program Pelatihan",
        issuer: "Badan Ekonomi Kreatif RI & Dicoding",
        date: "Mei 2026",
      },
      {
        id: "cert-dart",
        title: "Memulai Pemrograman dengan Dart",
        issuer: "Dicoding Indonesia",
        date: "Apr 2026",
      },
      {
        id: "cert-mobile-dev",
        title: "Belajar Dasar Pengembangan Aplikasi Mobile",
        issuer: "Dicoding Indonesia",
        date: "Apr 2026",
      },
      {
        id: "cert-ml-pemula",
        title: "Belajar Machine Learning untuk Pemula",
        issuer: "Dicoding Indonesia",
        date: "Mar 2026",
      },
      {
        id: "cert-python",
        title: "Memulai Pemrograman dengan Python",
        issuer: "Dicoding Indonesia",
        date: "Jan 2026",
      },
      {
        id: "cert-financial",
        title: "Introduction to Financial Literacy",
        issuer: "Dicoding Indonesia",
        date: "Jan 2026",
      },
      {
        id: "cert-aws-genai",
        title: "Belajar Dasar Cloud dan Gen AI di AWS",
        issuer: "Dicoding Indonesia",
        date: "Jan 2026",
      },
      {
        id: "cert-ai",
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        date: "Jan 2026",
      },
      {
        id: "cert-technoversary-2025",
        title: "Panitia Techno Versary 2025",
        issuer: "Universitas Kuningan",
        date: "Des 2025",
      },
      {
        id: "cert-pemateri-pbk-2025",
        title: "Pemateri Workshop & Seminar Teknologi Digital Future Tech",
        issuer: "Paguyuban Barudak Komputer (PBK)",
        date: "Nov 2025",
      },
      {
        id: "cert-mentor-connect-code",
        title: "Mentor Connect & Code 2025",
        issuer: "Universitas Kuningan",
        date: "Okt 2025",
      },
      {
        id: "cert-panitia-connect-code",
        title: "Panitia Connect & Code 2025",
        issuer: "Universitas Kuningan",
        date: "Okt 2025",
      },
      {
        id: "cert-pkkmb-2025",
        title: "Panitia PKKMB Fakultas Ilmu Komputer 2025",
        issuer: "Universitas Kuningan",
        date: "Sep 2025",
      },
      {
        id: "cert-pm-ciputat-2025",
        title: "Panitia Pengabdian Masyarakat (Desa Ciputat)",
        issuer: "Universitas Kuningan",
        date: "Jun 2025",
      },
    ],
  },
  organizations: {
    sectionTag: "Section [07]",
    title: "Pengalaman Organisasi",
    items: [
      {
        id: "org-hima-ti",
        name: "Himpunan Mahasiswa Teknik Informatika (HIMA TI)",
        roles: [
          {
            id: "hima-keorganisasian-2025",
            role: "Divisi Keorganisasian — Anggota",
            period: "Periode 2025",
            items: [
              {
                id: "hima-1",
                title: "Ketua Pelaksana Program Kerja Wengi Sabanda Sariksa",
                meta: "Cijoho, April 2025",
              },
              {
                id: "hima-2",
                title: "Koordinator Seksi Humas Malam Bina Iman dan Takwa",
                meta: "Mushola FKOM Universitas Kuningan, Juni 2025",
              },
              {
                id: "hima-3",
                title: "Pengabdian Masyarakat - Moderator Seminar Pengelolaan Sampah",
                meta: "Ciputat, Mei 2025",
              },
              {
                id: "hima-4",
                title: "Mentor Peserta PKKMB FKOM Universitas Kuningan",
                meta: "FKOM Universitas Kuningan, September 2025",
              },
              {
                id: "hima-5",
                title:
                  "Mentor Peserta Connect and Code - Kaderisasi Mahasiswa baru Program Studi",
                meta: "Lempong Balong, September - Oktober 2025",
              },
              {
                id: "hima-6",
                title:
                  "Pameran Virtual Reality dan Robotika PKKMB Universitas Kuningan",
                meta: "Sekretariat Ekraf, Juni 2025",
              },
              {
                id: "hima-7",
                title:
                  "Pameran Virtual Reality di DKVest FKOM Universitas Kuningan",
                meta: "FKOM Universitas Kuningan, Oktober 2025",
              },
              {
                id: "hima-8",
                title: "Panitia Techno Versary",
                meta: "FKOM, SC Universitas Kuningan, November - Desember 2025",
              },
            ],
          },
          {
            id: "hima-bph-2026",
            role: "Badan Pengurus Harian — Sekretaris Umum II",
            period: "Periode 2026",
          },
          {
            id: "hima-ppk-2026",
            role: "Ketua PPK Ormawa HIMA TI",
            period: "Periode 2026",
          },
        ],
      },
      {
        id: "org-pbk",
        name: "Paguyuban Barudak Komputer (PBK)",
        roles: [
          {
            id: "pbk-eksternal-2025",
            role: "Divisi Hubungan Eksternal — Anggota",
            period: "Periode 2025",
            items: [
              {
                id: "pbk-1",
                title:
                  "Ketua Pelaksana Seminar Blockhain dan Fundamental Pemrograman",
                meta: "Aula FKOM Universitas Kuningan, Februari 2025",
              },
              {
                id: "pbk-2",
                title: "Pemateri Workshop Internet Of Things dan Robotika",
                meta: "Lab RPL FKOM Universitas Kuningan, November 2025",
              },
              {
                id: "pbk-3",
                title:
                  "Pemateri Virtual Reality dan Robotika Perkemahan Wirakarya Kuningan",
                meta: "Subang, Desember 2025",
              },
            ],
          },
          {
            id: "pbk-akademis-2026",
            role: "Divisi Akademis — Anggota",
            period: "Periode 2026",
          },
        ],
      },
    ],
  },
  contact: {
    sectionTag: "Section [08]",
    inquiriesTag: "Inquiries & Collaboration",
    heading: "Mari Terhubung & Membangun Solusi Digital Bersama.",
    availabilityTag: "Ketersediaan Kolaborasi",
    availabilityDesc:
      "Terbuka untuk kolaborasi proyek rekayasa perangkat lunak, perancangan antarmuka web & mobile, implementasi sistem IoT, serta peluang magang dan riset teknologi.",
    emailTag: "Kirim Surel Langsung",
    copyEmail: "Salin Email",
    copiedEmail: "Tersalin ✓",
    channels: {
      repoLabel: "Repositori",
      repoName: "GitHub",
      linkedinLabel: "Jejaring Profesional",
      linkedinName: "LinkedIn",
      instaLabel: "Dokumentasi Visual",
      instaName: "Instagram",
      locationLabel: "Domisili & Basis",
      locationName: "Kuningan, Jawa Barat",
      locationTimezone: "Indonesia · GMT+7",
    },
  },
};
