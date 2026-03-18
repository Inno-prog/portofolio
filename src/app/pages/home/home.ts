import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero],
  template: `<app-hero />`,
})
export class Home {}
