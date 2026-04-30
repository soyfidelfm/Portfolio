export interface Project {
  id: string;
  slug: string;          // para ruta /projects/:slug
  title: string;
  description: string;
  impact: string[];      // resultados medibles
  tech: string[];
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
}