import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import {
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule
} from "@angular/material";
import {CustomerModule} from "../customer/customer.module";
import {UpdateCustomerComponent} from "./updatecustomer/update.customer.component";
import {AddAddressComponent} from "../customer/addressbook/addaddress/add.address.component";

@NgModule({
  declarations: [
    AdminComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerModule,
    AdminRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ],
  entryComponents: [AddAddressComponent, UpdateCustomerComponent]
})
export class AdminModule {}
