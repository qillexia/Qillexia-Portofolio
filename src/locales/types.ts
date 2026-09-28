export type Language = "ID" | "ENG";

export interface NavItemTranslation {
  label: string;
  href: string;
}

export interface AchievementItemTranslation {
  id: string;
  year: string;
  title: string;
  category: string;
  organizer: string;
  description: string;
}

export interface OrgActivityItemTranslation {
  id: string;
  title: string;
  meta?: string;
}

export interface OrgRoleBlockTranslation {
  id: string;
  role: string;
  period: string;
  items?: OrgActivityItemTranslation[];
}

export interface OrganizationRecordTranslation {
  id: string;
  name: string;
  roles: OrgRoleBlockTranslation[];
}

export interface CertificateItemTranslation {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface ProjectItemTranslation {
  id: string;
  title?: string;
  category?: string;
  description: string;
}

export interface Dictionary {
  navbar: {
    menu: string;
    close: string;
    items: NavItemTranslation[];
  };
  intro: {
    sectionTag: string;
    figureTag: string;
    portraitLabel: string;
    headline: string;
    paragraphs: string[];
    institution: string;
    major: string;
  };
  works: {
    sectionTag: string;
    title: string;
    viewProject: string;
    viewMore: string;
    viewLess: string;
    items: ProjectItemTranslation[];
  };
  achievements: {
    sectionTag: string;
    title: string;
    zoomLabel: string;
    modalDocTag: string;
    modalDocTitle: string;
    modalClose: string;
    items: AchievementItemTranslation[];
  };
  certifications: {
    sectionTag: string;
    title: string;
    showMore: string;
    showLess: string;
    viewCertificate: string;
    prevCertificate: string;
    nextCertificate: string;
    closeModal: string;
    items: CertificateItemTranslation[];
  };
  organizations: {
    sectionTag: string;
    title: string;
    items: OrganizationRecordTranslation[];
  };
  contact: {
    sectionTag: string;
    inquiriesTag: string;
    heading: string;
    availabilityTag: string;
    availabilityDesc: string;
    emailTag: string;
    copyEmail: string;
    copiedEmail: string;
    channels: {
      repoLabel: string;
      repoName: string;
      linkedinLabel: string;
      linkedinName: string;
      instaLabel: string;
      instaName: string;
      locationLabel: string;
      locationName: string;
      locationTimezone: string;
    };
  };
}
