import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { I18nService } from '../../services/i18n.service';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AnimateOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(public i18n: I18nService, private portfolio: PortfolioService) {}

  form = { name: '', email: '', subject: '', message: '' };
  sending = signal(false);
  success = signal(false);

  socials = [
    { icon: '🐙', label: 'GitHub', desc: 'github.com/Inno-prog', url: 'https://github.com/Inno-prog' },
    { icon: '🔗', label: 'LinkedIn', desc: 'Innocent DEMBELE', url: 'https://www.linkedin.com/in/innocent-d-266b97302/' },
    { icon: '💬', label: 'WhatsApp', desc: 'Me contacter directement', url: 'https://wa.me/qr/UYCVF3ADDIURN1' },
    { icon: '📧', label: 'Email', desc: 'dembeleinnocent440@gmail.com', url: 'mailto:dembeleinnocent440@gmail.com' },
  ];

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    this.portfolio.sendContact(this.form).subscribe({
      next: () => {
        this.success.set(true);
        this.sending.set(false);
        this.form = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => this.success.set(false), 4000);
      },
      error: () => {
        this.sending.set(false);
      }
    });
  }
}
