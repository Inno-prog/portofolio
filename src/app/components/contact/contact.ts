import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio';
import { ContactMessage } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form: ContactMessage = { name: '', email: '', subject: '', message: '' };
  sending = signal(false);
  success = signal(false);
  error = signal<string | null>(null);

  constructor(private portfolioService: PortfolioService) {}

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    this.error.set(null);
    this.portfolioService.sendContact(this.form).subscribe({
      next: () => {
        this.success.set(true);
        this.sending.set(false);
        this.form = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => this.success.set(false), 5000);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Erreur de connexion. Vérifiez que le backend est en cours d\'exécution.');
        this.sending.set(false);
        setTimeout(() => this.error.set(null), 8000);
      },
    });
  }
}
