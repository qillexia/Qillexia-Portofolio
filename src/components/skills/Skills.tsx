import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiKotlin,
  SiDart,
  SiNodedotjs,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiSupabase,
  SiGit,
  SiPostman,
  SiAndroidstudio,
  SiEspressif,
  SiCplusplus,
  SiOpenrouter,
  SiAcode,
  SiCodeceptjs,
  SiPlatformio,
} from "@icons-pack/react-simple-icons";

interface SkillItem {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
}

interface SkillCategory {
  index: string;
  title: string;
  items: SkillItem[];
  isWide?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    index: "01",
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    index: "02",
    title: "Mobile",
    items: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    index: "03",
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    index: "04",
    title: "IoT & Embedded",
    items: [
      { name: "ESP32", icon: SiEspressif },
      { name: "PlatformIO", icon: SiPlatformio },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    index: "05",
    title: "Tools & Dev",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "9Router", icon: SiOpenrouter },
      { name: "Antigraviy", icon: SiAcode },
      { name: "VS Code", icon: SiCodeceptjs },
    ],
    isWide: true,
  },
];

export default function Skills() {
  const renderItem = (item: SkillItem) => {
    const Icon = item.icon;
    return (
      <div
        key={item.name}
        className="py-2.5 flex items-center justify-between group/item"
      >
        <div className="flex items-center gap-3 min-w-0">
          <Icon
            size={16}
            className="shrink-0 text-neutral-400 group-hover/item:text-neutral-950 transition-colors"
          />
          <span className="text-sm font-medium text-neutral-800 group-hover/item:text-neutral-950 transition-colors truncate">
            {item.name}
          </span>
        </div>
        <span className="w-1.5 h-1.5 bg-neutral-200 group-hover/item:bg-neutral-950 transition-colors shrink-0 ml-2" />
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-16 md:py-24 border-t border-neutral-200 scroll-mt-16"
    >
      {/* Section Top Indicator */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center">
          <span className="inline-block bg-neutral-950 text-white px-2.5 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
            Section [03]
          </span>
        </div>
        <span className="text-xs text-neutral-400 tracking-[0.18em]">
          03 / 08
        </span>
      </div>

      {/* Clean Minimalist Header */}
      <div className="pb-6 md:pb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
          Keahlian Teknis
        </h2>
      </div>

      {/* Structured Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-6 md:pt-10">
        {SKILL_CATEGORIES.map((category) => (
          <article
            key={category.index}
            className={`border border-neutral-200 hover:border-neutral-900 transition-colors duration-300 p-6 sm:p-8 bg-white flex flex-col justify-between ${
              category.isWide ? "lg:col-span-2" : ""
            }`}
          >
            <div>
              {/* Category Header Bar */}
              <div className="flex items-baseline justify-between pb-4 border-b border-neutral-200">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-950">
                  {category.title}
                </h3>
                <span className="text-xs text-neutral-400 tracking-[0.16em]">
                  {category.index}
                </span>
              </div>

              {/* Items List */}
              {category.isWide ? (
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y sm:divide-y-0 divide-neutral-100">
                  <div className="divide-y divide-neutral-100">
                    {category.items
                      .slice(0, Math.ceil(category.items.length / 2))
                      .map((item) => renderItem(item))}
                  </div>
                  <div className="divide-y divide-neutral-100">
                    {category.items
                      .slice(Math.ceil(category.items.length / 2))
                      .map((item) => renderItem(item))}
                  </div>
                </div>
              ) : (
                <div className="pt-4 divide-y divide-neutral-100">
                  {category.items.map((item) => renderItem(item))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
