"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";

export interface CertificateItem {
  id: string;
  index: string;
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
}

const INITIAL_LIMIT = 15;

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-juara1-web",
    index: "01",
    title: "Juara 1 Lomba Web Design Tingkat Nasional",
    issuer: "Universitas Muhammadiyah Cirebon",
    date: "Mei 2026",
    imageSrc: "/assets/images/Sertifikat/Juara-1-Lomba-Web-Design-Tingkat-Nasional-UMC.png",
  },
  {
    id: "cert-juara2-pkm",
    index: "02",
    title: "Juara 2 Lomba PKM-PM Olimpiade Mahasiswa",
    issuer: "Universitas Kuningan",
    date: "Jun 2026",
    imageSrc: "/assets/images/Sertifikat/Juara-2-Lomba-PKM-PM-UNIKU.png",
  },
  {
    id: "cert-aws-ai-academy",
    index: "03",
    title: "AWS AI Academy 2026 (Level Dasar & Pemula)",
    issuer: "AWS & Dicoding Indonesia",
    date: "Sep 2026",
    imageSrc: "/assets/images/Sertifikat/AWS-AI-Academy-2026-Basic-and-Beginner.png",
  },
  {
    id: "cert-genai-azure",
    index: "04",
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "Agu 2026",
    imageSrc: "/assets/images/Sertifikat/Membangun-Aplikasi-Gen-AI-dengan-Microsoft-Azure.png",
  },
  {
    id: "cert-ds-fabric",
    index: "05",
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "Agu 2026",
    imageSrc: "/assets/images/Sertifikat/Belajar-Penerapan-Data-Science-dengan-Microsoft-Fabric.png",
  },
  {
    id: "cert-sdd-kiro",
    index: "06",
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    date: "Agu 2026",
    imageSrc: "/assets/images/Sertifikat/Spec-Driven-Development-dengan-Kiro.png",
  },
  {
    id: "cert-ignite-2026",
    index: "07",
    title: "Panitia IoT Generation Initiative & Tech Exhibition (IGNITE)",
    issuer: "Universitas Kuningan",
    date: "Agu 2026",
    imageSrc: "/assets/images/Sertifikat/Panitia-IGNITE-2026-IoT-Generation-Initiative.png",
  },
  {
    id: "cert-pm-cihirup-2026",
    index: "08",
    title: "Panitia Pengabdian Masyarakat (Desa Cihirup)",
    issuer: "Universitas Kuningan",
    date: "Jul 2026",
    imageSrc: "/assets/images/Sertifikat/Panitia-Pengabdian-Masyarakat-Desa-Cihirup-2026.png",
  },
  {
    id: "cert-ekraf-bootcamp",
    index: "09",
    title: "Productivity with AI Bootcamp — Badan Ekraf Digital Talent 2026",
    issuer: "Badan Ekonomi Kreatif RI & Dicoding",
    date: "Mei 2026",
    imageSrc: "/assets/images/Sertifikat/Productivity-with-AI-Bootcamp-Badan-Ekraf-2026.png",
  },
  {
    id: "cert-ekraf-partisipasi",
    index: "10",
    title: "Badan Ekraf Digital Talent 2026 — Program Pelatihan",
    issuer: "Badan Ekonomi Kreatif RI & Dicoding",
    date: "Mei 2026",
    imageSrc: "/assets/images/Sertifikat/Sertifikat-Partisipasi-Badan-Ekraf-Digital-Talent-2026.png",
  },
  {
    id: "cert-dart",
    index: "11",
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026",
    imageSrc: "/assets/images/Sertifikat/Memulai-Pemrograman-dengan-Dart.png",
  },
  {
    id: "cert-mobile-dev",
    index: "12",
    title: "Belajar Dasar Pengembangan Aplikasi Mobile",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026",
    imageSrc: "/assets/images/Sertifikat/Belajar-Dasar-Pengembangan-Aplikasi-Mobile.png",
  },
  {
    id: "cert-ml-pemula",
    index: "13",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Mar 2026",
    imageSrc: "/assets/images/Sertifikat/Belajar-Machine-Learning-untuk-Pemula.png",
  },
  {
    id: "cert-python",
    index: "14",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    imageSrc: "/assets/images/Sertifikat/Memulai-Pemrograman-dengan-Python.png",
  },
  {
    id: "cert-financial",
    index: "15",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    imageSrc: "/assets/images/Sertifikat/Introduction-to-Financial-Literacy.png",
  },
  {
    id: "cert-aws-genai",
    index: "16",
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    imageSrc: "/assets/images/Sertifikat/Belajar-Dasar-Cloud-dan-Gen-AI-di-AWS.png",
  },
  {
    id: "cert-ai",
    index: "17",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    imageSrc: "/assets/images/Sertifikat/Belajar-Dasar-AI.png",
  },
  {
    id: "cert-technoversary-2025",
    index: "18",
    title: "Panitia Techno Versary 2025",
    issuer: "Universitas Kuningan",
    date: "Des 2025",
    imageSrc: "/assets/images/Sertifikat/Panitia-Techno-Versary-HIMATI-2025.png",
  },
  {
    id: "cert-pemateri-pbk-2025",
    index: "19",
    title: "Pemateri Workshop & Seminar Teknologi Digital Future Tech",
    issuer: "Paguyuban Barudak Komputer (PBK)",
    date: "Nov 2025",
    imageSrc: "/assets/images/Sertifikat/Pemateri-Workshop-Seminar-Future-Tech-PBK-2025.png",
  },
  {
    id: "cert-mentor-connect-code",
    index: "20",
    title: "Mentor Connect & Code 2025",
    issuer: "Universitas Kuningan",
    date: "Okt 2025",
    imageSrc: "/assets/images/Sertifikat/Mentor-Connect-and-Code-HIMATI-2025.png",
  },
  {
    id: "cert-panitia-connect-code",
    index: "21",
    title: "Panitia Connect & Code 2025",
    issuer: "Universitas Kuningan",
    date: "Okt 2025",
    imageSrc: "/assets/images/Sertifikat/Panitia-Connect-and-Code-HIMATI-2025.png",
  },
  {
    id: "cert-pkkmb-2025",
    index: "22",
    title: "Panitia PKKMB Fakultas Ilmu Komputer 2025",
    issuer: "Universitas Kuningan",
    date: "Sep 2025",
    imageSrc: "/assets/images/Sertifikat/Panitia-PKKMB-FKOM-Universitas-Kuningan-2025.png",
  },
  {
    id: "cert-pm-ciputat-2025",
    index: "23",
    title: "Panitia Pengabdian Masyarakat (Desa Ciputat)",
    issuer: "Universitas Kuningan",
    date: "Jun 2025",
    imageSrc: "/assets/images/Sertifikat/Panitia-Pengabdian-Masyarakat-Desa-Ciputat-2025.png",
  },
];

