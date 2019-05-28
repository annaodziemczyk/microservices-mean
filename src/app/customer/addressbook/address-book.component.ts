import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'address-book',
  templateUrl: './address.book.component.html',
  styleUrls: ['./address.book.component.scss']
})
export class AddressBookComponent implements OnInit {

  @Input() customer: any = {};
  @Input() user:any = {};

  constructor(){


  }
  ngOnInit(): void {

  }

}
