import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ResumeComponent } from './resume/resume.component';
import { BaseComponent } from './base/base.component';
import { CarComponent } from './car/car.component';
import { PlaneComponent } from './plane/plane.component';
import { ShipComponent } from './ship/ship.component';


const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'Bill Gates', component:FirstComponent},
  {path: 'Hobby', component:SecondComponent},
  {path: 'Resume', component: ResumeComponent},
  {path: 'Biggest Car', component: CarComponent},
  {path: 'Biggest Plane', component: PlaneComponent},
  {path: 'Biggest Ship', component: ShipComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ResumeComponent,
    BaseComponent,
    CarComponent,
    PlaneComponent,
    ShipComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }