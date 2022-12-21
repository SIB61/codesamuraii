import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { base_url } from 'src/app/constants';

@Component({
  selector: 'app-approval-home-page',
  templateUrl: './approval-home-page.component.html',
  styleUrls: ['./approval-home-page.component.scss']
})
export class ApprovalHomePageComponent {

  selected = 1;
  user : any = JSON.parse(localStorage.getItem('user')!)
  constructor(private http:HttpClient,private router:Router){}
  proposals$ = this.http.get<any[]>(base_url+"Project/proposed-approved",{params:new HttpParams().append('code',this.user.code)}).pipe(map((v:any[])=>v.slice(1)))
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }

}
