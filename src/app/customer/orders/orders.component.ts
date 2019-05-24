import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'cust-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() customer: any = {};

  constructor(){


  }
  ngOnInit(): void {

  }

}
