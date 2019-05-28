import {Component, Input, OnInit} from "@angular/core";
import {CustomerService} from "../customer.service";
import {Customer} from "../Customer";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'account-view',
  templateUrl: './account.view.component.html',
  styleUrls: ['./account.view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  public user: any = {};
  public selectedItem:string = "ACCOUNT";

  public customer:Customer={} as Customer;

  constructor(private authService:AuthService, private customerService:CustomerService){

  }

  selectMenuItem = (item:string) => {
    this.selectedItem= item;
  };

  ngOnInit(): void {
    this.authService.me().subscribe((user)=>{
      this.user=user.user;
      this.customerService.getCustomer(this.user).subscribe(customer =>{
        this.customer = customer as Customer;
      });
    });
  }

}
