import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer/customer.service";

export interface User {
  select:boolean;
  name: string;
  position: number;
  email: string;
}

export interface Address {

}

export interface Customer extends User{
  address:Address

}

const ELEMENT_DATA: User[] = [
  {select:false, position: 1, name: 'Anna', email: 'anna.odziemczyk@mycit.ie'}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[];
  dataSource = ELEMENT_DATA;
  public customerList:Customer[]=[];

  constructor(private customerService:CustomerService) {}

  public ngOnInit() {
    this.displayedColumns = ['select', 'position', 'name', 'email'];
    this.customerService.getCustomers().subscribe((customers:any)=>{
      this.customerList=customers;
    });
    this.dataSource = ELEMENT_DATA;
  }
}


