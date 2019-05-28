export class DeliveryOption {
  price:number;
  name:string;
  display:string;
  estimatedDelivery:string;
  selected:boolean=false;
  constructor(name:string, display:string, price:number, estimatedDelivery:string, selected?:boolean ){
    this.name=name;
    this.display=display;
    this.price=price;
    this.estimatedDelivery=estimatedDelivery;
    this.selected=selected;
  }
}
