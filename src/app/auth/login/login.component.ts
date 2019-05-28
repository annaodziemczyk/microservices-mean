import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "lodash";

import {AuthService} from '../auth.service';
import {PreviousRouteService} from "../../app-routing/previous.route.service";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
              private previousRouteService:PreviousRouteService,
              private cartService:CartService) { }

  email: string;
  password: string;
  public loginFailed:boolean = false;

  ngOnInit() {
    this.authService.me().subscribe((user)=>{
      if(_.has(user.user, "_id")){
        let previousUrl = this.previousRouteService.getPreviousUrl();
        if(previousUrl && previousUrl!=this.router.url){
          this.router.navigate([previousUrl]);
        }else{
          this.router.navigate(['']);
        }
      }

    });
  }

  login(): void {
    this.authService.login(this.email, this.password)
    .subscribe(data => {
      if(data && data.user){
        this.cartService.getCart()
          .subscribe((cart)=> {
            if (_.has(cart, "_id") && _.isNil(cart.userId)) {

              //combine temp cart and user cart
              this.cartService.combineCarts(data.user._id, cart._id).subscribe((cart) => {
                let previousUrl = this.previousRouteService.getPreviousUrl();
                if (previousUrl && previousUrl!=this.router.url) {
                  this.router.navigate([previousUrl]);
                } else {
                  this.router.navigate(['']);
                }
              });

            }else {
              let previousUrl = this.previousRouteService.getPreviousUrl();
              if (previousUrl && previousUrl!=this.router.url) {
                this.router.navigate([previousUrl]);
              } else {
                this.router.navigate(['']);
              }
            }
          });


      }else{
        this.loginFailed=true;
      }

    }, error => {
      this.loginFailed=true;
    })
  }

}
