import { WeatherState } from '../../../model/weather';
import { WeatherActions, WeatherActionTypes } from '../actions/weather';

export const INITIAL_WEATHER_STATE: WeatherState = {
  summaries: [],
  searchQuery: ''
};

export function weatherReducers(state: WeatherState = INITIAL_WEATHER_STATE, action: WeatherActions) {
  switch (action.type) {
    case WeatherActionTypes.SEARCH: {
      return {
        ...state,
        searchQuery: action.payload,
        error: false,
        loading: true,
      };
    }

    case WeatherActionTypes.SEARCH_COMPLETE: {
      return {
        ...state,
        error: false,
        loading: false,
        summaries: [
          ...state.summaries,
          {
            ...action.payload
          }
        ]
      };
    }

    case WeatherActionTypes.SEARCH_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        summaries: [],
      };
    }

    default:
      return state;
  }
}
