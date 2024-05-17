import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginService } from '../../services/google-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePassword=true;

  constructor(private googleService:GoogleLoginService){}

  loginFormDetails=new  FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required])
  });

  directLogin(loginData:any){
    console.log("User name : "+this.loginFormDetails);
  }

  googleLogin(){
    this.googleService.login();
  }
}
