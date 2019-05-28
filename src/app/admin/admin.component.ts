import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer/customer.service";
import {AuthService} from "../auth/auth.service";
import * as _ from "lodash";

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


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userColumns: string[];
  customerColumns: string[];
  public userList:Customer[]=[];
  public customerList:Customer[]=[];

  constructor(private customerService:CustomerService, private authService:AuthService) {}

  public ngOnInit() {
    this.userColumns = ['select', 'firstName', 'lastName'];
    this.customerColumns = ['select', 'firstName', 'lastName', 'address', 'contact'];
    this.authService.listUsers().subscribe((users:any)=>{
      if(_.isArray(users)){
        this.userList=users;
      }
    });
    this.customerService.getCustomers().subscribe((customers:any)=>{
      this.customerList=_.map(customers, (customer)=>{
        customer["select"] = false;
        return customer;
      });
    });
  }
}


