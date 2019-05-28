import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {MatDialogModule, MatGridListModule, MatSnackBarModule, MatTableModule} from "@angular/material";
import {ProductModule} from "./product/product.module";
import {CustomerModule} from "./customer/customer.module";
import {CartService} from "./cart/cart.service";
import {CheckoutComponent} from "./customer/checkout/checkout.component";
import {PreviousRouteService} from "./app-routing/previous.route.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    CustomerModule,
    AppRoutingModule,
    ProductModule,
  ],
  providers: [
    CartService,
    PreviousRouteService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
