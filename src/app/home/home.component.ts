import {Component, Inject, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {AddProductDialog} from "../product/addproduct/addproduct.component";
import {Product} from "../product/product";



const PRODUCT_DATA: any[] = [
  {name: 'Car1', price: 1.0079, img: '../../assets/img/bentley.jpg', quantity:1},
  {name: 'Car2', price: 1.0079, img: '../../assets/img/maluch.jpg', quantity:1},
  {name: 'Car3', price: 1.0079, img: '../../assets/img/jeep.png', quantity:1},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() user: any = {};
  dataSource = PRODUCT_DATA;
  animal: string;
  name: string;

  constructor(private authService: AuthService, public dialog: MatDialog) {
    this.user = this.authService.getUser();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    this.dataSource = PRODUCT_DATA;
  }

}

