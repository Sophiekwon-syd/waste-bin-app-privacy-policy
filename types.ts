import { ReactNode } from 'react';

export interface PolicySectionData {
  id: string;
  title: string;
  content: ReactNode;
}

export interface SidebarItem {
  id: string;
  label: string;
}

export interface CouncilConfig {
  id: string;
  appName: string;
  councilName: string;
  lastUpdated: string;
  contactEmail: string;
  websiteUrl?: string;
}