import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'sales-advisor-dashboard',
    slug: 'sales-advisor-dashboard',
    title: 'Sales Advisor Dashboard',
    description: 'Production sales tracking platform with OAuth, daily goals, and KPI metrics.',
    impact: [
      'Microsoft OAuth integration',
      'Daily sales KPI tracking',
      'PostgreSQL in production',
      'Deployed with Render + Vercel'
    ],
    tech: ['.NET', 'Angular', 'PostgreSQL'],
      images: [
    'assets/SAD1.png',
  'assets/SAD2.png'
  ],
    liveUrl: 'https://sad.thekiddycloud.com', // cambia luego
    repoUrl: 'https://github.com/soyfidelfm/SAD'
  },
  {
    id: 'yard-management-system',
    slug: 'yard-management-system',
    title: 'Yard Management System',
    description: 'Logistics platform for managing yard slots, equipment, and operations.',
    impact: [
      'Complex relational database design',
      'Real-time operational dashboard',
      'JWT / Auth0 authentication',
      'Scalable API architecture'
    ],
    tech: ['.NET', 'Angular', 'SQL Server'],
    images: [
      'assets/projects/yms-1.png',
      'assets/projects/yms-2.png'
    ],
    liveUrl: 'https://sad.thekiddycloud.com', // cambia luego
    repoUrl: 'https://github.com/soyfidelfm/YMS'
  },
  {
    id: 'kiddycloud',
    slug: 'kiddycloud',
    title: 'KiddyCloud',
    description: 'Admin platform for user management, catalogs, and authentication workflows.',
    impact: [
      'JWT authentication + refresh tokens',
      'DTO-based API design',
      'User and role management',
      'Modular Angular frontend'
    ],
    tech: ['.NET', 'Angular', 'SQL Server'],
    images: [
      'assets/projects/kiddy.png'
    ],
    liveUrl: 'https://sad.thekiddycloud.com', // cambia luego
    repoUrl: ''
  }
];