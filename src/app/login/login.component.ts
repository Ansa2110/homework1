import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  /*errorMessage$: Observable<string | null>;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.errorMessage$ = this.store.pipe(select(state => state.auth.errorMessage));
  }*/

  onSubmit() {
    /*this.store.dispatch(login({ username: this.username, password: this.password }));*/
  }

}
