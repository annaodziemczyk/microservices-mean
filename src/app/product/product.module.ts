import {NgModule} from "@angular/core";
import {AddProductDialog} from "./addproduct/addproduct.component";
import {ProductService} from "./product.service";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material";


@NgModule({
  imports: [
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [
    AddProductDialog
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
