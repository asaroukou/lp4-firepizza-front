import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  public pizza : Pizza = null;
  constructor(private route: ActivatedRoute, public pizzaService : PizzaService) {
      
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
      this.pizzaService.getPizza(id)
      .subscribe(pizza => {
        this.pizza = pizza
        console.log(pizza)
      })
  }

}
