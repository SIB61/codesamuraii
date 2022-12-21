import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { base_url } from 'src/app/constants';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent {

  constructor(private http:HttpClient){

    
  }

  user : any = JSON.parse(localStorage.getItem('user')!)
  projects$ = this.http.get<any[]>(base_url+"Project/get-executing-project",{params:new HttpParams().append('code',this.user.code)})
}
