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
import {AddAddressComponent} from "./addressbook/addaddress/add.address.component";
import {MatButtonModule, MatFormFieldModule, MatRadioChange, MatRadioModule, MatSelectModule} from "@angular/material";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AddressComponent} from "./addressbook/address/address.component";
import {DeliveryComponent} from "./checkout/delivery/delivery.component";

@NgModule({
  imports: [
    MatSelectModule,
    MatRadioModule,
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports:[AddAddressComponent],
  declarations: [
    DeliveryComponent,
    AddressComponent,
    AccountMenuComponent,
    OrdersComponent,
    AddressBookComponent,
    CustomerAccountComponent,
    CustomerViewComponent,
    AddAddressComponent,
    CheckoutComponent
  ],
  providers: [
    AuthService,
    TokenStorage,
    CustomerService
  ],
  entryComponents: []
})
export class CustomerModule { }
