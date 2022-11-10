import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// fusioncharts imports
import { FusionChartsModule } from './angular-fusioncharts/fusioncharts.module';
import * as FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    FusionChartsModule.forRoot(FusionCharts, Charts, FusionTheme, CandyTheme),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
