import { Component } from '@angular/core';
import { AudiService } from './AudiService';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers:[AudiService]
})
export class SwitchComponent {
  aud:string[] = [];
  name:string ='';
  car:any
  // audiModels: string  = AudiService.getData()
  bmwModels: Array <string> = ['BMW X3', 'BMW X5', 'BMW X6'];
  mersedesModels: Array <string> = ['Mersede C-Class', 'Mersedes B-Class', 'Mersedes S-Class'];
  constructor(private audiService:AudiService){
    
  }
  addCar(name:string) {
    this.audiService.addData(name);
  }
  ngONInit(){
    this.aud = this.audiService.getData();
  }
}
