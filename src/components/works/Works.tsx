"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context";

interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  link: string;
  imageSrc?: string;
  isDarkPlate?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "jejak-karya",
    index: "01",
    title: "Jejak Karya",
    category: "Mobile Application",
    year: "2024",
    description:
      "Aplikasi mobile eksplorasi dan katalogisasi karya seni rupa serta artefak bersejarah berbasis kurasi terpadu. Menghadirkan pengalaman penjelajahan galeri digital yang imersif melalui kategorisasi medium, arsip detail informasi karya, serta antarmuka visual yang tenang dan intuitif guna memudahkan apresiasi seni bagi publik.",
    stack: ["Dart", "Flutter", "REST API",],
    link: "#",
    imageSrc: "/assets/images/JejakKarya.webp",
  },
  {
    id: "informatika-umc",
    index: "02",
    title: "Profil Program Studi Teknik Informatika UMC",
    category: "Web Platform",
    year: "2024",
    description:
      "Perancangan dan pengembangan website profil institusi Program Studi Teknik Informatika Universitas Muhammadiyah Cirebon. Menghadirkan identitas visual modern, integrasi informasi kurikulum akademik, fasilitas peminatan, serta alur pendaftaran mahasiswa yang responsif lintas perangkat.",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    imageSrc: "/assets/images/CompanyUMC.webp",
  },
  {
    id: "lensa-cerdas",
    index: "03",
    title: "Lensa Cerdas",
    category: "Mobile Application",
    year: "2024",
    description:
      "Aplikasi mobile pemindaian dan peringkas dokumen cerdas berbasis kecerdasan buatan (Vision AI). Memadukan pemindaian optik dokumen fisik dengan konversi teks presisi, pengekstraksian poin-poin utama secara instan, serta manajemen arsip aktivitas penelusuran dokumen.",
    stack: ["Kotlin", "Vision AI / OCR", "REST API", "Mobile UI/UX"],
    link: "#",
    imageSrc: "/assets/images/LensaCerdas.webp",
  },
  {
    id: "sipas-windusengkahan",
    index: "04",
    title: "SIPAS Desa Windusengkahan",
    category: "E-Government",
    year: "2024",
    description:
      "Sistem Informasi Pelayanan Administrasi Surat berbasis web untuk warga Balai Desa Windusengkahan. Menghadirkan alur pengajuan surat online yang transparan, otomasi pembuatan draf persuratan, serta efisiensi tata kelola arsip kependudukan desa secara terpusat.",
    stack: ["PHP Native", "PHPMailer", "JavaScript", "MySQL", "Tailwind CSS"],
    link: "#",
    imageSrc: "/assets/images/DigitalisasiSurat.webp",
  },
  {
    id: "kasep",
    index: "05",
    title: "KASEP — Kontrol Anak Sehat dan Edukasi Posyandu",
    category: "Healthcare Platform",
    year: "2024",
    description:
      "Platform pemantauan tumbuh kembang balita dan layanan posyandu digital berbasis web. Mengintegrasikan pencatatan parameter gizi anak, kalkulasi kurva pertumbuhan standar kesehatan, analisis pencegahan stunting, serta pusat edukasi interaktif bagi orang tua.",
    stack: ["Next.js", "Express.js", "Tailwind CSS"],
    link: "#",
    imageSrc: "/assets/images/KASEP.webp",
  },
  {
    id: "cv-generator",
    index: "06",
    title: "CV Generator",
    category: "Web Application",
    year: "2024",
    description:
      "Aplikasi berbasis web untuk pembuatan Curriculum Vitae (CV) terstandarisasi secara otomatis dalam hitungan menit. Dilengkapi formulir input data terstruktur, kalkulasi tata letak dokumen, serta integrasi pustaka TCPDF guna menghasilkan berkas PDF yang presisi, rapi, dan siap digunakan.",
    stack: ["PHP Native", "TCPDF", "JavaScript", "HTML5 / CSS3"],
    link: "#",
    imageSrc: "/assets/images/CVGenerator.webp",
  },
];

export default function Works() {
  const { lang, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const projectsList = PROJECTS.map((proj) => {
    if (lang === "ID") {
      return proj;
    }
    const translation = t.works.items?.find((item) => item.id === proj.id);
    return {
      ...proj,
      title: translation?.title ?? proj.title,
      category: translation?.category ?? proj.category,
      description: translation?.description ?? proj.description,
    };
  });

  const renderProject = (project: ProjectItem, idx: number) => {
    const isEven = idx % 2 === 1;

    return (
      <article
        key={project.id}
        className="py-14 md:py-20 first:pt-8 md:first:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      >
        {/* Visual Plate (7 Cols) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative aspect-[16/10] w-full border border-neutral-200 overflow-hidden bg-neutral-100">
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                unoptimized
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
                className="object-cover"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center p-8 transition-colors duration-300 ${
                  project.isDarkPlate
                    ? "bg-neutral-950 text-white"
                    : "bg-neutral-100 text-neutral-900"
                }`}
              >
                <div className="text-center space-y-2">
                  <span className="text-[10px] tracking-[0.24em] uppercase opacity-50 block font-medium">
                    {project.category}
                  </span>
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    {project.title}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text Information (5 Cols) */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } space-y-5`}
        >
          {/* Index & Category (Tahun dihilangkan) */}
          <div className="flex items-center gap-3 text-xs text-neutral-400 tracking-[0.18em] uppercase font-medium">
            <span>[ {project.index} ]</span>
            <span className="w-4 h-px bg-neutral-300" />
            <span className="text-neutral-500">{project.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed text-justify">
            {project.description}
          </p>

          {/* Stack (Terkalibrasi optik agar sejajar harmonis dengan deskripsi) */}
          <div className="text-sm text-neutral-500 font-light tracking-normal pt-1">
            {project.stack.join(" · ")}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="works"
      className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-16 md:py-24 border-t border-neutral-200 scroll-mt-16"
    >
      {/* Section Top Indicator */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {t.works.sectionTag}
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          04 / 08
        </span>
      </div>

      {/* Clean Minimalist Header */}
      <div className="pb-4 md:pb-6 flex items-baseline justify-between">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
          {t.works.title}
        </h2>
      </div>

      {/* Initial 3 Projects */}
      <div className="divide-y divide-neutral-200">
        {projectsList.slice(0, 3).map((project, idx) => renderProject(project, idx))}
      </div>

      {/* Smooth Collapsible Container for Remaining Projects */}
      {projectsList.length > 3 && (
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out transform-gpu ${
            showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden min-h-0 border-t border-neutral-200">
            <div
              className={`divide-y divide-neutral-200 transition-opacity duration-500 ease-out ${
                showAll ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {projectsList.slice(3).map((project, idx) =>
                renderProject(project, idx + 3)
              )}
            </div>
          </div>
        </div>
      )}

      {/* View More / Less Toggle Button with Smooth Arrow Transition */}
      {projectsList.length > 3 && (
        <div className="pt-12 md:pt-16 flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center gap-3 border border-neutral-950 px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer group"
          >
            <span>{showAll ? t.works.viewLess : t.works.viewMore}</span>
            <span
              className={`inline-block text-sm leading-none transition-transform duration-500 ease-out ${
                showAll ? "rotate-180" : "rotate-0"
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
