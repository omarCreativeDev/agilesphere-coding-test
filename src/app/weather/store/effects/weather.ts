import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/debounceTime';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Weather } from '../../../model/weather';
import { WeatherService } from '../../weather.service';
import { Search, SearchComplete, SearchError, WeatherActionTypes } from '../actions/weather';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  @Effect()
  search$: Observable<SearchComplete | SearchError> = this.actions$.ofType(WeatherActionTypes.SEARCH).pipe(
    switchMap((action: Search) => {
      return this.weatherService
        .searchWeatherForCity(action.payload)
        .pipe(
          map((response: Weather) => new SearchComplete({
            city: response.city.name,
            list: response.list
          })),
          catchError((error: string) => of(new SearchError(error)))
        );
    })
  );
}
