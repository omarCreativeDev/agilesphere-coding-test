import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherEffects } from './store/effects/weather';
import { weatherReducers } from './store/reducers/weather';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('weather', weatherReducers),
    EffectsModule.forFeature([WeatherEffects])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
