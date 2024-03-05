import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatFactComponent } from "./cat-fact/cat-fact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports:
    [
      RouterOutlet,
      CatFactComponent,
    ]
})
export class AppComponent {
  title = 'my-ngrx-app';
}
