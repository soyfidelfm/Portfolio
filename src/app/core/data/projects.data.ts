import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'sales-advisor-dashboard',
    slug: 'sales-advisor-dashboard',
    title: 'Sales Advisor Dashboard',
    description: 'Production sales tracking platform with OAuth, daily goals, and KPI metrics.',
    overview: 'The Sales Advisor Dashboard is a sales performance platform designed to track daily goals, key performance indicators, and advisor activity in real time. It provides tools for monitoring credit card applications, memberships, and overall sales performance. The platform enables advisors to track their progress and daily metrics, while management gains visibility into performance data to support better decision-making and improve productivity across retail operations.',
architecture: 'Built with Angular and .NET REST APIs using PostgreSQL in production, integrated with Microsoft OAuth for authentication and deployed using Render and Vercel for scalability.',
impactText: 'Improves visibility of sales performance, centralizes KPI tracking, and enables faster decision-making for retail teams, increasing efficiency and productivity.',
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
    id: 'yms',
    slug: 'yms',
    title: 'Yard Management System',
    description: 'Logistics platform for managing yard slots, equipment, and operations.',
    overview: 'The Yard Management System is a logistics platform designed to improve real-time visibility and control of yard operations. It provides tools for managing yard slots, trailer and equipment tracking, dock scheduling, and check-in/check-out workflows. The platform enables operators to track movements and update statuses in real time, while administrators maintain full control over yard zones, equipment, and overall logistics operations.',    
    architecture: 'Built with Angular and .NET REST APIs using PostgreSQL in production, with OAuth authentication and a scalable deployment using Render and Vercel.',    
    impactText: 'Improves visibility of sales performance, centralizes KPI tracking, and enables better decision-making for retail operations.',
    impact: [
      'Complex relational database design',
      'Real-time operational dashboard',
      'JWT / Auth0 authentication',
      'Scalable API architecture'
    ],
    tech: ['.NET', 'Angular', 'MongoDB'],
    images: [
      'assets/YMS1.png',
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
    overview: 'The Kiddy Cloud is a preschool management system designed to streamline daily operations and improve organization across educational environments. It provides tools for managing students, classroom assignments, material inventory, school activities, and a digital libraryThe platform enables teachers to manage their own classrooms and student data, while administrators maintain full control over groups, users, and overall school operations.', 
architecture: 'Built with Angular and .NET REST APIs using SQL Server, following a modular architecture with DTO-based design, role-based access control, and scalable backend services.',
impactText: 'Simplifies school administration by providing a centralized platform for teachers and administrators, improving organization, reducing manual processes, and enabling better control of daily operations.',
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