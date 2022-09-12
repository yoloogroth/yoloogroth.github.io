import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ay-c',
  templateUrl: './ay-c.component.html',
  styleUrls: ['./ay-c.component.css']
})
export class AyCComponent implements OnInit {
  ayc : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let a = {
      nombreAC: "CBTIS 192",
      fecha: "2016-2019",
      descripcion:"Tecinico en Programacion", 
      
    };
    let a1 = {
      nombreAC: "Barista",
      fecha: "2021-2022",
      descripcion:"certificado de barista en Cafe Zepahua", 
      
    };
    let a2 = {
      nombreAC: "GDSC-UV",
      fecha: "2022",
      descripcion:"Team Core de Google Developer Student Club UV",
      
  
      
    };
    this.ayc.push(a);
    this.ayc.push(a1);
    this.ayc.push(a2);
  }

}
