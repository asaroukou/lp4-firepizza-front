import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';




const routes: Routes = [
  { path: '', redirectTo: 'list' , pathMatch: 'full' },
  { path: 'list', component: PizzaListComponent },
  { path: 'pizza/:id', component: PizzaDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { } 
