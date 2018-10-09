import { Component } from '@angular/core';
import { Pizza } from './pizza';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pizzas: Array<Pizza> = [
    { name: "Margeurite", price: 13.2, url: "https://image.afcdn.com/recipe/20170105/24149_w1024h768c1cx2592cy1728.jpg" },
    { name: "Ementale", price: 17.5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4KDdbr21GizjxQgjE1hEtwcvdWbKYFV3UtDbbIiTos6aDQXt" },
    { name: "Pêcheur", price: 22, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4KDdbr21GizjxQgjE1hEtwcvdWbKYFV3UtDbbIiTos6aDQXt" },
    { name: "Atlantique", price: 10, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7-HSZsX16uiUy6YYSqLwlofmtL8SjZP6uuui36k5mJg8OBRu" },
    { name: "Au thon", price: 14.95, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcEjX-Juunq00PJQtZYYlQqsYP8AQF9rrzo2vhlvw4WIE-CXF" },
    { name: "Calamar", price: 15, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTVT_PervWFoFBJr9TRMIdeM-OSzoNr1pC7vc0SNMH_MuhAFq" },

  ]
}

