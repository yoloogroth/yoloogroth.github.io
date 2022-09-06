import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience-cv',
  templateUrl: './work-experience-cv.component.html',
  styleUrls: ['./work-experience-cv.component.css']
})
export class WorkExperienceCvComponent implements OnInit {

  workExperiencies : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2015-2018",
      ubicacion : "Orizaba, Ver",
      puesto:"CEO",
      empresa:"Waves",
      logros:[
        {descripcion: "Dron autonomo"},
        {descripcion:"Cluster GPU"},

      ]
    };
    let work2 = {
      fecha:"2015-2018",
      ubicacion:"Ixtac, Ver",
      puesto: "CEO",
      empresa:"Kubbet",
      logros:[
        {descripcion: "Cluster hadoop"},
        {descripcion:"Red Neuronal GAN"},

      ]
    };
    this.workExperiencies.push(work1);
    this.workExperiencies.push(work2);
  }

}
