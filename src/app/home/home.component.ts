import {Component, Inject, Input, OnInit, Sanitizer} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {AddProductDialog} from "../product/addproduct/add.product.component";
import {Product} from "../product/product";
import {ProductService} from "../product/product.service";
import * as _ from 'lodash';



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

  private user:any;
  public products : Product[];
  dataSource = PRODUCT_DATA;

  constructor(private productService:ProductService,
              private authService: AuthService,
              public dialog: MatDialog) {
    this.productService.getProducts()

      .subscribe(products =>{
      this.products = _.map(products, (product)=>{
        // var b64encoded = btoa(String.fromCharCode.apply(null, product.image.data));
        // var datajpg = "data:" + product.image.contentType + ";base64," + b64encoded;
        // this.base64Image = this._sanitizer.bypassSecurityTrustResourceUrl(datajpg);
        var uints = new Uint8Array(product.image.data);
        var base64 = btoa(String.fromCharCode.apply(null, uints));
        var url = 'data:image/png;base64,' + base64;
        product.img=url;
        console.log(url);
        return product;
      });

    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.dataSource = PRODUCT_DATA;
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });

  }

}

