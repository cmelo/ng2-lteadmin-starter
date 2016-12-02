import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './+login/login.component';
import { AuthorizedComponent } from './+authorized/authorized.component';
import { DashboardComponent } from './+authorized/+dashboard/dashboard.component';
import { PageComponent } from './+authorized/+page/page.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AuthorizedComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'page', component: PageComponent },
  ] },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    PageComponent,
    LoginComponent,
    AuthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2BootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
