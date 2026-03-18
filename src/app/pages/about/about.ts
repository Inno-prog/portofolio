import { Component } from '@angular/core';
import { About as AboutComponent } from '../../components/about/about';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent],
  template: `<div class="pt-20"><app-about /></div>`,
})
export class About {}
