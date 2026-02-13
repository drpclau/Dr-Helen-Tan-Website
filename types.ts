import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export interface Condition {
  title: string;
  description: string;
  isMainInterest?: boolean;
}

export interface Procedure {
  title: string;
  description: string;
  isSpecialInterest?: boolean;
}

export interface SocialContribution {
  title: string;
  description: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
