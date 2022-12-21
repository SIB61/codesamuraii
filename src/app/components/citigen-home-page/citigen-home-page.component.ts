import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { Router } from '@angular/router';
import { base_url } from 'src/app/constants';
import { Project } from 'src/app/models/models';
@Component({
  selector: 'app-citigen-home-page',
  templateUrl: './citigen-home-page.component.html',
  styleUrls: ['./citigen-home-page.component.scss']
})

export class CitigenHomePageComponent implements OnInit{

  isOpenVisual = false;

  constructor(private http:HttpClient,private router: Router){}
  projects$ = this.http.get<Project[]>(base_url+"Project/citizen")
  ngOnInit(): void {
  }
logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")

  }
  selectedProject : Project

  mapSelected(project:Project){
      this.isOpenVisual = true
     this.selectedProject = project
  }

}
