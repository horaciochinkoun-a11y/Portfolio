/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  context: string;
  problem: string;
  approach: string;
  promptEngineering: {
    title: string;
    description: string;
    promptText: string;
  }[];
  challenges: string[];
  solutions: string[];
  statusDetail: string;
  valueAdded: string;
  useCases: string[];
  skillsDemonstrated: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  type: 'primary' | 'secondary';
  technologies: string[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  iconName: string; // Used to select Lucide icons dynamically
  caseStudy?: CaseStudy;
}

export interface Skill {
  name: string;
  category: 'direct' | 'tech'; // direct = "Ce que je dirige" (leadership/cadrage), tech = "Technos avec lesquelles je travaille"
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  details: string[];
}
