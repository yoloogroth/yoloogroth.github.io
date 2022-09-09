import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperiencies : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2018-2022",
      ubicacion : "Ixtac, Ver",
      puesto:"Ateción al cliente, recepcionista y CEO",
      empresa:"Florería Groth",
      funciones:[
        {descripcion: "Abrir una florería y atenderla"},
        {descripcion:"Cluster GPU"},

      ]
    };
    let work2 = {
      fecha:"2022-Actualidad",
      ubicacion:"Orizaba, Ver",
      puesto: "Mesera y cocinera",
      empresa:"Café Zepahua",
      funciones:[
        {descripcion: "Ser contratada recientemente"}

      ]
    };
    this.workExperiencies.push(work1);
    this.workExperiencies.push(work2);
  }

}