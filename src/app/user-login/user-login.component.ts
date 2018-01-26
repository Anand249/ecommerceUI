import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form: FormGroup;
  UserLogin(form) {
    console.log(form.value);

  }
  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')]),
      psw: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),



    });
  }
  // UserLogin() {
   //  this.router.navigate(['/loggedin']);
  // }
}
