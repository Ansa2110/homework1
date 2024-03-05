import { createReducer, on } from "@ngrx/store";
import * as CatFactActions from './cat-fact.actions'

export interface CatFactState {
    fact: string | null;
    loading: boolean;
    error: any;
}

export const initialState: CatFactState = {
    fact: null,
    loading: false,
    error: null
};

export const catFactReducer = createReducer(
    initialState,
    on(CatFactActions.loadCatFact, state => ({...state, loading:true})),
    on(CatFactActions.loadCatFactSuccess, (state, {fact}) => ({...state, fact, loading: false})),
    on(CatFactActions.loadCatFactFailure, (state, {error}) => ({...state, error, loading: false}))
)