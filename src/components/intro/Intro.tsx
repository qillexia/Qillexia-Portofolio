"use client";

import Image from "next/image";
import { useLanguage } from "@/context";

interface IntroProps {
  headline?: string;
  imageSrc?: string;
}

export default function Intro({
  headline,
  imageSrc = "/assets/images/PasPhoto.webp",
}: IntroProps) {
  const { lang, t } = useLanguage();
  const displayHeadline = headline || t.intro.headline;

  return (
    <section
      id="intro"
      className="min-h-screen max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 flex flex-col justify-between py-12 md:py-16 scroll-mt-16"
    >
      {/* Section Top Indicator aligned with Section bounds */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {t.intro.sectionTag}
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          02 / 08
        </span>
      </div>

      {/* Main Intro Body: Portrait on Left & Gambaran Diri on Right */}
      <div className="w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[410px_1fr] xl:grid-cols-[430px_1fr] gap-8 lg:gap-12 xl:gap-14 items-start w-full">
          {/* Portrait Column */}
          <div className="w-full max-w-[410px] xl:max-w-[430px] space-y-2.5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <Image
                src={imageSrc}
                alt="Portrait"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium pt-1">
              <span>{t.intro.figureTag}</span>
              <span>{t.intro.portraitLabel}</span>
            </div>
          </div>

          {/* Gambaran Diri Column (Sejajar presisi dengan tepi atas dan bawah foto) */}
          <div className="space-y-5 w-full -mt-1 lg:-mt-1.5">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[38px] font-bold tracking-[-0.03em] leading-[1.2] text-neutral-950">
              {displayHeadline}
            </h2>

            {/* Teks narasi profil */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed tracking-normal text-justify">
              {lang === "ENG" ? (
                <>
                  <p>
                    I am{" "}
                    <span className="text-neutral-950 font-medium">
                      Muhammad Haqil Abdillah
                    </span>
                    , an Informatics Engineering student at Universitas Kuningan
                    focusing on{" "}
                    <span className="text-neutral-950 font-medium">
                      Web Design
                    </span>
                    ,{" "}
                    <span className="text-neutral-950 font-medium">
                      Web &amp; Mobile Development
                    </span>
                    , and the{" "}
                    <span className="text-neutral-950 font-medium">
                      Internet of Things (IoT)
                    </span>
                    . I specialize in designing intuitive interfaces while building
                    integrated applications using technologies such as React,
                    Next.js, PHP, Kotlin, and Dart to deliver robust, purposeful
                    digital solutions.
                  </p>
                  <p>
                    Beyond software development, I actively explore hardware
                    integrations through IoT initiatives and campus leadership roles
                    to sharpen teamwork and organizational agility. Guided by an
                    adaptive mindset and a relentless problem-solving focus, I am
                    eager to embrace emerging technologies and collaborate on
                    forward-thinking projects.
                  </p>
                  <p>
                    To me, software engineering and visual sensibility must
                    progress in unison. Every line of code and design decision is an
                    intentional effort to distill complex systems into calm,
                    efficient, and meaningful digital experiences.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Saya{" "}
                    <span className="text-neutral-950 font-medium">
                      Muhammad Haqil Abdillah
                    </span>
                    , mahasiswa Teknik Informatika Universitas Kuningan yang
                    berfokus pada bidang{" "}
                    <span className="text-neutral-950 font-medium">
                      Web Design
                    </span>
                    ,{" "}
                    <span className="text-neutral-950 font-medium">
                      Web &amp; Mobile Development
                    </span>
                    , serta{" "}
                    <span className="text-neutral-950 font-medium">
                      Internet of Things (IoT)
                    </span>
                    . Saya terbiasa merancang antarmuka yang intuitif sekaligus
                    membangun aplikasi terintegrasi menggunakan teknologi seperti
                    React, Next.js, PHP, Kotlin, dan Dart untuk menghasilkan
                    solusi digital yang fungsional.
                  </p>
                  <p>
                    Selain pengembangan perangkat lunak, saya juga mengeksplorasi
                    integrasi perangkat keras dalam proyek berbasis IoT serta aktif
                    dalam kegiatan organisasi kampus guna mengasah kepemimpinan dan
                    kolaborasi tim. Dengan pendekatan yang adaptif dan fokus pada
                    penyelesaian masalah (<em>problem solving</em>), saya selalu
                    antusias mempelajari teknologi baru serta berkolaborasi dalam
                    berbagai proyek pengembangan.
                  </p>
                  <p>
                    Bagi saya, rekayasa perangkat lunak dan kepekaan visual harus
                    berjalan selaras. Setiap baris kode dan keputusan desain
                    merupakan proses terencana untuk menyaring kerumitan sistem
                    menjadi solusi digital yang tenang, efisien, dan bernilai
                    guna.
                  </p>
                </>
              )}
            </div>

            {/* Stamp Box + Download CV: row on desktop, stacked full-width on mobile */}
            <div className="pt-3.5 flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-5 w-full lg:w-auto">
              {/* Editorial Stamp Box */}
              <div className="w-full sm:w-auto border border-neutral-950 px-5 py-3 sm:px-6 sm:py-3.5">
                <div className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-neutral-950 uppercase leading-none">
                  {t.intro.institution}
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.15em] text-neutral-500 uppercase mt-2 leading-none whitespace-nowrap">
                  {t.intro.major}
                </div>
              </div>

              {/* Download CV Button */}
              <a
                href="/assets/CV/CV Muhammad Haqil Abdillah.pdf"
                download="CV Muhammad Haqil Abdillah.pdf"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 px-5 py-3 sm:px-6 sm:py-3.5 text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-neutral-600 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                {t.intro.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
