import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { base_url } from 'src/app/constants';

@Component({
  selector: 'app-proposal-table',
  templateUrl: './proposal-table.component.html',
  styleUrls: ['./proposal-table.component.scss']
})
export class ProposalTableComponent {

  constructor(private http:HttpClient){

    
  }

  user : any = JSON.parse(localStorage.getItem('user')!)
  proposals$ = this.http.get<any[]>(base_url+"Project/get-proposal",{params:new HttpParams().append('code',this.user.code)})
}
