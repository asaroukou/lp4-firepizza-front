import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {

  public pizza: Pizza = null;
  public payPalConfig?: PayPalConfig;
  constructor(private route: ActivatedRoute, public pizzaService: PizzaService) {

  }



  ngOnInit() {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
      .subscribe(pizza => {
        this.pizza = pizza
        this.initConfig(this.pizza.price);
        console.log(pizza)
      })
  }

  private initConfig(price : number ): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AW0pdFG3D7OczfsCQ03ZWB9U-xwhfdAs3Yb_dTYbnCJlh_ZoOAXHB1KloXwQXkfKK_r-7vmWYdTYJPOm'
      },
      button: {
        label: 'paypal',
        size: 'medium'
      },
      
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete', data, actions);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError');
        console.log(err)
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: price
        }
      }]
    });
  }

}
