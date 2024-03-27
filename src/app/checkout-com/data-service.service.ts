import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get<any>('https://api.example.com/data').pipe(
      catchError((error) => {
        // Handle the error here or rethrow it to be caught by the component
        console.error('ERROR:', error);
        return error;
      })
    );
  }
}
