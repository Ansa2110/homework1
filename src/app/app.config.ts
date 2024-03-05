import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { catFactReducer } from './store/cat-fact.reducer';
import { CatFactEffects } from './store/cat-fact.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideEffects(), provideStore({catFact: catFactReducer}), provideEffects([CatFactEffects]), provideHttpClient()]
};
