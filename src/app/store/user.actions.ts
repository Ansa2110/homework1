// user.actions.ts
import { createAction, props } from '@ngrx/store';

export const registerUser = createAction(
  '[Registration] Register User',
  props<{ firstname: string, lastname: string, age: string, email: string, phonenumber: string, login: string, password: string }>()
);

export const registerUserSuccess = createAction(
  '[Registration] Register User Success'
);

export const registerUserFailure = createAction(
  '[Registration] Register User Failure',
  props<{ error: string }>()
);
