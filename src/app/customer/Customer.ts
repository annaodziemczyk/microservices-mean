import {Address} from "./Address";
import {Contact} from "./Contact";

export class Customer{
  userId:string;
  firstName:String;
  lastName:String;
  primaryAddress:Address;
  primaryContactNumber:Contact;
  adresses:Address[];
  contactNumbers:Contact[];
  constructor(){

  }
}
