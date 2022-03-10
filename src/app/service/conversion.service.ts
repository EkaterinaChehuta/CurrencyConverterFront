import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Conversion } from '../components/entities/conversion.model';

import { Observable } from 'rxjs';

@Injectable()
export class ConversionService {

  private baseURL = 'http://localhost:8080/convert';

  constructor(private http: HttpClient) { }

  getConversions(): Observable<Conversion[]> {
    return this.http.get<Conversion[]>(this.baseURL);
  }

  createConversion(conversion: Conversion) {
    return this.http.post(this.baseURL, conversion);
  }
}
