import type { Dictionary } from "./types";

export const dictionaryENG: Dictionary = {
  navbar: {
    menu: "[ Menu ]",
    close: "[ Close ]",
    items: [
      { label: "Intro", href: "#intro" },
      { label: "Works", href: "#works" },
      { label: "Achievements", href: "#achievements" },
      { label: "Organizations", href: "#organizations" },
      { label: "Contact", href: "#contact" },
    ],
  },
  intro: {
    sectionTag: "Section [02]",
    figureTag: "[ Fig. 01 ]",
    portraitLabel: "Portrait",
    headline:
      "Software Engineer & Creative Developer exploring the intersection between system clarity and visual aesthetics.",
    paragraphs: [
      "I am Muhammad Haqil Abdillah, an Informatics Engineering student at Universitas Kuningan focusing on Web Design, Web & Mobile Development, and the Internet of Things (IoT). I specialize in designing intuitive interfaces while building integrated applications using technologies such as React, Next.js, PHP, Kotlin, and Dart to deliver robust, purposeful digital solutions.",
      "Beyond software development, I actively explore hardware integrations through IoT initiatives and campus leadership roles to sharpen teamwork and organizational agility. Guided by an adaptive mindset and a relentless problem-solving focus, I am eager to embrace emerging technologies and collaborate on forward-thinking projects.",
      "To me, software engineering and visual sensibility must progress in unison. Every line of code and design decision is an intentional effort to distill complex systems into calm, efficient, and meaningful digital experiences.",
    ],
    institution: "UNIVERSITAS KUNINGAN",
    major: "INFORMATICS ENGINEERING",
  },
  works: {
    sectionTag: "Section [04]",
    title: "Selected Works",
    viewProject: "View Project",
    viewMore: "View More Works",
    viewLess: "Show Less",
    items: [
      {
        id: "jejak-karya",
        title: "Jejak Karya",
        category: "Mobile Application",
        description:
          "A mobile application for exploring and archiving fine arts and historical artifacts through integrated curation. Offers an immersive digital gallery experience featuring medium categorization, comprehensive artifact archives, and a calm, intuitive interface designed to enrich public art appreciation.",
      },
      {
        id: "informatika-umc",
        title: "Informatics Engineering Department Profile UMC",
        category: "Web Platform",
        description:
          "Design and development of the institutional profile website for the Informatics Engineering Department at Universitas Muhammadiyah Cirebon. Features a modern visual identity, academic curriculum integration, specialization facilities, and a responsive student registration flow across devices.",
      },
      {
        id: "lensa-cerdas",
        title: "Lensa Cerdas",
        category: "Mobile Application",
        description:
          "An intelligent mobile scanning and document summarization application powered by Vision AI. Combines physical document optical scanning with precise text conversion, instant key-point extraction, and an archival log for document search activities.",
      },
      {
        id: "sipas-windusengkahan",
        title: "SIPAS Desa Windusengkahan",
        category: "E-Government",
        description:
          "A web-based correspondence and administrative services system for the residents of Windusengkahan Village Hall. Delivers a transparent online letter application process, automated document drafting, and centralized village demographic records management.",
      },
      {
        id: "kasep",
        title: "KASEP — Child Health Monitoring & Posyandu Education",
        category: "Healthcare Platform",
        description:
          "A web-based digital healthcare platform for child development tracking and local community health services (Posyandu). Integrates child nutritional metric records, standardized health growth curve calculations, stunting prevention analytics, and an interactive parental education hub.",
      },
      {
        id: "cv-generator",
        title: "CV Generator",
        category: "Web Application, Document Engine",
        description:
          "A web-based application for generating standardized Curriculum Vitae (CV) automatically within minutes. Equipped with structured input forms, layout geometry calculation, and TCPDF library integration to produce clean, precise, and publication-ready PDF documents.",
      },
    ],
  },
  achievements: {
    sectionTag: "Section [05]",
    title: "Honors & Achievements",
    zoomLabel: "Enlarge",
    modalDocTag: "Achievement Documentation",
    modalDocTitle: "Achievement Documentation",
    modalClose: "Close",
    items: [
      {
        id: "achievement-01",
        year: "2026",
        title: "1st Place National Web Design Competition",
        category: "National Level",
        organizer: "Universitas Muhammadiyah Cirebon",
        description:
          "Secured 1st Place in the National Web Design Competition held during the Dies Natalis HIMASANTIKA at Universitas Muhammadiyah Cirebon. The project combined precise editorial typography, a modular design system, and a modern responsive frontend architecture. Key highlights included intuitive information hierarchy, frontend rendering optimization, and strict accessibility standards to provide a seamless, high-utility user experience.",
      },
      {
        id: "achievement-02",
        year: "2026",
        title: "2nd Place University Student Olympiad (PKM-PM)",
        category: "University Level",
        organizer: "Universitas Kuningan",
        description:
          "Achieved 2nd Place in the Student Intellectual Olympiad for the Community Service Student Creativity Program (PKM-PM) at Universitas Kuningan. Engineered an IoT Smart Composter to address water hyacinth pollution issues. Integrated microcontroller sensory telemetry for real-time temperature, moisture, and decomposition gas monitoring, transforming aquatic weed waste into high-value organic fertilizer to empower the local community.",
      },
    ],
  },
  organizations: {
    sectionTag: "Section [07]",
    title: "Organizational Experience",
    items: [
      {
        id: "org-hima-ti",
        name: "Himpunan Mahasiswa Teknik Informatika (HIMA TI)",
        roles: [
          {
            id: "hima-keorganisasian-2025",
            role: "Organizational Division — Member",
            period: "Period 2025",
            items: [
              {
                id: "hima-1",
                title: "Project Lead for Wengi Sabanda Sariksa Work Program",
                meta: "Cijoho, April 2025",
              },
              {
                id: "hima-2",
                title: "Public Relations Coordinator for Faith and Piety Night (MABIT)",
                meta: "Mushola FKOM Universitas Kuningan, June 2025",
              },
              {
                id: "hima-3",
                title: "Community Outreach - Waste Management Seminar Moderator",
                meta: "Ciputat, May 2025",
              },
              {
                id: "hima-4",
                title: "Orientation Mentor for Freshmen (PKKMB FKOM UNIKU)",
                meta: "FKOM Universitas Kuningan, September 2025",
              },
              {
                id: "hima-5",
                title:
                  "Student Mentor for Connect and Code - Department Cadre Program",
                meta: "Lempong Balong, September - October 2025",
              },
              {
                id: "hima-6",
                title:
                  "Virtual Reality and Robotics Exhibition at University PKKMB",
                meta: "Creative Economy Secretariat, June 2025",
              },
              {
                id: "hima-7",
                title:
                  "Virtual Reality Showcase at DKVest FKOM Universitas Kuningan",
                meta: "FKOM Universitas Kuningan, October 2025",
              },
              {
                id: "hima-8",
                title: "Techno Versary Organizing Committee",
                meta: "FKOM, SC Universitas Kuningan, November - December 2025",
              },
            ],
          },
          {
            id: "hima-bph-2026",
            role: "Central Executive Board — General Secretary II",
            period: "Period 2026",
          },
          {
            id: "hima-ppk-2026",
            role: "Head of PPK Ormawa HIMA TI",
            period: "Period 2026",
          },
        ],
      },
      {
        id: "org-pbk",
        name: "Paguyuban Barudak Komputer (PBK)",
        roles: [
          {
            id: "pbk-eksternal-2025",
            role: "External Relations Division — Member",
            period: "Period 2025",
            items: [
              {
                id: "pbk-1",
                title:
                  "Project Lead for Blockchain & Programming Fundamentals Seminar",
                meta: "Aula FKOM Universitas Kuningan, February 2025",
              },
              {
                id: "pbk-2",
                title: "Instructor for Internet of Things and Robotics Workshop",
                meta: "RPL Lab FKOM Universitas Kuningan, November 2025",
              },
              {
                id: "pbk-3",
                title:
                  "Instructor for VR and Robotics at Kuningan Rover Scout Camp",
                meta: "Subang, December 2025",
              },
            ],
          },
          {
            id: "pbk-akademis-2026",
            role: "Academic Division — Member",
            period: "Period 2026",
          },
        ],
      },
    ],
  },
  contact: {
    sectionTag: "Section [08]",
    inquiriesTag: "Inquiries & Collaboration",
    heading: "Let's Connect & Build Meaningful Digital Solutions Together.",
    availabilityTag: "Collaboration Availability",
    availabilityDesc:
      "Open for software engineering collaborations, web & mobile UI design, IoT system implementation, as well as internship and applied technology research opportunities.",
    emailTag: "Direct Email Inquiry",
    copyEmail: "Copy Email",
    copiedEmail: "Copied ✓",
    channels: {
      repoLabel: "Repository",
      repoName: "GitHub",
      linkedinLabel: "Professional Network",
      linkedinName: "LinkedIn",
      instaLabel: "Visual Documentation",
      instaName: "Instagram",
      locationLabel: "Location & Base",
      locationName: "Kuningan, West Java",
      locationTimezone: "Indonesia · GMT+7",
    },
  },
};
