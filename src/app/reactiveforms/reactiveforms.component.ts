import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.scss'
})
export class ReactiveformsComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-я\-]*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-я\-]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      interests: this.fb.array([this.createInterest()])
    })


  }

  createInterest() {
    return this.fb.group({
      interest: ['', Validators.required]
    });
  }

  get interests() {
    return this.myForm.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.createInterest());
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }
  onSubmit() {
    localStorage.setItem('lastuser', JSON.stringify(this.myForm.value))
    alert("Ваши данные успешно сохранены в localstorage")
    this.myForm.reset()
  }

}
