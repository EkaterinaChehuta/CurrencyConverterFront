import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent }   from './components/converter.component';
import { HistoryComponent } from './components/history.component';
import { CurrencyService } from './service/currency.service'
import { ConversionService } from './service/conversion.service'
import { HistoryService } from './service/history.service'
import { StatisticsService } from './service/statistics.service'

const appRoutes: Routes =[
    { path: 'convert', component: ConverterComponent},
    { path: 'history', component: HistoryComponent},
    { path: '**', redirectTo: 'convert' }
];

@NgModule({
  declarations: [ AppComponent,
                  ConverterComponent,
                  HistoryComponent],
  imports: [ BrowserModule,
             RouterModule.forRoot(appRoutes),
             HttpClientModule,
             FormsModule,
             AppRoutingModule],
  exports: [ RouterModule ],
  providers: [CurrencyService,
              ConversionService,
              HistoryService,
              StatisticsService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
