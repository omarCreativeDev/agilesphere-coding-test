import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherComponent
  }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
