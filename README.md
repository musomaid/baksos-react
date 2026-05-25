# Baksos Pengobatan Dukkes
MVP mobile-first untuk operasional baksos pengobatan Dukkes (registrasi, antrean, triage, pemeriksaan, farmasi, rujukan, dokumentasi, laporan) berbasis localStorage.

## Stack
React, Vite, TypeScript, Tailwind CSS, React Router DOM, Zustand, localStorage, Vercel.

## Install
npm install

## Jalankan lokal
npm run dev

## Build
npm run build

## Deploy Vercel
- Framework Preset: Vite
- Root Directory: ./
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

## Catatan keamanan
Prototype ini menyimpan data di localStorage dan **tidak cocok untuk data pasien asli**. Untuk produksi gunakan database terenkripsi + autentikasi + audit server-side.

## Rencana fase berikutnya
- Migrasi ke database
- Login dan role-based access
- Integrasi upload dokumen dengan Vercel Blob
