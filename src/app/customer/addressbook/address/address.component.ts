import {Component, Input, OnInit} from "@angular/core";
import {Address} from "../../Address";

@Component({
  selector: 'address-display',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() editMode: any = false;
  @Input() user: any;
  @Input() customer:any;
  @Input() title: any;

  changeMode= ()=>{
    this.editMode=!this.editMode;
  };

  ngOnInit(): void {

  }

  onSave = (newAddress)=>{
    this.customer.primaryAddress=newAddress;
    this.editMode=false;
  };

  onCancel = ()=>{
    this.editMode=false;
  }

}
