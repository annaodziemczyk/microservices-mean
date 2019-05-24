import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerViewComponent} from "./accountview/account.view.component";

const routes: Routes = [{
  path: 'customer',
  children: [{
    path: '',
    redirectTo: '/customer/account',
    pathMatch: 'full'
  }, {
    path: 'account',
    component: CustomerViewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule { }
