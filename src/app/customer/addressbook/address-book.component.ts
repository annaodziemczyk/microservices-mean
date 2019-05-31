import {Component, Input, OnInit} from "@angular/core";
import {Address} from "../Address";

@Component({
  selector: 'address-book',
  templateUrl: './address.book.component.html',
  styleUrls: ['./address.book.component.scss']
})
export class AddressBookComponent implements OnInit {

  @Input() customer: any = {};
  @Input() user:any = {};

  public newAddress:Address=new Address();

  constructor(){


  }
  ngOnInit(): void {

  }

}
