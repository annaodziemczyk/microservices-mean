import {Component, Input, OnInit} from "@angular/core";
import {Address} from "../../Address";
import * as _ from 'lodash';
import {Contact, ContactType} from "../../Contact";
import {CustomerService} from "../../customer.service";
import {Customer} from "../../Customer";

@Component({
  selector: 'address-form',
  templateUrl: './add.address.component.html',
  styleUrls: ['./add.address.component.scss']
})
export class AddAddressComponent implements OnInit {
  @Input() user: any = {};
  @Input() customer: any;
  @Input() showHeader: boolean = true;
  @Input() onSave:(address:Address)=>{};
  @Input() onCancel:()=>{};

  public address:Address = new Address();
  public contact:Contact = new Contact();
  public addressList:Address[] = [];
  public contactList:Contact[] = [];

  constructor(private customerService:CustomerService){

  }
  cancelEntry= ()=>{
    if(this.onCancel)
      this.onCancel();
  }
  addAddress = ()=> {
    if(_.isNil(this.customer)){
      let customer:Customer = new Customer();
      customer.userId=this.user._id;
      customer.firstName=this.user.firstName;
      customer.lastName=this.user.lastName;
      customer.primaryAddress=this.address;
      customer.primaryContactNumber=this.contact;

      this.customerService.createCustomer(customer).subscribe((customer)=>{

        if(this.onSave){
          this.onSave(customer.primaryAddress);
        }

      });
    }else{
      this.customerService.addAddress(this.user._id, this.address).subscribe((customer)=>{
        if(this.onSave){
          this.onSave(customer.primaryAddress);
        }
      });
    }
  };

  ngOnInit(): void {

    if(this.customer){
      this.address = this.customer.primaryAddress;
      this.contact = this.customer.primaryContactNumber;
      this.addressList = _.concat([this.customer.primaryAddress],this.customer.addresses);
      this.contactList = _.concat([this.customer.primaryContactNumber], this.customer.contacts);
    }
  }

}
