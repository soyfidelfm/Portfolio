import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}

  open(): void {
    this.router.navigate(['/projects', this.project.slug]);
  }
}