export default function Certifications() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const touchStartRef = useRef<number | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const openRafRef = useRef<number | null>(null);
  const lenis = useLenis();

  const activeCert = CERTIFICATES.find((c) => c.id === activeId) ?? null;

  const openModal = (cert: CertificateItem) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveId(cert.id);
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

  const toggleShowAll = () => {
    if (showAll) {
      const elem = document.getElementById("certifications");
      if (elem) {
        const rect = elem.getBoundingClientRect();
        if (rect.top < 0) {
          lenis?.scrollTo("#certifications", { offset: -60, duration: 0.8 });
        }
      }
    }
    setShowAll((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swipe left -> Next certificate
        const idx = CERTIFICATES.findIndex((c) => c.id === activeId);
        if (idx !== -1 && idx < CERTIFICATES.length - 1) {
          setActiveId(CERTIFICATES[idx + 1].id);
        }
      } else {
        // Swipe right -> Prev certificate
        const idx = CERTIFICATES.findIndex((c) => c.id === activeId);
        if (idx > 0) {
          setActiveId(CERTIFICATES[idx - 1].id);
        }
      }
    }
    touchStartRef.current = null;
  };

  useEffect(() => {
    if (!activeId) return;

    // Freeze smooth scrolling while modal is open
    lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        const idx = CERTIFICATES.findIndex((c) => c.id === activeId);
        if (idx !== -1 && idx < CERTIFICATES.length - 1) {
          setActiveId(CERTIFICATES[idx + 1].id);
        }
      } else if (e.key === "ArrowLeft") {
        const idx = CERTIFICATES.findIndex((c) => c.id === activeId);
        if (idx > 0) {
          setActiveId(CERTIFICATES[idx - 1].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeId, lenis]);

  const renderCertRow = (cert: CertificateItem) => (
    <button
      key={cert.id}
      type="button"
      onClick={() => openModal(cert)}
      className="w-full text-left py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-6 group hover:bg-neutral-50/80 active:bg-neutral-100/80 -mx-2.5 px-2.5 sm:-mx-4 sm:px-4 transition-colors duration-200 cursor-pointer"
      aria-label={`Lihat sertifikat ${cert.title}`}
    >
      <div className="flex items-start sm:items-center gap-2.5 sm:gap-5 min-w-0 flex-1">
        <span className="text-xs text-neutral-400 tracking-wider pt-0.5 sm:pt-0 shrink-0 font-medium">
          {cert.index}
        </span>
        <div className="space-y-1 min-w-0 flex-1">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors leading-snug">
            {cert.title}
          </h3>
          <p className="text-xs text-neutral-500 font-light">
            {cert.issuer}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2.5 sm:gap-4 w-full sm:w-auto pt-1 sm:pt-0 shrink-0 self-end sm:self-center">
        <span className="text-xs text-neutral-500 font-medium tracking-normal sm:tracking-wider whitespace-nowrap">
          {cert.date}
        </span>
        <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white transition-all text-neutral-950 text-xs shrink-0">
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
        </span>
      </div>
    </button>
  );

  return (
    <section
      id="certifications"
      className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-14 lg:px-16 py-12 sm:py-16 md:py-24 border-t border-neutral-200 scroll-mt-16"
    >
      {/* Section Top Indicator */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            Section [06]
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          06 / 08
        </span>
      </div>

      {/* Clean Minimalist Header: Pure Title */}
      <div className="pb-6 md:pb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
          Sertifikasi &amp; Lisensi
        </h2>
      </div>

      {/* Editorial Ledger List with Interactive Photo Previews */}
      <div className="border-t border-b border-neutral-200">
        {/* Always Visible: First 15 Certificates */}
        <div className="divide-y divide-neutral-200">
          {CERTIFICATES.slice(0, INITIAL_LIMIT).map(renderCertRow)}
        </div>

        {/* Expandable Additional Certificates with Butter-Smooth CSS Grid Animation */}
        <div
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            showAll
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {CERTIFICATES.slice(INITIAL_LIMIT).map(renderCertRow)}
            </div>
          </div>
        </div>
      </div>

      {/* Swiss Minimalist "Lihat Lebih Banyak" Toggle Button */}
      {CERTIFICATES.length > INITIAL_LIMIT && (
        <div className="pt-6 sm:pt-8 flex justify-center">
          <button
            type="button"
            onClick={toggleShowAll}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 border border-neutral-900 bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white transition-all duration-300 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium cursor-pointer"
          >
            <span>
              {showAll
                ? "Tampilkan Lebih Sedikit"
                : `Lihat Lebih Banyak (${CERTIFICATES.length - INITIAL_LIMIT} Sertifikat)`}
            </span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Modern Minimalist Certificate Preview Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className={`fixed top-16 inset-x-0 bottom-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 transition-all duration-300 ease-out overscroll-contain ${
            isModalVisible
              ? "bg-black/85 backdrop-blur-sm opacity-100"
              : "bg-black/0 backdrop-blur-none opacity-0 pointer-events-none"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={`relative w-full max-w-5xl max-h-[calc(100dvh-5rem)] flex flex-col bg-neutral-950 text-white border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
              isModalVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-2"
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3.5 py-3 sm:px-5 sm:py-3.5 border-b border-neutral-800 bg-neutral-950/95 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="inline-block bg-white text-neutral-950 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase shrink-0">
                  [{activeCert.index} / {CERTIFICATES.length}]
                </span>
                <span className="text-xs text-neutral-400 tracking-[0.14em] sm:tracking-[0.16em] uppercase truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
                  {activeCert.issuer}
                </span>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 px-1.5 sm:px-2 -mr-1 sm:-mr-2 shrink-0"
                aria-label="Tutup pratinjau sertifikat"
              >
                <span className="hidden sm:inline">Tutup</span>
                <span className="text-[10px] border border-neutral-700 px-1.5 py-0.5 text-neutral-400 font-medium hidden sm:inline">
                  ESC
                </span>
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4"
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

            {/* Modal Image Area (Uncropped high-res view + swipe support) */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-[45dvh] sm:h-[60vh] md:h-[65vh] bg-neutral-900/60 flex items-center justify-center p-2 sm:p-5 select-none touch-pan-y"
            >
              <Image
                src={activeCert.imageSrc}
                alt={activeCert.title}
                fill
                unoptimized
                className="object-contain transition-opacity duration-300 ease-out"
                priority
              />

              {/* Prev / Next Navigation Arrows */}
              {CERTIFICATES.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = CERTIFICATES.findIndex((c) => c.id === activeCert.id);
                      if (idx > 0) setActiveId(CERTIFICATES[idx - 1].id);
                    }}
                    disabled={CERTIFICATES.findIndex((c) => c.id === activeCert.id) === 0}
                    className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    aria-label="Sertifikat sebelumnya"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
                      const idx = CERTIFICATES.findIndex((c) => c.id === activeCert.id);
                      if (idx < CERTIFICATES.length - 1) setActiveId(CERTIFICATES[idx + 1].id);
                    }}
                    disabled={
                      CERTIFICATES.findIndex((c) => c.id === activeCert.id) ===
                      CERTIFICATES.length - 1
                    }
                    className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                    aria-label="Sertifikat berikutnya"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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

            {/* Modal Bottom Metadata Bar (Clean: Pure Title and Issuer) */}
            <div className="px-4 py-3 sm:px-5 sm:py-4 border-t border-neutral-800 bg-neutral-950 shrink-0">
              <h4
                id="modal-cert-title"
                className="text-xs sm:text-base font-bold text-white tracking-tight leading-snug line-clamp-2 sm:line-clamp-none"
              >
                {activeCert.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 font-light pt-0.5">
                {activeCert.issuer}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
