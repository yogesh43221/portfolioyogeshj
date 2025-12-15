import React from 'react';

export type ProjectCategory = 
  | 'AI / LLM / NLP Systems' 
  | 'Machine Learning Systems' 
  | 'Backend & API Development' 
  | 'Data Analytics & Business Intelligence';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  link?: string;
  github: string;
  image: string;
  impact?: string; // Optional field for specific impact metrics
  tags?: string[]; // New field for filtering tags (e.g., 'LLM', 'Deployment')
  featured?: boolean; // Added to highlight top projects
  extendedDetails?: {
    problem: string;
    solution: string;
    results: string;
    architecture?: string; // Added for top projects
  };
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
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
  context?: string; // Added context for how skill is used
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