import React from 'react';

export type ProjectCategory = 
  | 'QA Automation' 
  | 'Backend / API' 
  | 'AI / LLM' 
  | 'Data / Analytics'
  | 'Machine Learning';

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
  deployed?: boolean;
  extendedDetails?: {
    problem: string;
    solution: string;
    results?: string;
    architecture?: string;
    contributions?: string[];
    testing?: string;
    limitations?: string;
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
  doi?: string;
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
  | 'QA & Automation'
  | 'Programming & Backend'
  | 'AI / ML / LLM'
  | 'Data & Analytics'
  | 'Tools & Infrastructure';

export interface Skill {
  name: string;
  category: SkillCategory;
  context?: string;
  level?: number;
  icon?: string;
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
}