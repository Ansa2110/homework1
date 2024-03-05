import { Injectable } from "@angular/core";
import { catchError, switchMap, map, of } from "rxjs";
import { Actions, ofType, createEffect} from "@ngrx/effects"
import { HttpClient } from "@angular/common/http";
import * as CatFactActions from '../store/cat-fact.actions'

@Injectable()

export class CatFactEffects {
    loadCatFact$ = createEffect(() => this.actions$.pipe(
        ofType(CatFactActions.loadCatFact),
        switchMap(() =>
            this.http.get<any>('https://catfact.ninja/fact').pipe(
                map(response => CatFactActions.loadCatFactSuccess({ fact: response.fact })),
                catchError(error => of(CatFactActions.loadCatFactFailure({ error })))
            )
        )
    )
    )

    constructor(private actions$: Actions, private http: HttpClient) { }
}