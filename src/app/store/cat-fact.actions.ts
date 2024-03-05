import { createAction, props } from "@ngrx/store";

export const loadCatFact = createAction('[Cat Fact API] Load Cat Fact')
export const loadCatFactSuccess = createAction('[Cat Fact API] Load Cat Fact Success', props<{fact: string}>())
export const loadCatFactFailure = createAction('[Cat Fact API] Load Cat Fact Failure', props<{error: any}>());