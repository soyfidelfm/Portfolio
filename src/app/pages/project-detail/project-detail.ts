import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/data/projects.data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = PROJECTS.find(p => p.slug === slug);
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}