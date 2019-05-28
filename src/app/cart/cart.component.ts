import { Component, OnInit } from '@angular/core';
import {CartService} from "./cart.service";
import {MatSnackBar} from "@angular/material";
import * as _ from 'lodash';
import {AuthService} from "../auth/auth.service";
import {Cart} from "./Cart";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart:any;
  displayedColumns: string[];

  constructor(private cartService:CartService, private snackBar: MatSnackBar, private authService:AuthService) { }

  removeCartItem = (product)=>{
    this.cartService.removeProduct(this.cart._id, product).subscribe((cart)=>{
        this.cart=cart;
      this.snackBar.open("Removed from cart", null, {
        horizontalPosition:'end',
        duration: 2000,
      });
    });
  };

  getTotalCost = () =>{
    if(this.cart)
      return _.sumBy(this.cart.itemsInCart, "price");
    return 0;
  };

  ngOnInit() {
    this.displayedColumns = ['name', 'quantity', 'price', 'remove'];

    let authSub:Subscription= this.authService.me().subscribe((user)=>{

      this.cartService.getCart()
        .subscribe((data)=>{
          this.cart = data;

          if(user && _.has(this.cart, "_id") && _.isNil(this.cart.userId)){
            //combine temp cart and user cart
            this.cartService.combineCarts(user.user._id, this.cart._id).subscribe((cart)=>{
              this.cart=cart;
            });
          }else if(user){
            //view user cart
            this.cartService.viewUserCart(user.user._id).subscribe((cart)=>{
              this.cart=cart;
            });
          }else if (this.cart){
            this.cartService.viewCart(this.cart._id).subscribe((cart)=>{
              this.cart=cart;
            });
          }

        });

    });

    if(authSub.closed){
      this.cartService.getCart().subscribe((data)=>{
        if(_.has(data, "_id")){
          this.cart = data;
          this.cartService.viewCart(this.cart._id).subscribe((cart)=>{
            this.cart=cart;
          });
        }

      });
    }


  }

}
