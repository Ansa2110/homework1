import { Component, OnInit } from '@angular/core';
import { loadCatFact } from '../store/cat-fact.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CatFactState} from '../store/cat-fact.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-fact',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.scss'
})

export class CatFactComponent implements OnInit{

  fact$: Observable<string | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ catFact: CatFactState }>) {
    this.fact$ = new Observable<string | null>();
    this.loading$ = new Observable<boolean>();
    this.error$ = new Observable<any>();
  }


  ngOnInit(): void {
    this.store.dispatch(loadCatFact());
    this.fact$ = this.store.pipe(select(state => state.catFact.fact));
    this.loading$ = this.store.pipe(select(state => state.catFact.loading));
    this.error$ = this.store.pipe(select(state => state.catFact.error));
  }
}
