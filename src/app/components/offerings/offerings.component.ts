import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { OfferingsService } from '../../services/offerings/offerings.service';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css'],
  imports: [CommonModule]
})
export class OfferingsComponent {
  offerings: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  ngOnInit() {
    this.fetchOfferings();
  }

  fetchOfferings(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<{ offerings: any[] }>('/assets/offerings/offerings-data.json').subscribe(data => {
        this.offerings = data.offerings;
      });
    }
  }
}
