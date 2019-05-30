import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'update-customer',
  templateUrl: './update.customer.component.html',
  styleUrls: ['./update.customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit(): void {
  }

}
