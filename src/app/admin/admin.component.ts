import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer/customer.service";
import {AuthService} from "../auth/auth.service";
import * as _ from "lodash";
import {AddProductDialog} from "../product/addproduct/add.product.component";
import {UpdateCustomerComponent} from "./updatecustomer/update.customer.component";
import {MatDialog} from "@angular/material";

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

  constructor(private customerService:CustomerService, private authService:AuthService, public dialog: MatDialog) {}

  public ngOnInit() {
    this.userColumns = ['firstName', 'lastName', 'edit', 'delete'];
    this.customerColumns = ['firstName', 'lastName', 'address', 'contact', 'edit', 'delete'];
    this.authService.listUsers().subscribe((users:any)=>{
      if(_.isArray(users)){
        this.userList=users;
      }
    });

    this.customerService.getCustomers().subscribe((customers:any)=>{
      if(_.isArray(customers)){
        this.customerList=customers;
      }
    });
  }

  removeCustomer = (customer)=>{

  };

  updateCustomer = (customer)=>{
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      width: '400px',
      data:{customer:customer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


