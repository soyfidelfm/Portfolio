export interface Project {
  id: string;
  slug: string;          // para ruta /projects/:slug
  title: string;
  description: string;
  overview?: string;    // descripción más detallada para la página de detalles
  architecture?: string; // detalles técnicos y arquitectura del proyecto
  impactText?: string;   // texto introductorio para la sección de impacto
  impact: string[];      // resultados medibles
  tech: string[];
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
}