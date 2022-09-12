import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  languages : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let l = {
      nombreL: "Español",
      };
      let l1 = {
        nombreL: "Ingles",
        };
        let l2 = {
          nombreL: "Chino",
          };
      this.languages.push(l);
      this.languages.push(l1);
      this.languages.push(l2);
  }
  

}
