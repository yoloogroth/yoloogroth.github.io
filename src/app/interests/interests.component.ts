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
      nombre: "Fotografia",
    };
    let i2 = {
      nombre: "Leer",
    };
    let i3 = {
      nombre: "Tecnologia",
    };
    let i4 = {
      nombre: "Arte",
    };
    let i5 = {
      nombre: "Viajar",
   
    };
    
    this.interests.push(i);
    this.interests.push(i2);
    this.interests.push(i3);
    this.interests.push(i4);
   
  }

}
