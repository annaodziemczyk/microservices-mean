import {AfterViewChecked, Component, Input, OnChanges} from "@angular/core";
import {Address} from "../../Address";

@Component({
  selector: 'address-display',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements AfterViewChecked, OnChanges{

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

ngOnChanges() :void{
if(!(this.address && this.address.primaryAddress) && this.customer){
      this.address = this.customer.primaryAddress;
    }
}

  ngAfterViewChecked(): void {
    
  }

}
