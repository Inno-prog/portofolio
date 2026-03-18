import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects = signal<Project[]>([]);
  filter = signal<'all' | 'featured'>('all');

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(p => this.projects.set(p));
  }

  get filteredProjects() {
    return this.filter() === 'featured'
      ? this.projects().filter(p => p.featured)
      : this.projects();
  }
}
