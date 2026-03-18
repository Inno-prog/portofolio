import { Component } from '@angular/core';
import { Projects as ProjectsComponent } from '../../components/projects/projects';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsComponent],
  template: `<div class="pt-20"><app-projects /></div>`,
})
export class Projects {}
