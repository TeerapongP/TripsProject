import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://tripsservice.onrender.com/';

  SearchTripsData(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?keyword=${keyword}`);
  }
  getTripsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, data, { headers });
  }
} 
