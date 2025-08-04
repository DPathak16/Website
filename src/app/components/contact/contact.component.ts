import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ContactsService } from '../../services/contact/contact.service';
import { HttpClient } from '@angular/common/http';
// import { ExperienceService } from '../../services/experience/experience.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule]
})
export class ContactComponent {
  contactLinks: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  ngOnInit() {
    this.fetchContactLinks();
  }

  fetchContactLinks(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<{ contactLinks: any[] }>('/assets/contact/contact-data.json').subscribe(data => {
        this.contactLinks = data.contactLinks; // Assuming contactLinks is an array in the JSON
      });
    }
  }
  }

