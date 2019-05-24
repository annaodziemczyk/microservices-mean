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
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user)=>{
      this.user=user;
      console.log(user);
      this.customerService.getCustomer(user).subscribe(customer =>{
        this.customer = customer as Customer;
      });
    });
  }

}
