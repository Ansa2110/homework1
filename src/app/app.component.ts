import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework1';
  isLoggedIn: boolean = false;
  constructor(private router: Router) {}

  handleValidUserChange(isValidUser: boolean) {
    if(this.isLoggedIn==false) {
      this.router.navigate([''])
    }
    this.isLoggedIn = isValidUser;

  }
}