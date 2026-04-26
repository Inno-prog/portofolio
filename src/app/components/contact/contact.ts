import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
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
    setTimeout(() => {
      this.success.set(true);
      this.sending.set(false);
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.success.set(false), 4000);
    }, 1000);
  }
}
