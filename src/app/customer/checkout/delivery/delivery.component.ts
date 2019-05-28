import {Component, OnInit} from "@angular/core";
import {DeliveryOption} from "./DeliveryOption";

@Component({
  selector: 'delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit{
  deliveryOptions:DeliveryOption[]=[
    new DeliveryOption("STANDARD", "Standard Delivery", 3.00, "Delivered on or before Tuesday, 4 June, 2019"),
    new DeliveryOption("EXPRESS", "Express Delivery", 5.00, "Delivered on or before Thursday, 30 May, 2019"),
    new DeliveryOption("NEXT_DAY", "Next-Working-Day Delivery", 12.00, "Delivered between 7am and 10pm on Tuesday, 30 May, 2019"),
    new DeliveryOption("NOMINATED_DAY", "Nominated Dat", 12.00, "Choose a day that suits you")
  ];
  ngOnInit(): void {
  }

}
