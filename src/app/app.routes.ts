import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';

import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about').then(m => m.AboutComponent)
      },

      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:slug', component: ProjectDetailComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },

  // fallback
  { path: '**', redirectTo: '' }
];