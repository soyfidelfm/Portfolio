import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'eleaguefutbol',
    slug: 'eleaguefutbol',
    title: 'eLeagueFutbol',
    description:
      'End-to-end esports football league platform with live drafts, club operations, match tracking, and performance analytics.',
    overview:
      'eLeagueFutbol is a complete league-operations platform for competitive FC 26 seasons. Players register clubs, join live drafts, manage squads and formations, submit match results, follow rankings, and review individual and team statistics. Administrators run seasons, registrations, schedules, draft rooms, matches, notifications, and day-to-day league operations from one place instead of spreadsheets and group chats.',
    architecture:
      'Angular frontend and .NET REST APIs on PostgreSQL, organized around modular services. Auth0 handles authentication and roles. SignalR powers the live draft and in-app updates. Firebase Cloud Messaging sends push notifications, Cloudinary stores media, and Azure AI Vision reads match screenshots. The frontend ships on Vercel, the API on Render, and production data lives on Neon.',
    impactText:
      'Turns a full esports season into a single operational system, cutting manual admin work and giving managers and players real-time visibility into drafts, squads, matches, and standings.',
    impact: [
      'Live player draft with SignalR',
      'FC 26 squad and formation management',
      'Automated round-robin scheduling',
      'Match result and screenshot processing',
      'Rankings, leaderboards, and player analytics',
      'Auth0 authentication with role-based access',
      'Push notifications with Firebase Cloud Messaging',
      'Production PostgreSQL on Neon'
    ],
    tech: [
      '.NET',
      'Angular',
      'PostgreSQL',
      'SignalR',
      'Auth0',
      'Firebase',
      'Azure AI Vision'
    ],
    images: [
      'assets/eleaguefutbol-1.png',
      'assets/eleaguefutbol-2.png'
    ],
    liveUrl: 'https://eleaguefutbol.com',
    repoUrl: 'https://github.com/soyfidelfm/eLeagueFutbol'
  },
  {
    id: 'wms',
    slug: 'wms',
    title: 'Warehouse Management System',
    description:
      'Warehouse operations platform for structure, inventory, receiving, allocation, picking, packing, and shipping.',
    overview:
      'WMS is a warehouse management system built to run the core flow of one or more warehouses: physical layout, product catalog, inventory, inbound receipts, outbound orders, reservations, picking, packing, and shipments. The domain model covers warehouses, zones, locations, products, inventory allocations, purchase orders, receipts, sales orders, picking waves and tasks, packages, and shipments, so every movement can be traced instead of living in disconnected tools.',
    architecture:
      'Backend in .NET 10 and ASP.NET Core with EF Core and PostgreSQL, structured as Clean Architecture: WMS.Domain, WMS.Application, WMS.Infrastructure, and WMS.Api. The Angular client lives in Frontend/wms-web. Persistence, entity configurations, and the initial migration are already in place. The first functional module is Warehouses CRUD, then zones, locations, products, and the inbound/outbound flow.',
    impactText:
      'Gives warehouse teams a single source of truth for stock, locations, and order flow, reducing misplaced inventory, incomplete orders, and untraceable movements.',
    impact: [
      'Clean Architecture across domain, application, infrastructure, and API',
      'Domain model from warehouse layout through shipping',
      'Inventory distinguished as physical, available, reserved, and blocked',
      'Purchase, receipt, sales, picking, and shipment workflow',
      'PostgreSQL with EF Core migrations',
      'Swagger / OpenAPI for API exploration'
    ],
    tech: ['.NET 10', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Angular'],
    images: [],
    liveUrl: 'https://wms-orcin-gamma.vercel.app',
    repoUrl: 'https://github.com/soyfidelfm/WMS'
  },
  {
    id: 'yms',
    slug: 'yms',
    title: 'Yard Management System',
    description:
      'Yard logistics platform for slots, equipment, dock activity, and check-in / check-out control.',
    overview:
      'The Yard Management System gives operators real-time control of what is happening in the yard. It tracks yard slots, trailers and equipment, dock schedules, and gate check-in / check-out so a trailer is never just "somewhere on site." Supervisors see zone occupancy and movement status, while the yard team updates locations and equipment without radio-only coordination.',
    architecture:
      'Angular application in YMS-App. The current backend in Backend/ follows the same Clean Architecture as WMS (YMS.Api, YMS.Application, YMS.Domain, YMS.Infrastructure), with Docker and Render deployment files. The earlier monolithic API remains in YMS.WebApi as a reference while the platform is aligned to the newer warehouse architecture.',
    impactText:
      'Replaces informal yard tracking with a live operational picture of slots, equipment, and dock flow, shortening check-in time and reducing lost trailers.',
    impact: [
      'Clean Architecture backend aligned with WMS',
      'Yard slot and equipment tracking',
      'Dock scheduling and gate workflows',
      'Operational dashboard for live yard status',
      'Dockerized API prepared for Render'
    ],
    tech: ['.NET', 'Angular', 'PostgreSQL', 'Docker'],
    images: [
      'assets/YMS1.png',
      'assets/YMS2.png'
    ],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/YMS'
  },
  {
    id: 'sales-advisor-dashboard',
    slug: 'sales-advisor-dashboard',
    title: 'Sales Advisor Dashboard',
    description:
      'Production sales performance platform with Microsoft OAuth, daily goals, and live KPI tracking.',
    overview:
      'Sales Advisor Dashboard is used on the floor to track advisor performance against daily goals. Advisors see credit card applications, memberships, and other sales KPIs as the day progresses. Managers get a consolidated view of the team instead of waiting for end-of-day reports, which makes coaching and staffing decisions faster.',
    architecture:
      'Angular frontend and ASP.NET Core 8 API in one repository. Production data is PostgreSQL on Neon through Npgsql and EF Core. Sign-in uses Microsoft OAuth plus JWT. The client is deployed on Vercel and the API on Render.',
    impactText:
      'Puts daily sales activity in front of advisors and managers in real time, so retail teams can correct course during the shift instead of after it.',
    impact: [
      'Microsoft OAuth for corporate sign-in',
      'JWT-secured API',
      'Daily goal and KPI tracking',
      'Advisor and management views',
      'PostgreSQL production database on Neon',
      'Vercel frontend and Render API'
    ],
    tech: ['.NET', 'Angular', 'PostgreSQL', 'Microsoft OAuth', 'JWT'],
    images: [
      'assets/SAD1.png',
      'assets/SAD2.png'
    ],
    liveUrl: 'https://sad.thekiddycloud.com',
    repoUrl: 'https://github.com/soyfidelfm/SAD'
  },
  {
    id: 'kiddycloud',
    slug: 'kiddycloud',
    title: 'KiddyCloud',
    description:
      'Preschool operations platform for students, classrooms, staff roles, inventories, and school activities.',
    overview:
      'KiddyCloud is a school-operations system for preschool environments. Teachers manage their classroom roster and student information. Administrators control users, groups, catalogs, material inventory, activities, and a digital library. The goal is to keep daily school work in one application instead of scattered lists, folders, and paper forms.',
    architecture:
      'Angular frontend and .NET REST APIs on SQL Server. The backend uses DTO-based contracts, JWT authentication with refresh tokens, and role-based access so teachers and administrators only see what their role allows.',
    impactText:
      'Gives preschool staff a shared operating system for students, classrooms, and materials, reducing manual coordination between teachers and administration.',
    impact: [
      'JWT authentication with refresh tokens',
      'Role-based access for teachers and admins',
      'Classroom and student management',
      'Material inventory and digital library',
      'DTO-based API design'
    ],
    tech: ['.NET', 'Angular', 'SQL Server'],
    images: [
      'assets/kiddy1.png',
      'assets/kiddy2.png'
    ],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/KiddyCloud'
  },
  {
    id: 'kinderbooks',
    slug: 'kinderbooks',
    title: 'KinderBooks',
    description:
      'Shared book-management system for kindergartens in School Zone 61 in Nuevo Laredo.',
    overview:
      'KinderBooks was built so the kindergartens of Zona Escolar 61 can manage library books as a zone, not as isolated campuses. Schools can keep a common catalog, know which titles exist, and stop relying on paper lists or spreadsheets that never stay in sync across gardens.',
    architecture:
      'Private education-operations application in the same family as KiddyCloud. Designed as a centralized web system for multi-campus book control across a school zone.',
    impactText:
      'Gives a full school zone one catalog and inventory for kindergarten books instead of fragmented records at each campus.',
    impact: [
      'Zone-wide book catalog for multiple kindergartens',
      'Replaces per-campus spreadsheets and paper lists',
      'Built for School Zone 61 in Nuevo Laredo'
    ],
    tech: ['.NET', 'Angular'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/KinderBooks'
  },
  {
    id: 'gaspool',
    slug: 'gaspool',
    title: 'GasPool',
    description:
      'Field application for capturing and controlling serial numbers of residential gas equipment.',
    overview:
      'GasPool is an Angular application used to record serial numbers for residential gas units. The companion API, GasPoolApi, stores and exposes those records so technicians and office staff are not tracking equipment identity in chats or notebooks. It continues the idea started in ResidentialGasPool: a dedicated tool for serial control.',
    architecture:
      'Angular 17 client with an Express server for the production build, backed by a separate ASP.NET API in GasPoolApi. The split keeps field capture in the frontend and persistence/rules in the API.',
    impactText:
      'Makes equipment identity searchable and auditable, which is the baseline for warranty, service, and inventory control in residential gas work.',
    impact: [
      'Serial-number capture for residential gas units',
      'Separate Angular client and .NET API',
      'Replaces informal serial tracking'
    ],
    tech: ['Angular', '.NET', 'TypeScript'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/GasPool'
  },
  {
    id: 'jobtracker',
    slug: 'jobtracker',
    title: 'JobTracker',
    description:
      'Personal job-search CRM for applications, statuses, and follow-ups.',
    overview:
      'JobTracker keeps the job search in one system. Applications, companies, statuses, and next steps live in the app instead of a mix of email, notes, and spreadsheets. JobApplicationsApi is the dedicated backend that stores and serves those records.',
    architecture:
      'Two-repository product: JobTracker for the client experience and JobApplicationsApi for persistence and application workflows. Built to stay small, fast to update, and focused on the hiring pipeline.',
    impactText:
      'Turns a messy job search into a tracked pipeline with clear status and follow-up, the same way a sales team tracks leads.',
    impact: [
      'Centralized application pipeline',
      'Status and follow-up tracking',
      'Dedicated API for job records'
    ],
    tech: ['.NET', 'Angular'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/JobTracker'
  },
  {
    id: 'raypakaudit',
    slug: 'raypakaudit',
    title: 'RaypakAudit',
    description:
      'Structured audit tool for equipment and process reviews in a Raypak operations context.',
    overview:
      'RaypakAudit is an internal application for running audits against equipment or process checklists. Instead of collecting findings in email and paper forms, the audit lives in a system that can be revisited, compared, and completed with a consistent structure.',
    architecture:
      'Private operational application. The repository is sized as a full product rather than a prototype, and follows the same web-app approach used across the rest of the portfolio.',
    impactText:
      'Standardizes how audits are captured and reviewed, which makes findings easier to compare over time and harder to lose.',
    impact: [
      'Repeatable audit workflow',
      'Structured findings instead of ad-hoc notes',
      'Internal operations tool'
    ],
    tech: ['.NET', 'Angular'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/RaypakAudit'
  },
  {
    id: 'borderfleetsupport',
    slug: 'borderfleetsupport',
    title: 'Border Fleet Support',
    description:
      'Operations web app for employee records and truck control at Border Fleet Support.',
    overview:
      'Border Fleet Support needed a single place for people and trucks. The application keeps employee records and fleet units together so dispatch and administration are not maintaining two disconnected lists. It is an early operations system in the same logistics line that later became YMS and WMS.',
    architecture:
      'Private web application focused on employee and truck registries. Built as a practical internal tool for a fleet-support operation.',
    impactText:
      'Centralizes staff and truck data for a border logistics operation, which is the first step toward controlled yard and warehouse systems.',
    impact: [
      'Employee registry',
      'Truck and fleet record keeping',
      'Internal operations database for BFS'
    ],
    tech: ['.NET'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/BorderFleetSupport'
  },
  {
    id: 'inventorymern',
    slug: 'inventorymern',
    title: 'InventoryMERN',
    description:
      'Full-stack inventory prototype built with MongoDB, Express, React, and Node.js.',
    overview:
      'InventoryMERN is an inventory application used to practice and ship a complete MERN workflow: products, stock levels, and basic warehouse-style records on a JavaScript stack. It sits earlier in the timeline than WMS, but it is the same problem space: know what you have and where it is.',
    architecture:
      'Classic MERN architecture. MongoDB stores inventory documents, Express and Node expose the API, and React provides the operator UI.',
    impactText:
      'Demonstrates a complete inventory loop on the JavaScript stack before the later .NET warehouse platform.',
    impact: [
      'Product and stock CRUD',
      'Full MERN implementation',
      'Foundation for later WMS work'
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/InventoryMERN'
  },
  {
    id: 'logisticsapp',
    slug: 'logisticsapp',
    title: 'LogisticsApp',
    description:
      'Early logistics prototype that preceded the current yard and warehouse platforms.',
    overview:
      'LogisticsApp is the first pass at the operational problems later solved by YMS and WMS: movements, units, and control in a logistics environment. It is smaller than the current platforms, but it shows the start of the same domain.',
    architecture:
      'Private prototype repository. Treated as the precursor to the Clean Architecture YMS and WMS codebases rather than the production system.',
    impactText:
      'Established the logistics domain that later scaled into yard management and warehouse management systems.',
    impact: [
      'Early logistics domain modeling',
      'Direct predecessor to YMS and WMS'
    ],
    tech: ['.NET'],
    images: [],
    liveUrl: '',
    repoUrl: 'https://github.com/soyfidelfm/LogisticsApp'
  }
];
