"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/context";

export interface AchievementItem {
  id: string;
  index: string;
  year: string;
  title: string;
  category: string;
  organizer: string;
  description: string;
  imageSrc?: string;
  objectPosition?: string;
  credentialUrl?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "achievement-01",
    index: "01",
    year: "2026",
    title: "Juara 1 Lomba Web Design Tingkat Nasional",
    category: "Tingkat Nasional",
    organizer: "Universitas Muhammadiyah Cirebon",
    description:
      "Meraih Juara 1 dalam kompetisi Lomba Web Design Tingkat Nasional pada perhelatan Dies Natalis HIMASANTIKA Universitas Muhammadiyah Cirebon. Proyek ini memadukan estetika tipografi editorial yang presisi, sistem desain modular, dan arsitektur frontend modern yang responsif di berbagai perangkat. Fokus utama mencakup hierarki informasi yang intuitif, optimasi performa rendering antarmuka, serta kepatuhan standar aksesibilitas web guna menghadirkan pengalaman pengguna (UX) yang mulus, dinamis, dan bernilai guna tinggi.",
    imageSrc: "/assets/images/Juara1Web.webp",
    objectPosition: "center 35%",
  },
  {
    id: "achievement-02",
    index: "02",
    year: "2026",
    title: "Juara 2 Lomba PKM-PM Olimpiade Mahasiswa",
    category: "Tingkat Universitas",
    organizer: "Universitas Kuningan",
    description:
      "Meraih Juara 2 dalam ajang Olimpiade Intelektual Mahasiswa bidang Program Kreativitas Mahasiswa Pengabdian kepada Masyarakat (PKM-PM) di Universitas Kuningan. Mengembangkan inovasi sistem IoT Smart Komposter guna mengatasi problematika pencemaran limbah eceng gondok. Mengintegrasikan telemetri sensorik mikrokontroler untuk pemantauan suhu, kelembapan, dan gas dekomposisi secara real-time, mentransformasikan limbah gulma air menjadi pupuk organik bernilai ekonomis guna mendorong pemberdayaan warga setempat.",
    imageSrc: "/assets/images/Juara2PKM.webp",
    objectPosition: "center 68%",
  },
];

interface AchievementsProps {
  items?: AchievementItem[];
}

