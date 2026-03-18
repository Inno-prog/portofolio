import { Component } from '@angular/core';
import { Experience as ExperienceComponent } from '../../components/experience/experience';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [ExperienceComponent],
  template: `<div class="pt-20"><app-experience /></div>`,
})
export class Experience {}
