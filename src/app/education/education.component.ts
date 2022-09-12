import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let esc = {
      fecha: "2013-2016",
      Escuela: "Telesecundaria Digna Ochoa y Placido",
      ubicacion : "Ixtaczoquitlan, Ver",
    
      
    };
    let esc1 = {
      fecha: "2016-2019",
      Escuela: "CBTIS 194",
      ubicacion : "Ixtaczoquitlan, Ver",
    
      
    };
    let esc2 = {
      fecha:"2020-2024",
      Escuela: "Universidad Veracruzana",
      ubicacion:"Ixtaczoquitlan, Ver",
      
    };
    this.education.push(esc)
    this.education.push(esc1)
    this.education.push(esc2)
  }

}

