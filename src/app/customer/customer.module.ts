import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../auth/auth.service";
import {TokenStorage} from "../auth/token.storage";
import {OrdersComponent} from "./orders/orders.component";
import {AddressBookComponent} from "./addressbook/address-book.component";
import {CustomerAccountComponent} from "./accountdetails/customer.account.component";
import {CustomerRoutingModule} from "./customer-routing.module";
import {AccountMenuComponent} from "./accountmenu/account.menu.component";
import {CustomerService} from "./customer.service";
import {CustomerViewComponent} from "./accountview/account.view.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    AccountMenuComponent,
    OrdersComponent,
    AddressBookComponent,
    CustomerAccountComponent,
    CustomerViewComponent
  ],
  providers: [
    AuthService,
    TokenStorage,
    CustomerService
  ],
  entryComponents: []
})
export class CustomerModule { }
