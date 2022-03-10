import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrencyService } from '../service/currency.service';
import { Currency } from './entities/currency.model';
import { ConversionService } from '../service/conversion.service';
import { Conversion } from './entities/conversion.model';
import { StatisticsService } from '../service/statistics.service';
import { AverageConversionCurrencyValue } from './entities/averageConversionCurrencyValue.model';

@Component({
    selector: 'converter-app',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  currencies!: Currency[];
  conversions!: Conversion[];
  statistics!: AverageConversionCurrencyValue[];
  conversion: Conversion;
  receivedConversion!: Conversion;
  done: boolean = false;

  constructor(private router: Router,
              private currencyService: CurrencyService,
              private conversionService: ConversionService,
              private statisticsService: StatisticsService){
    this.conversion = new Conversion();
  }

  getCurrencies() {
    this.currencyService.getCurrencies()
        .subscribe(currencies => this.currencies=currencies);
  }

  getConversions() {
    this.conversionService.getConversions()
        .subscribe(conversions => this.conversions=conversions);
  }

  createConversion() {
    this.conversionService.createConversion(this.conversion)
        .subscribe((data: any) => {this.receivedConversion=data; this.done=true;});
  }

  getStatistics() {
    this.statisticsService.getStatistics()
        .subscribe(statistics => this.statistics=statistics);
  }

  ngOnInit() {
    this.getCurrencies();
    this.getConversions();
    this.getStatistics();
  }
}
