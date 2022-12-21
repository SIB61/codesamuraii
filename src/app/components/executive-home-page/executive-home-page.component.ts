import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { base_url } from 'src/app/constants';

@Component({
  selector: 'app-executive-home-page',
  templateUrl: './executive-home-page.component.html',
  styleUrls: ['./executive-home-page.component.scss']
})
export class ExecutiveHomePageComponent {
selected = 1;
  user : any = JSON.parse(localStorage.getItem('user')!)
  constructor(private http:HttpClient,private router:Router){}
  proposals$ = this.http.get(base_url+"Project/get-proposal",{params:new HttpParams().append('code',this.user.code)})
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
}
