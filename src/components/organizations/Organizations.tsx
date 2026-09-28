"use client";

import Image from "next/image";
import { useLanguage } from "@/context";

export interface OrgActivityItem {
  id: string;
  title: string;
  meta?: string;
}

export interface OrgRoleBlock {
  id: string;
  role: string;
  period: string;
  items?: OrgActivityItem[];
}

export interface OrganizationRecord {
  id: string;
  name: string;
  logoSrc?: string;
  roles: OrgRoleBlock[];
}

export const ORGANIZATIONS: OrganizationRecord[] = [
  {
    id: "org-hima-ti",
    name: "Himpunan Mahasiswa Teknik Informatika (HIMA TI)",
    logoSrc: "/assets/images/HIMATI.png",
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
            title: "Mentor Peserta Connect and Code - Kaderisasi Mahasiswa baru Program Studi",
            meta: "Lempong Balong, September - Oktober 2025",
          },
          {
            id: "hima-6",
            title: "Pameran Virtual Reality dan Robotika PKKMB Universitas Kuningan",
            meta: "Sekretariat Ekraf, Juni 2025",
          },
          {
            id: "hima-7",
            title: "Pameran Virtual Reality di DKVest FKOM Universitas Kuningan",
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
    logoSrc: "/assets/images/PBK.png",
    roles: [
      {
        id: "pbk-eksternal-2025",
        role: "Divisi Hubungan Eksternal — Anggota",
        period: "Periode 2025",
        items: [
          {
            id: "pbk-1",
            title: "Ketua Pelaksana Seminar Blockhain dan Fundamental Pemrograman",
            meta: "Aula FKOM Universitas Kuningan, Februari 2025",
          },
          {
            id: "pbk-2",
            title: "Pemateri Workshop Internet Of Things dan Robotika",
            meta: "Lab RPL FKOM Universitas Kuningan, November 2025",
          },
          {
            id: "pbk-3",
            title: "Pemateri Virtual Reality dan Robotika Perkemahan Wirakarya Kuningan",
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
];

interface OrganizationsProps {
  items?: OrganizationRecord[];
}

export default function Organizations({ items: itemsProp }: OrganizationsProps) {
  const { t } = useLanguage();

  const baseItems = itemsProp || ORGANIZATIONS;
  const items = baseItems.map((org) => {
    const orgTranslation = t.organizations.items.find((tOrg) => tOrg.id === org.id);
    if (!orgTranslation) return org;

    return {
      ...org,
      name: orgTranslation.name,
      roles: org.roles.map((roleBlock) => {
        const roleTranslation = orgTranslation.roles.find((r) => r.id === roleBlock.id);
        if (!roleTranslation) return roleBlock;

        return {
          ...roleBlock,
          role: roleTranslation.role,
          period: roleTranslation.period,
          items: roleBlock.items?.map((actItem) => {
            const itemTranslation = roleTranslation.items?.find((i) => i.id === actItem.id);
            return {
              ...actItem,
              title: itemTranslation?.title ?? actItem.title,
              meta: itemTranslation?.meta ?? actItem.meta,
            };
          }),
        };
      }),
    };
  });

  return (
    <section
      id="organizations"
      className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-16 md:py-24 border-t border-neutral-200 scroll-mt-16"
    >
      {/* Section Top Indicator */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            {t.organizations.sectionTag}
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          07 / 08
        </span>
      </div>

      {/* Clean Minimalist Header: Pure Title without extra sub-labels or descriptions */}
      <div className="pb-6 md:pb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
          {t.organizations.title}
        </h2>
      </div>

      {/* 2 Main Organizations Container */}
      <div className="space-y-8 md:space-y-10 pt-10 md:pt-14">
        {items.map((org) => (
          <article
            key={org.id}
            className="border border-neutral-200 hover:border-neutral-900 transition-colors duration-300 p-5 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 bg-white"
          >
            {/* Organization Header */}
            <div className="pb-5 sm:pb-6 border-b border-neutral-200 flex items-center gap-4 sm:gap-5">
              {org.logoSrc && (
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 shrink-0">
                  <Image
                    src={org.logoSrc}
                    alt={org.name}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-neutral-950">
                {org.name}
              </h3>
            </div>

            {/* Roles and Points (Unified in the exact same flow) */}
            <div className="space-y-6 pt-2">
              {org.roles.map((roleBlock) => (
                <div key={roleBlock.id} className="space-y-3">
                  {/* Role & Period Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pb-2.5 border-b border-neutral-200">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-neutral-950" />
                      <h4 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
                        {roleBlock.role}
                      </h4>
                    </div>
                    <span className="text-xs font-medium text-neutral-600 tracking-wider pl-4 sm:pl-0">
                      {roleBlock.period}
                    </span>
                  </div>

                  {/* Bullet Points List if present */}
                  {roleBlock.items && roleBlock.items.length > 0 && (
                    <div className="divide-y divide-neutral-100 pl-0 sm:pl-4">
                      {roleBlock.items.map((item, idx) => (
                        <div
                          key={item.id}
                          className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-6 group hover:bg-neutral-50/80 -mx-3 px-3 transition-colors rounded-sm"
                        >
                          <div className="flex items-start gap-3 min-w-0 flex-1">
                            <span className="text-xs text-neutral-400 mt-0.5 shrink-0 w-4 inline-block">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="space-y-1 min-w-0 flex-1">
                              <span className="text-sm sm:text-[15px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors leading-snug block">
                                {item.title}
                              </span>
                              {item.meta && (
                                <div className="sm:hidden text-xs text-neutral-500 font-light tracking-wide">
                                  {item.meta}
                                </div>
                              )}
                            </div>
                          </div>

                          {item.meta && (
                            <div className="hidden sm:block shrink-0 text-xs text-neutral-500 font-light tracking-wide sm:text-right">
                              {item.meta}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
