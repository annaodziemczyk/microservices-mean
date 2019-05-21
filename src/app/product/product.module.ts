import {NgModule} from "@angular/core";
import {AddProductDialog} from "./addproduct/addproduct.component";
import {ProductService} from "./product.service";


@NgModule({
  imports: [
  ],
  declarations: [
    AddProductDialog
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
