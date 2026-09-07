import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => console.log('[Angular] bootstrap OK'))
  .catch((err) => console.error('[Angular] bootstrap FAILED', err));

if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('[Global]', event.message, 'at', event.filename, ':', event.lineno);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('[Unhandled]', event.reason);
  });
}
