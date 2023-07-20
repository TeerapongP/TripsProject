import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  SearchTripsData(keyword: any): Observable<any> {
    return this.http.post<any>('https://tripsservice.onrender.com/search', keyword);
  }
  getTripsData(): Observable<any> {
    return this.http.get<any>('https://tripsservice.onrender.com/');
  }
} 
