# Panduan Font Mori (PP Mori)

Letakkan file font Anda di folder ini (`public/fonts/`):
- `PPMori-Regular.woff2` (atau `.woff` / `.otf`)
- `PPMori-SemiBold.woff2`

Jika ingin menggunakan `next/font/local`, Anda dapat mengaktifkannya di `src/app/layout.tsx`:

```tsx
import localFont from "next/font/local";

const mori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mori",
});
```

Kemudian tambahkan `${mori.variable}` pada tag `<body>` di `layout.tsx`.
Secara default, `globals.css` sudah disiapkan untuk mengenali `--font-mori`.
