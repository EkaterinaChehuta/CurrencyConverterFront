import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AverageConversionCurrencyValue } from '../components/entities/averageConversionCurrencyValue.model';

import { Observable } from 'rxjs';

@Injectable()
export class StatisticsService {

  private baseURL = 'http://localhost:8080/statistics';

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<AverageConversionCurrencyValue[]> {
    return this.http.get<AverageConversionCurrencyValue[]>(this.baseURL);
  }
}
