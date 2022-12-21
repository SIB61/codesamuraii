import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { base_url } from 'src/app/constants';
import { matchPassword, strongPassword } from 'src/app/validators/validators';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
userType = "C"
agencyType = "EXEC"
selectUserType(value:any){
    this.userType = value
}

citizenForm:FormGroup
agencyForm:FormGroup

agencyCode = ""

constructor(fb:FormBuilder,private http:HttpClient,private router:Router){
  
    this.citizenForm = fb.group({
      email:['',[Validators.email,Validators.required]],
      name:['',[Validators.required]],
      password:['',[Validators.required,strongPassword]],
      confirmPassword:['',[Validators.required,matchPassword]],
    })

    this.agencyForm = fb.group({
      email:['',[Validators.email,Validators.required]],
      name:['',[Validators.required]],
      password:['',[Validators.required,strongPassword]],
      confirmPassword:['',[Validators.required,matchPassword]],
      description:['',[Validators.required]],
      code:['',[Validators.required]]
    })
  }

registerAgency(){
    let value = this.agencyForm.value
    value = {...value,type:this.agencyCode}
    delete value.confirmPassword
    this.http.post(base_url+"Account/Agency-reg",value).subscribe((v:any)=>{
    localStorage.setItem("user",JSON.stringify(v))
    this.router.navigateByUrl("/home")
    })
}

registerCitizen(){
    let value = this.citizenForm.value
    delete value.confirmPassword
    console.log(value)
    this.http.post(base_url+"Account/Citizen-reg",value).subscribe((v:any)=>{
    localStorage.setItem("user",JSON.stringify(v))
    this.router.navigateByUrl("/home")
    })
}


passwordMatchValidator(control:AbstractControl){
return control.value === control.parent?.get('password').value
}

changeCode(v:any){
    this.agencyCode=v
}

}
