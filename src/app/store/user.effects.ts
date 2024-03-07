// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../service/register.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.registerUser),
    switchMap(({ firstname, lastname, age, email, phonenumber, login, password }) =>
      this.authService.register(firstname, lastname, age, email, phonenumber, login, password).pipe(
        map(() => UserActions.registerUserSuccess()),
        catchError(error => of(UserActions.registerUserFailure({ error: error.message })))
      )
    )
  ));

}
