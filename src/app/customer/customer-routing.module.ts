import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerViewComponent} from "./accountview/account.view.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [{
  path: 'customer',
  children: [{
    path: '',
    redirectTo: '/customer/account',
    pathMatch: 'full'
  }, {
    path: 'account',
    component: CustomerViewComponent
  },
    {
      path: 'checkout',
      component: CheckoutComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule { }
