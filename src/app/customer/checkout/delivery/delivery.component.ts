import {Component, Input, OnInit} from "@angular/core";
import {DeliveryOption} from "./DeliveryOption";
import {DateFormatPipe} from "ngx-moment";
import { MatRadioChange } from '@angular/material';
import * as _ from "lodash";

@Component({
  selector: 'delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit{

  @Input() onDeliveryOptionChange = (option)=>{};
  selectedOption:any;
  nextTwoWeeks: Date = new Date();
  nextWeek: Date = new Date();
  nextDay: Date = new Date();

  deliveryOptions:DeliveryOption[]=[];
  ngOnInit(): void {
    this.nextDay.setDate(this.nextDay.getDate() + 1);
    this.nextWeek.setDate(this.nextWeek.getDate() + 7);
    this.nextTwoWeeks.setDate(this.nextTwoWeeks.getDate() + 14);

    this.deliveryOptions=[
      new DeliveryOption("STANDARD", "Standard Delivery", 3.00, "Delivered on or before " + (new DateFormatPipe()).transform(this.nextTwoWeeks, 'dddd, D MMMM, YYYY')),
      new DeliveryOption("EXPRESS", "Express Delivery", 5.00, "Delivered on or before " + (new DateFormatPipe()).transform(this.nextWeek, 'dddd, D MMMM, YYYY')),
      new DeliveryOption("NEXT_DAY", "Next-Working-Day Delivery", 12.00, "Delivered between 7am and 10pm on " + (new DateFormatPipe()).transform(this.nextDay, 'dddd, D MMMM, YYYY')),
      new DeliveryOption("NOMINATED_DAY", "Nominated Day", 12.00, "Choose a day that suits you" )
    ];

    this.selectedOption = this.deliveryOptions[0].name;
    this.onDeliveryOptionChange(this.deliveryOptions[0]);
  }

  optionChange(event: MatRadioChange) {
    let option = _.find(this.deliveryOptions, {name: this.selectedOption});
    this.onDeliveryOptionChange(option);
  }

}
