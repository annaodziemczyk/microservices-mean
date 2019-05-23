import {NgModule} from "@angular/core";
import {AddProductDialog} from "./addproduct/addproduct.component";
import {ProductService} from "./product.service";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";


@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  declarations: [
    AddProductDialog
  ],
  providers: [
    ProductService
  ],
  entryComponents: [AddProductDialog],
})
export class ProductModule { }
