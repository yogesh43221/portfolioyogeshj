import React from 'react';

export type ProjectCategory = 
  | 'AI / LLM / NLP Systems' 
  | 'Machine Learning Systems' 
  | 'Backend & API Development' 
  | 'Data Analytics & Business Intelligence'
  | 'QA & Systems Engineering';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  link?: string;
  github: string;
  image: string;
  impact?: string; 
  tags?: string[]; 
  featured?: boolean;
  extendedDetails?: {
    problem: string;
    solution: string;
    results: string;
    architecture?: string;
    contributions?: string[]; // Added for specific contribution bullets
  };
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  modularAchievements: {
    title: string;
    iconType: 'engineering' | 'data' | 'qa' | 'systems' | 'research' | 'analytics';
    points: string[];
  }[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Publication {
  id: number;
  title: string;
  conference: string;
  year: string;
  summary: string;
  link: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export type SkillCategory = 
  | 'AI & LLMs'
  | 'Machine Learning'
  | 'Data Analysis'
  | 'Backend & APIs'
  | 'Tools & Platforms';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: SkillCategory;
  context?: string; 
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}