export default function Achievements({ items: itemsProp }: AchievementsProps) {
  const { lang, t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const openRafRef = useRef<number | null>(null);
  const lenis = useLenis();

  const baseItems = itemsProp || ACHIEVEMENTS;
  const items = baseItems.map((item) => {
    const translation = t.achievements.items.find((tItem) => tItem.id === item.id);
    return {
      ...item,
      title: translation?.title ?? item.title,
      category: translation?.category ?? item.category,
      organizer: translation?.organizer ?? item.organizer,
      description: translation?.description ?? item.description,
      year: translation?.year ?? item.year,
    };
  });

  const activeItem = items.find((i) => i.id === activeId) ?? null;

  const openModal = (item: AchievementItem) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveId(item.id);
    if (openRafRef.current) cancelAnimationFrame(openRafRef.current);
    openRafRef.current = requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveId(null);
    }, 280);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (openRafRef.current) cancelAnimationFrame(openRafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeId) return;

    // Freeze smooth scrolling without removing scrollbar or causing layout shifts
    lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        const idx = items.findIndex((i) => i.id === activeId);
        if (idx !== -1 && idx < items.length - 1) {
          setActiveId(items[idx + 1].id);
        }
      } else if (e.key === "ArrowLeft") {
        const idx = items.findIndex((i) => i.id === activeId);
        if (idx > 0) {
          setActiveId(items[idx - 1].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeId, items, lenis]);

  return (
    <section
      id="achievements"
      className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-16 md:py-24 scroll-mt-16"
    >
      {/* Section Top Indicator */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {t.achievements.sectionTag}
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          05 / 08
        </span>
      </div>

      {/* Clean Minimalist Header */}
      <div className="pb-4 md:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
            {t.achievements.title}
          </h2>
        </div>
      </div>

      {/* Minimalist Symmetrical 2-Column Documentation Gallery with CSS Subgrid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-12 md:gap-y-0 pt-8 md:pt-10 items-start md:grid-rows-[auto_auto_auto_auto]">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col border-b border-neutral-100 pb-8 md:border-b-0 md:pb-0 md:grid md:grid-rows-subgrid md:row-span-4"
          >
            {/* Row 1: Documentation Image Frame (Landscape 16:10 format with Click-to-Modal) */}
            <div
              role={item.imageSrc ? "button" : undefined}
              tabIndex={item.imageSrc ? 0 : undefined}
              onMouseDown={(e) => {
                if (item.imageSrc) e.preventDefault();
              }}
              onClick={() => {
                if (item.imageSrc) openModal(item);
              }}
              onKeyDown={(e) => {
                if (item.imageSrc && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  openModal(item);
                }
              }}
              aria-label={item.imageSrc ? (lang === "ENG" ? `View documentation photo of ${item.title}` : `Lihat foto dokumentasi ${item.title}`) : undefined}
              className={`relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-neutral-200 group-hover:border-neutral-900 transition-colors duration-300 ${
                item.imageSrc ? "cursor-pointer select-none" : ""
              }`}
            >
              {item.imageSrc ? (
                <>
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    unoptimized
                    loading="lazy"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    style={{
                      objectPosition: item.objectPosition || "center 30%",
                    }}
                  />
                  {/* Subtle Minimalist Zoom Indicator on Hover (Tanpa overlay gelap) */}
                  <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase bg-neutral-950 text-white shadow-md">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                        />
                      </svg>
                      {t.achievements.zoomLabel}
                    </span>
                  </div>
                </>
              ) : (
                /* Minimalist Architectural Documentation Placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-12 h-12 mb-3 border border-neutral-300 flex items-center justify-center text-neutral-400 group-hover:border-neutral-950 group-hover:text-neutral-950 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block font-medium">
                    [ Foto Dokumentasi // Sertifikat ]
                  </span>
                  <span className="text-xs text-neutral-400 mt-1 font-light">
                    Tempat gambar dokumentasi prestasi
                  </span>
                </div>
              )}
            </div>

            {/* Row 2: Title (1 Baris Sejajar Penuh) */}
            <div className="pt-4 flex flex-col justify-start">
              <h3 className="text-lg sm:text-xl lg:text-[21px] xl:text-2xl font-bold tracking-tight text-neutral-950 leading-snug group-hover:text-neutral-700 transition-colors">
                {item.title}
              </h3>
            </div>

            {/* Row 3: Organizer (Penyelenggara Sejajar pada Baseline yang Sama) */}
            <div className="pt-1.5 flex flex-col justify-start">
              <p className="text-xs tracking-[0.14em] uppercase text-neutral-400 font-medium">
                {item.organizer}
              </p>
            </div>

            {/* Row 4: Description (Jarak diperdekat ke atas, Rata Kanan-Kiri Sejajar) */}
            <div className="pt-2">
              <p className="text-sm text-neutral-600 font-light leading-relaxed text-justify [text-align-last:left]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Modern Minimalist Image Preview Modal with Smooth Transition */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-achievement-title"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className={`fixed top-16 inset-x-0 bottom-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 transition-all duration-300 ease-out overscroll-contain ${
            isModalVisible
              ? "bg-black/85 backdrop-blur-sm opacity-100"
              : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={`relative w-full max-w-5xl max-h-[calc(100vh-5.5rem)] flex flex-col bg-neutral-950 text-white border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
              isModalVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-2"
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-950/95">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-white text-neutral-950 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Doc [{activeItem.index}]
                </span>
                <span className="text-xs text-neutral-400 tracking-[0.16em] uppercase hidden sm:inline">
                  {t.achievements.modalDocTag}
                </span>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 px-2 -mr-2"
                aria-label={t.achievements.modalClose}
              >
                <span className="hidden sm:inline">{t.achievements.modalClose}</span>
                <span className="text-[10px] border border-neutral-700 px-1.5 py-0.5 text-neutral-400 font-medium">
                  ESC
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Image Area (Full uncropped high-resolution view) */}
            <div className="relative w-full h-[50vh] sm:h-[58vh] md:h-[62vh] bg-neutral-900/50 flex items-center justify-center p-3 sm:p-5 select-none">
              {activeItem.imageSrc ? (
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  fill
                  unoptimized
                  className="object-contain transition-opacity duration-300 ease-out"
                  priority
                />
              ) : null}

              {/* Prev / Next Navigation Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = items.findIndex((i) => i.id === activeItem.id);
                      if (idx > 0) setActiveId(items[idx - 1].id);
                    }}
                    disabled={items.findIndex((i) => i.id === activeItem.id) === 0}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    aria-label={lang === "ENG" ? "Previous image" : "Foto sebelumnya"}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = items.findIndex((i) => i.id === activeItem.id);
                      if (idx < items.length - 1) setActiveId(items[idx + 1].id);
                    }}
                    disabled={items.findIndex((i) => i.id === activeItem.id) === items.length - 1}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    aria-label={lang === "ENG" ? "Next image" : "Foto selanjutnya"}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Metadata Bar */}
            <div className="px-5 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4
                  id="modal-achievement-title"
                  className="text-sm sm:text-base font-bold text-white tracking-tight"
                >
                  {activeItem.title}
                </h4>
                <p className="text-xs text-neutral-400 uppercase tracking-[0.14em] font-medium pt-0.5">
                  {activeItem.organizer}
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium tracking-wider pt-1 sm:pt-0">
                <span>{activeItem.year}</span>
                <span className="text-neutral-700">//</span>
                <span>{activeItem.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
