import { Component } from '@angular/core';
import { Contact as ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `<div class="pt-20"><app-contact /></div>`,
})
export class Contact {}
