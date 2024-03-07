// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  registered: boolean;
  error: string | null;
}

export const initialState: UserState = {
  registered: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.registerUserSuccess, state => ({
    ...state,
    registered: true,
    error: null
  })),
  on(UserActions.registerUserFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
