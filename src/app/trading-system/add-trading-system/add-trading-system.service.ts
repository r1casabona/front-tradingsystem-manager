import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradingSystem } from '../model/trading-system';

import { RespostaTradingResponse } from './payload/resposta-trading-response';
import { Observable } from 'rxjs';

const API = 'http://localhost:8081/tradingsystems/';

@Injectable({
  providedIn: 'root'
})
export class AddTradingSystemService {

  constructor(private http: HttpClient) {}

  tradingValid(tradingSystem: TradingSystem): Observable<RespostaTradingResponse> {
    console.log(tradingSystem);
    return this.http.post<RespostaTradingResponse>(API, tradingSystem);
  }

}
