import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { ExperienceService } from '../../services/experience/experience.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceData: Record<string, any> = {}; // Use a more specific type for better type safety

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchExperienceData();
  }

  /**
   * Fetches experience data from the service and handles the response.
   */
  fetchExperienceData(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get('assets/experience/experience-data.json').subscribe(data => {
        this.experienceData = data;
      });
    }
  }

  /**
   * Retrieves the list of countries from the experience data.
   * @returns An array of country keys.
   */
  getCountries(): string[] {
    return Object.keys(this.experienceData || {}); // Ensure it handles undefined/null gracefully
  }
}
