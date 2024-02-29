import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  s = ""
  isVisible = false
  @Output() isValidUserChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  profiles = [
    {
      login: "Ansa111",
      password: "Angular111",
      name: "John",
      surname: "Johnson",
      age: "25",
      gender: "Male",
      photo: "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg",
      purchasednft: ["#6224", "#3937"]

    },
    {
      login: "Angularuser",
      password: "Reactuser",
      name: "Amy",
      surname: "Beth",
      age: "27",
      gender: "Male",
      photo: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
      purchasednft: ["#6577"]
    }
  ]

  @ViewChild('inputLogin')
  inputLogin!: ElementRef;
  @ViewChild('inputPassword')
  inputPassword!: ElementRef;

  enterUser = () => {

    let isValidUser = false;
    const enteredLogin = this.inputLogin.nativeElement.value;
    const enteredPassword = this.inputPassword.nativeElement.value;

    for (const profile of this.profiles) {
      if (profile.login === enteredLogin && profile.password === enteredPassword) {
        isValidUser = true;
        this.isValidUserChange.emit(isValidUser);
        localStorage.setItem('currentUser', JSON.stringify(profile))
        break;
      }
    }
    if (isValidUser) {
      this.router.navigate(['/home']);

    } else {
      this.isVisible = true;
    }
  }
}
