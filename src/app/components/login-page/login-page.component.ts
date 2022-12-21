import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { base_url } from 'src/app/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

form:FormGroup
constructor(private http:HttpClient,fb:FormBuilder,private router:Router){
this.form = fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",[Validators.required]]
    })
}
login(){
    console.log("sdkl")
 let value = this.form.value
 this.http.post(base_url+"Account/login",value).subscribe((v:any)=>{
      localStorage.setItem('user',JSON.stringify(v))
      this.router.navigateByUrl("/home")
    })
}

}
