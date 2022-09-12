import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let i = {
      nombre: "Oir musica",
    };
    let i2 = {
      nombre: "Leer",
    };
    let i3 = {
      nombre: "Jugar Basquetball",
    };
    let i4 = {
      nombre: "Nadar",
    };
    let i5 = {
      nombre: "Cantar",
    };
    let i6 = {
      nombre: "Salir de viaje",
    };
    
    this.interests.push(i);
    this.interests.push(i2);
    this.interests.push(i3);
    this.interests.push(i4);
    this.interests.push(i5);
    this.interests.push(i6);
  }

}
