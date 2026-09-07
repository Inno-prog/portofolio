import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { I18nService } from '../../services/i18n.service';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AnimateOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public i18n: I18nService) {}

  form = { name: '', email: '', subject: '', message: '' };
  sending = signal(false);
  success = signal(false);
  error = signal(false);

  socials = [
    { icon: '🐙', label: 'GitHub', desc: 'github.com/Inno-prog', url: 'https://github.com/Inno-prog' },
    { icon: '🔗', label: 'LinkedIn', desc: 'Innocent DEMBELE', url: 'https://www.linkedin.com/in/innocent-d-266b97302/' },
    { icon: '💬', label: 'WhatsApp', desc: 'Me contacter directement', url: 'https://wa.me/qr/UYCVF3ADDIURN1' },
    { icon: '📧', label: 'Email', desc: 'dembeleinnocent440@gmail.com', url: 'mailto:dembeleinnocent440@gmail.com' },
  ];

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    this.form.name,
          from_email:   this.form.email,
          subject:      this.form.subject || 'Message depuis le portfolio',
          message:      this.form.message,
          to_email:     'dembeleinnocent440@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      this.success.set(true);
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.success.set(false), 4000);
    } catch {
      this.error.set(true);
      setTimeout(() => this.error.set(false), 4000);
    } finally {
      this.sending.set(false);
    }
  }
}
