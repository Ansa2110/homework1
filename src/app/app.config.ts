import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { userReducer } from './store/user.reducer'
import { UserEffects } from './store/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideEffects([UserEffects]), provideStore({auth: userReducer})]
};
