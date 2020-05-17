import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTradingSystemComponent } from './add-trading-system/add-trading-system.component';


const routes: Routes = [
  {
    path: 'add-trading-system',
    component: AddTradingSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingSystemRoutingModule { }
