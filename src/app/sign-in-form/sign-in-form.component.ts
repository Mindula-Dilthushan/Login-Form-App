import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName='';

  // setUserName(text: string){
  //   this.userName=text;
  //   console.log(this.userName);
  // }

  // email = '';
  // password = '';

  // signIn(){
  //   console.log(this.email);
  //   console.log(this.password);
  // }

  signInForm = new FormGroup({
    email : new FormControl(
      'username@gmail.com',
      Validators.email
    ),
    password : new FormControl(
      '',
      [
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    )
  });

  signIn(){
    console.log(this.signInForm.get('email'))
    console.log(this.signInForm.get('password'))
  }
}
