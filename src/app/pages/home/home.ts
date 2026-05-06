import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../core/data/projects.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCardComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  projects = PROJECTS.slice(0, 3);
}