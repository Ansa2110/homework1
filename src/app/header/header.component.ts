import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() isValidUserChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  logout = () =>
  {
    localStorage.clear()
    this.isValidUserChange.emit(false);
    this.router.navigate([''])
  }
}
