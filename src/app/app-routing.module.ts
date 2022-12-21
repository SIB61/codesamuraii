import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { ApprovalHomePageComponent } from './components/approval-home-page/approval-home-page.component';
import { CitigenHomePageComponent } from './components/citigen-home-page/citigen-home-page.component';
import { ExecutiveHomePageComponent } from './components/executive-home-page/executive-home-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ProposalTableComponent } from './components/proposal-table/proposal-table.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:localStorage.getItem('user') ? 'home':'login'
  },
  {
    path:"login",
    component:LoginPageComponent,
    canActivate:[AuthGuard],
    data:{data:"account"}
  },
  {
    path:"register",
    component:RegistrationPageComponent,
    canActivate:[AuthGuard],
    data:{data:"account"}
  },
  {
    path:"home",
    canActivate:[AuthGuard],
    data:{data:"home"},
    component:HomePageComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo: homeRedirect()
      },
      {
        path:"admin",
        component:AdminHomePageComponent,
        data:{role:"ADMIN"}
      },
      {
        path:"citigen",
        component:CitigenHomePageComponent,
        data:{role:"CITIZEN"}
      },
      {
        path:"executive-agency",
        component:ExecutiveHomePageComponent,
        data:{role:"EXEC"},
        children:[
          {path:"",redirectTo:"proposals",pathMatch:"full"},
          {path:"proposals",component:ProposalTableComponent},
          {path:"projects",component:ProjectTableComponent}
        ]
      },
      {
        path:"approval-agency",
        component:ApprovalHomePageComponent,
        data:{role:"APPROV"}
      }
    ]
  }
];

function homeRedirect(){
  const usrstr = localStorage.getItem("user")
  let a = 'CITIZEN'
  if(usrstr)
  a = JSON.parse(a).role
  if(a=="EXEC") return "executive-agency"
  else if(a=="APPROV") return "approval-agency"
  else if(a=="ADMIN") return "admin"
  else return "citigen"
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
