import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'account-menu',
  templateUrl: './account.menu.component.html',
  styleUrls: ['./account.menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  @Input() user: any = {};
  @Input() selectMenuItem:(item:string)=>{};
  @Input() selectedMenuItem: string = "ACCOUNT";

  ngOnInit(): void {
  }

}
