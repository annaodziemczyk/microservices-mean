import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import {MatCheckboxModule, MatSidenavModule, MatTableModule, MatTabsModule} from "@angular/material";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
