import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'address-display',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: any = {};
  @Input() editMode: any = false;
  @Input() user: any = {};
  @Input() customer:any = {};
  @Input() title: any;

  changeMode= ()=>{
    this.editMode=!this.editMode;
  };

  ngOnInit(): void {
  }

  onSave = (newAddress)=>{
    this.address=newAddress;
    this.editMode=false;
  }

}
