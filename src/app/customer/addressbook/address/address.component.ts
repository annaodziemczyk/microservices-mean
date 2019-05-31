import {AfterViewChecked, Component, Input, OnInit} from "@angular/core";
import {Address} from "../../Address";

@Component({
  selector: 'address-display',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements AfterViewChecked, onInit{

  @Input() editMode: any = false;
  @Input() user: any;
  @Input() customer:any;
  @Input() title: any;
  @Input() address; any;

  changeMode= ()=>{
    this.editMode=!this.editMode;
  };

  onSave = (newAddress)=>{
    this.customer.primaryAddress=newAddress;
    this.editMode=false;
  };

  onCancel = ()=>{
    this.editMode=false;
  }

ngOnInit() :void{
if(!(this.address && this.address.primaryAddress) && this.customer){
      this.address = this.customer.primaryAddress;
    }else if(!this.address){
      this.address = new Address();
    }
}

  ngAfterViewChecked(): void {
    
  }

}
