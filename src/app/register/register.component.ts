import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    myForm!: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit() {
      this.myForm = this.fb.group({
         firstname: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-я\-]*')]],
         lastname: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-я\-]*')]],
         age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
         email: ['', [Validators.required, Validators.email]],
         phonenumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
         login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/)]],
         password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,20}$/)]]
      });
    }

    onRegister() {
      if (this.myForm.valid) {
        const { firstname, lastname, age, email, phonenumber, login, password } = this.myForm.value;
        this.authService.register(firstname, lastname, age, email, phonenumber, login, password).subscribe(
          success => {
            if (success) {
              // В случае успешной регистрации выполните действия
              console.log('Регистрация успешна!');
            } else {
              console.error('Регистрация не удалась.');
            }
          }
        );
      }
    }
}
