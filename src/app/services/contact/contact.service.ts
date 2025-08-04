import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Removed invalid import for PDF file as it causes a module declaration error

@Injectable({
  providedIn: 'root' // Ensures the service is globally available
})
export class ContactsService {
  private apiUrl = 'assets/contact/contact-data.json'; // Correct relative path to the JSON file

  constructor(private http: HttpClient) {}

  getContactsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Fetches the JSON data
  }
}
