import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import  { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimayInput } from '../../components/primay-input/primay-input';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimayInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm =new FormGroup ({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

}
