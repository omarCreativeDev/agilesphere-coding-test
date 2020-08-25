import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../../../model/weather';

export const getWeatherState = createFeatureSelector<WeatherState>('weather');
export const getSummaries = createSelector(getWeatherState, weatherState => weatherState.summaries);
