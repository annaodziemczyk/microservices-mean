import {NgModule} from "@angular/core";
import {AddProductDialog} from "./addproduct/addproduct.component";
import {ProductService} from "./product.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    AddProductDialog
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
