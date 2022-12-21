import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgChartsModule } from 'ng2-charts';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyLineChartComponent } from './components/my-line-chart/my-line-chart.component';
import { CitigenHomePageComponent } from './components/citigen-home-page/citigen-home-page.component';
import { MapComponent } from './components/map/map.component';
import { ProjectVisualComponent } from './components/project-visual/project-visual.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { ExecutiveHomePageComponent } from './components/executive-home-page/executive-home-page.component';
import { ProposalTableComponent } from './components/proposal-table/proposal-table.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ApprovalHomePageComponent } from './components/approval-home-page/approval-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    MyLineChartComponent,
    MapComponent,
    CitigenHomePageComponent,
    ProjectVisualComponent,
    AdminHomePageComponent,
    ExecutiveHomePageComponent,
    ProposalTableComponent,
    ProjectTableComponent,
    ApprovalHomePageComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    AppRoutingModule 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
