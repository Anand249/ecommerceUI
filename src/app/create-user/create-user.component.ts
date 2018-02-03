import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


function passwordConfirming(c: AbstractControl): any {
  if (!c.parent || !c) {
    return;
  }
  const pwd = c.parent.get('f_password');
  const cpwd = c.parent.get('f_passwordCheck');

  if (!pwd || !cpwd) {
    return;
  }
  if (pwd.value !== cpwd.value) {
    return { invalid: true };

  }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  titleAlert = 'can\'t be blank';
  rForm: FormGroup;
  post: any;
  emailAddress: string;
  firstName: string;
  lastName: string;

  isActive: boolean;
  password: string;
  checkboxValue: boolean;
  number: string;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'f_emailAddress': [null, Validators.compose( [Validators.required, Validators.email])],
      'f_firstName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'f_lastName': [null, Validators.required],
      'f_password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'f_passwordCheck': [null, passwordConfirming],
      'validateCheckbox': [null],
      'f_number': [null, Validators.compose([Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')])]
    });
  }

  get cpwd() {
    return this.rForm.get('f_passwordCheck');
  }
  ngOnInit() {

  }
  newFunction() {
    if (this.checkboxValue) {
      this.isActive = true;
      console.log('False');
    }else {
      this.isActive = false;
      console.log('True');
    }
  }
  addPost(post) {
    this.emailAddress = post.f_emailAddress;
    this.firstName = post.f_firstName.trim();
    this.lastName = post.f_lastName.trim();
    this.password = post.f_password();
    this.number = post.f_number();
  }

}
