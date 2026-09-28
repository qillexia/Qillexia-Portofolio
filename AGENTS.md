<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Agent Rules

- **Git Operations**: Jangan menjalankan perintah Git (`git status`, `git add`, `git commit`, `git push`, dll.) secara otomatis atau berulang kali. Hanya jalankan perintah Git jika diminta secara eksplisit oleh pengguna.
- **Gitkeep**: Jangan membuat file `.gitkeep` di folder kosong kecuali diminta secara eksplisit oleh pengguna.
- **Assets Folder**: Lokasi asset statis hanya berada di `public/assets/`. Jangan membuat folder `assets` di dalam `src/`.
- **Design Philosophy (No AI Slop)**:
  - Hindari klise desain AI (AI slop): DILARANG memakai pulsing dot (lampu hijau/bulatan status berkedip), tombol pill rounded-full dengan kata-kata template, copywriting klise ("Crafting digital experiences...", "Passionate developer..."), gimmick scroll ticker palsu, atau gradient berlebihan.
  - Terapkan estetika minimalis editorial/Swiss style murni: Utamakan kekuatan tipografi PP Mori yang bersih, proporsi negative space yang luas dan bernapas, hierarki kontras monokrom (hitam-putih) yang tenang, tegas, dan otentik.
  - DILARANG menambahkan sub-label kurung siku ekstra (seperti `[ Leadership & Activities ]`, `[ Record of Honors ]`, nomor indeks ekstra seperti `[ 01 ]` pada organisasi, dll.), teks deskripsi pengantar di samping/bawah judul (seperti `<p className="text-xs sm:text-sm text-neutral-500 font-light ...">Rekam jejak...</p>`), ataupun teks metadata tambahan seperti singkatan dan nama institusi (contoh: `HIMA TI Universitas Kuningan`). Header section maupun header organisasi harus selalu bersih dan murni hanya nama/judul utama agar tampilan tetap clean.
  - DILARANG menggunakan font UI monospace (seperti class `font-mono`, `ui-monospace`, font mesin tik/kode untuk teks label UI, nomor urut, indeks, badge, tanggal, tahun, periode, atau metadata). Gunakan font PP Mori secara konsisten di seluruh elemen tipografi agar tampilan tetap harmonis, elegan, dan kohesif.
