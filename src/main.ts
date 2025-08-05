import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // ✅ NEW
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstrap the Angular application
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()) // ✅ Modern HttpClient setup
  ]
})
.then(() => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 5800);
  }
})
.catch((err) => console.error(err));
