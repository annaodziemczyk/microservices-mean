import {NgModule} from "@angular/core";
import {AddProductDialog} from "./addproduct/add.product.component";
import {ProductService} from "./product.service";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {AngularFileUploaderModule} from "angular-file-uploader";


@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularFileUploaderModule
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
