import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
    name: string = "Молодой Олег Віталійович";
    phone: number = 80663456789;
    email: string = "Molodoioleg@gmail.com";
    city: string = "м. Чернівці";
    expirience: string = "МВС України(2013-2015 рр.), ТОВ ККНК 'ТЕХНОБУД'(з 2017р.)";
    skills: string = "Знання бухгалтерської справи, комунікація з працівниками.";
    photo: string = "../../assets/photoResume/2023-01-15 21.44.14.jpg";
    certificate: Array <string> = ["../../assets/photoResume/lt04027254_quantized.png",
    "../../assets/photoResume/сертифі.webp"
    ];
}
