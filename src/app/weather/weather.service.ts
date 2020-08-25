import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';

@Injectable()
export class WeatherService {
  public url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  public createHttpParams(city: string): HttpParams {
    return new HttpParams()
      .set('q', city)
      .set('cnt', '8')
      .set('units', 'metric')
      .set('APPID', '010721642521f31b0fbc8c3831d45951');
  }

  public searchWeatherForCity(city: string): Observable<Weather> {
    return this.http.get<Weather>(this.url, {
      params: this.createHttpParams(city)
    });
  }
}
