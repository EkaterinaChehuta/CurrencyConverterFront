import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../service/currency.service';
import { Currency } from './entities/currency.model';
import { HistoryService } from '../service/history.service';
import { History } from './entities/history.model';

@Component({
    selector: 'history-app',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  currencies!: Currency[];
  histories!: History[];
  currencyFrom: number = 0;
  currencyTo: number = 0;

  constructor(private router: Router,
              private currencyService: CurrencyService,
              private historyService: HistoryService){}

  getCurrencies() {
    this.currencyService.getCurrencies()
        .subscribe(currencies => this.currencies=currencies);
  }

  getHistoryAll() {
    this.currencyFrom = 0;
    this.currencyTo = 0;
    this.historyService.getHistoryFilter(this.currencyFrom, this.currencyTo)
    .subscribe(histories => this.histories=histories);
  }

  getHistoryFilter() {
    this.historyService.getHistoryFilter(this.currencyFrom, this.currencyTo)
    .subscribe(histories => this.histories=histories);
  }

  ngOnInit() {
    this.getCurrencies();
    this.getHistoryAll();
  }
}
