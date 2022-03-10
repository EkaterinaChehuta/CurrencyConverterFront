import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { History } from '../components/entities/history.model';

import { Observable } from 'rxjs';

@Injectable()
export class HistoryService {

  private baseURL = 'http://localhost:8080/history';

  constructor(private http: HttpClient) { }

  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(this.baseURL);
  }

  getHistoryFilter(currencyFrom: number, currencyTo: number): Observable<History[]> {
      return this.http.get<History[]>(this.baseURL +'/'+ currencyFrom + '/'+ currencyTo);
  }
}
