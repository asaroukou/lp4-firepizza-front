import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaService]
})
export class PizzaListComponent implements OnInit {
  pizzas : Array<Pizza> = []
  constructor(public pizzaService : PizzaService) { }

  ngOnInit() {
    this.pizzaService.listPizzas()
    .subscribe(pizzas => this.pizzas = pizzas)    
  }

}
