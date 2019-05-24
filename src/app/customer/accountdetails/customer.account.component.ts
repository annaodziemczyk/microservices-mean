import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'cust-account',
  templateUrl: './customer.account.component.html',
  styleUrls: ['./customer.account.component.scss']
})
export class CustomerAccountComponent implements OnInit {

  @Input() user: any = {};

  constructor(){


  }
  ngOnInit(): void {

  }

}
