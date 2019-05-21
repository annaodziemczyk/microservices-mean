import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'add.product.dialog',
  templateUrl: './add.product.dialog.html',
})
export class AddProductDialog {

  public data: Product = {} as Product;

  constructor(
    public dialogRef: MatDialogRef<AddProductDialog>,
    private productService:ProductService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProduct(): void {
    var fileReader = new FileReader();

    console.log(this.data.img);
    fileReader.readAsArrayBuffer(this.data.img);
    fileReader.onload = this.imgLoaded;

  }
   imgLoaded(evt) {
      var fd = new FormData();
      for(var key in this.data){
        fd.append(key, this.data[key]);
     }
      fd.append("img", evt.target.result);
      this.productService.addProduct(this.data);

    }

}
