import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/data/projects.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  projects = PROJECTS.slice(0, 3);
  constructor(private router: Router) {}
  goToProject(slug: string): void {
  this.router.navigate(['/projects', slug]);
}

}