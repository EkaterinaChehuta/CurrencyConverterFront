import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Currency } from '../components/entities/currency.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  private baseURL = 'http://localhost:8080/currency';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.baseURL);
  }
}
