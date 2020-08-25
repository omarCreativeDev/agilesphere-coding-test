import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Summary } from '../../../model/weather';
import { WeatherService } from '../../weather.service';
import { Search, SearchComplete } from '../actions/weather';
import { WeatherEffects } from './weather';

const MockResponse: any = {
  cod: '200',
  message: 0,
  cnt: 8,
  list: [
    {
      dt: 1598313600,
      main: {
        temp: 17.08,
        feels_like: 15.71,
        temp_min: 17.08,
        temp_max: 17.67,
        pressure: 1012,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 82,
        temp_kf: -0.59
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.75,
        deg: 220
      },
      visibility: 10000,
      pop: 0.83,
      rain: {
        '3h': 2.03
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-08-25 00:00:00'
    },
    {
      dt: 1598324400,
      main: {
        temp: 16.98,
        feels_like: 14.21,
        temp_min: 16.98,
        temp_max: 17.11,
        pressure: 1009,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 85,
        temp_kf: -0.13
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.98,
        deg: 182
      },
      visibility: 7967,
      pop: 1,
      rain: {
        '3h': 3.71
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-08-25 03:00:00'
    },
    {
      dt: 1598335200,
      main: {
        temp: 16.7,
        feels_like: 12.13,
        temp_min: 16.7,
        temp_max: 16.71,
        pressure: 1006,
        sea_level: 1005,
        grnd_level: 1002,
        humidity: 82,
        temp_kf: -0.01
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 8.15,
        deg: 190
      },
      visibility: 8122,
      pop: 1,
      rain: {
        '3h': 3.74
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-08-25 06:00:00'
    },
    {
      dt: 1598346000,
      main: {
        temp: 16.88,
        feels_like: 11.2,
        temp_min: 16.88,
        temp_max: 16.88,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 999,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 9.28,
        deg: 187
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 2.72
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-08-25 09:00:00'
    },
    {
      dt: 1598356800,
      main: {
        temp: 19.25,
        feels_like: 14.15,
        temp_min: 19.25,
        temp_max: 19.25,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 997,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 9.03,
        deg: 223
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 0.86
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-08-25 12:00:00'
    },
    {
      dt: 1598367600,
      main: {
        temp: 19.96,
        feels_like: 13.64,
        temp_min: 19.96,
        temp_max: 19.96,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 997,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 9.9,
        deg: 231
      },
      visibility: 10000,
      pop: 0.41,
      rain: {
        '3h': 0.22
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-08-25 15:00:00'
    },
    {
      dt: 1598378400,
      main: {
        temp: 19.29,
        feels_like: 12.03,
        temp_min: 19.29,
        temp_max: 19.29,
        pressure: 999,
        sea_level: 999,
        grnd_level: 996,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 94
      },
      wind: {
        speed: 10.86,
        deg: 237
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.25
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-08-25 18:00:00'
    },
    {
      dt: 1598389200,
      main: {
        temp: 17.85,
        feels_like: 10.19,
        temp_min: 17.85,
        temp_max: 17.85,
        pressure: 999,
        sea_level: 999,
        grnd_level: 997,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 94
      },
      wind: {
        speed: 11.28,
        deg: 245
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.19
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2020-08-25 21:00:00'
    }
  ],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5085,
      lon: -0.1257
    },
    country: 'GB',
    population: 1000000,
    timezone: 3600,
    sunrise: 1598245264,
    sunset: 1598295894
  }
};

const MockSummary: Summary = {
  city: 'London',
  list: MockResponse.list
};

class MockWeatherService {
  public searchWeatherForCity(): Observable<any> {
    return of(null);
  }
}

class MockStore {
  public dispatch(): void {}
}

describe('WeatherEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: WeatherEffects;
  let store: Store<any>;
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsModule,
      HttpClientTestingModule
    ],
    providers: [
      WeatherEffects,
      { provide: WeatherService, useClass: MockWeatherService },
      { provide: Store, useClass: MockStore },
      provideMockActions(() => actions)
    ]
  }));

  beforeEach(() => {
    effects = TestBed.get(WeatherEffects);
    store = TestBed.get(Store);
    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch `SearchComplete` action', () => {
    spyOn(store, 'dispatch');
    spyOn(service, 'searchWeatherForCity').and.callFake(() => of(MockResponse)).and.callThrough();

    effects.search$.subscribe((response: SearchComplete) => expect(response).toEqual(new SearchComplete(MockSummary)));

    actions = new ReplaySubject(1);
    actions.next(new Search('Manchester'));
  });
});
