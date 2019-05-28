import {AfterViewChecked, Component, Input, OnInit} from "@angular/core";
import {CartService} from "../../cart/cart.service";
import {Cart} from "../../cart/Cart";
import * as _ from 'lodash';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {Customer} from "../Customer";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  public cart:Cart;
  public deliveryCost:number=0.00;
  public user:any;
  public customer:Customer;

  constructor(private authService:AuthService, private cartService:CartService, private router: Router,
              private customerService:CustomerService){
  }

  getSubTotal=()=>{
    if(this.cart)
      return _.sumBy(this.cart.itemsInCart, "price");
    return 0;
  };
  getTotal=()=>{
    return this.getSubTotal() + this.deliveryCost;
  };

  ngOnInit(): void {
    this.authService.me().subscribe((user)=>{
      if(user){
        this.user=user.user;
        this.customerService.getCustomer(this.user).subscribe((customer)=>{
          this.customer=customer;
        });

        this.cartService.getCart().subscribe((cart)=>{
          this.cart=cart;
        });

      }else{
        this.router.navigate(['/auth/login']);
      }
    });

  }

}
