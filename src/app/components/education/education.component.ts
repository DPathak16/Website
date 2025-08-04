import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EducationService } from '../../services/education/education.service';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationData: Record<string, Array<any>> = {}; // Updated type to match the JSON structure

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEducationData();
  }

  /**
   * Fetches education data from the service and handles the response.
   */
  fetchEducationData(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<Record<string, any[]>>('assets/education/education-data.json').subscribe(
        data => {
          this.educationData = data;
        },
        error => {
          console.error('Error fetching education data:', error);
          this.educationData = {}; // Fallback to an empty object
        }
      );
    }
  }

  /**
   * Retrieves the list of countries from the education data.
   * @returns An array of country keys.
   */
  getCountries(): string[] {
    return Object.keys(this.educationData || {});
  }
}

