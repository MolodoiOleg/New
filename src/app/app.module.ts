import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ResumeComponent } from './resume/resume.component';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'Bill Gates', component:FirstComponent},
  {path: 'Hobby', component:SecondComponent},
  {path: 'Resume', component: ResumeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ResumeComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }