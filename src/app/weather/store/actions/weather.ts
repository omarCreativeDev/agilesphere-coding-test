import { Action } from '@ngrx/store';
import { Summary } from '../../../model/weather';

export enum WeatherActionTypes {
  SEARCH = '[Weather] Search',
  SEARCH_COMPLETE = '[Weather] Search Complete',
  SEARCH_ERROR = '[Weather] Search Error',
}

export type WeatherActions = Search | SearchComplete | SearchError;

export class Search implements Action {
  readonly type = WeatherActionTypes.SEARCH;
  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = WeatherActionTypes.SEARCH_COMPLETE;
  constructor(public payload: Summary) {}
}

export class SearchError implements Action {
  readonly type = WeatherActionTypes.SEARCH_ERROR;
  constructor(public payload: string) {}
}
