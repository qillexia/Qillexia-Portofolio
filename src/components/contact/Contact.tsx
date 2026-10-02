"use client";

import { useState } from "react";
import { useLanguage } from "@/context";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddress = "haqilabdillah@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="min-h-0 md:min-h-screen max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-10 sm:py-12 md:py-16 border-t border-neutral-200 flex flex-col justify-between scroll-mt-16"
    >
      {/* Section Top Indicator (Anchored at Top) */}
      <div className="flex items-center justify-between pb-5 md:pb-6">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {t.contact.sectionTag}
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          08 / 08
        </span>
      </div>

      {/* Main Editorial Body (Vertically Balanced / Centered in Fullscreen) */}
      <div className="my-0 md:my-auto py-4 md:py-8 space-y-6 sm:space-y-8 md:space-y-14 w-full">
        {/* Editorial Headline & Narrative (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <span className="text-[10px] tracking-[0.24em] uppercase text-neutral-400 font-medium block">
              {t.contact.inquiriesTag}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-neutral-950 leading-[1.1]">
              {t.contact.heading}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3 pt-1 lg:pt-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
              {t.contact.availabilityTag}
            </span>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed text-justify">
              {t.contact.availabilityDesc}
            </p>
          </div>
        </div>

        {/* Prominent Full-Width Email Bar */}
        <div className="py-5 sm:py-7 md:py-10 border-y border-neutral-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
              {t.contact.emailTag}
            </span>
            <a
              href={`mailto:${emailAddress}`}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 hover:opacity-60 transition-opacity break-all block leading-tight"
            >
              {emailAddress}
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto self-stretch sm:self-start lg:self-auto inline-flex items-center justify-center border border-neutral-950 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <span>{copied ? t.contact.copiedEmail : t.contact.copyEmail}</span>
          </button>
        </div>
      </div>

      {/* Mobile-Only Symmetrical Channels Ledger */}
      <div className="md:hidden border-t border-neutral-200 divide-y divide-neutral-100 w-full pt-1">
        {/* GitHub */}
        <a
          href="https://github.com/qillexia"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex items-center justify-between group hover:bg-neutral-50/80 active:bg-neutral-100/80 transition-colors"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <svg className="w-4 h-4 fill-neutral-950 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="text-xs font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
              {t.contact.channels.repoName}
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-light tracking-wide shrink-0 pl-3">
            @qillexia
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/haqil-abdillah-b5bb49313?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex items-center justify-between group hover:bg-neutral-50/80 active:bg-neutral-100/80 transition-colors"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <svg className="w-4 h-4 fill-neutral-950 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span className="text-xs font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
              {t.contact.channels.linkedinName}
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-light tracking-wide shrink-0 pl-3">
            Muhammad Haqil Abdillah
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/haqilabd"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex items-center justify-between group hover:bg-neutral-50/80 active:bg-neutral-100/80 transition-colors"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <svg className="w-4 h-4 stroke-neutral-950 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="text-xs font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
              {t.contact.channels.instaName}
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-light tracking-wide shrink-0 pl-3">
            @haqilabd
          </span>
        </a>

        {/* Location / Base */}
        <div className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <svg className="w-4 h-4 stroke-neutral-950 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-xs font-bold tracking-tight text-neutral-950">
              {t.contact.channels.locationName}
            </span>
          </div>
          <span className="text-xs text-neutral-500 font-light tracking-wide shrink-0 pl-3">
            {t.contact.channels.locationTimezone}
          </span>
        </div>
      </div>

      {/* Direct Channels Grid: 2 cols on tablet (md), 4 cols on desktop (lg) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full pt-6 border-t border-neutral-200">
        {/* GitHub */}
        <div className="space-y-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            {t.contact.channels.repoLabel}
          </span>
          <a
            href="https://github.com/qillexia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-[0.06em] text-neutral-950 hover:opacity-60 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>{t.contact.channels.repoName}</span>
          </a>
          <span className="text-xs text-neutral-400 font-light block">
            @qillexia
          </span>
        </div>

        {/* LinkedIn */}
        <div className="space-y-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            {t.contact.channels.linkedinLabel}
          </span>
          <a
            href="https://linkedin.com/in/haqilabdillah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-[0.06em] text-neutral-950 hover:opacity-60 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>{t.contact.channels.linkedinName}</span>
          </a>
          <span className="text-xs text-neutral-400 font-light block">
            Muhammad Haqil Abdillah
          </span>
        </div>

        {/* Instagram */}
        <div className="space-y-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            {t.contact.channels.instaLabel}
          </span>
          <a
            href="https://instagram.com/haqilabd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-[0.06em] text-neutral-950 hover:opacity-60 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 shrink-0 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>{t.contact.channels.instaName}</span>
          </a>
          <span className="text-xs text-neutral-400 font-light block">
            @haqilabd
          </span>
        </div>

        {/* Location / Base */}
        <div className="space-y-1.5">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            {t.contact.channels.locationLabel}
          </span>
          <div className="text-sm font-semibold tracking-[0.04em] text-neutral-950 inline-flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{t.contact.channels.locationName}</span>
          </div>
          <span className="text-xs text-neutral-400 font-light block">
            {t.contact.channels.locationTimezone}
          </span>
        </div>
      </div>
    </footer>
  );
}
