import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {PlatformLocation} from "@angular/common";

@Component({
  selector: 'add.product.dialog',
  templateUrl: './add.product.dialog.html',
  styleUrls: ['./add.product.component.scss']
})
export class AddProductDialog {

  public data: Product = {} as Product;
  public afuConfig = {
        multiple: false,
        formatsAllowed: ".jpg,.png",
        maxSize: "1",
        uploadAPI:  {
          url:"https://example-file-upload-api"
        },
        theme: "dragNDrop",
        hideProgressBar: false,
        hideResetBtn: true,
        hideSelectBtn: false,
        replaceTexts: {
          selectFileBtn: 'Select File',
          resetBtn: 'Reset',
          uploadBtn: 'Upload',
          dragNDropBox: 'Product Image',
          attachPinBtn: 'Attach Files...',
          afterUploadMsg_success: 'Successfully Uploaded !',
          afterUploadMsg_error: 'Upload Failed !'
        }
    };

  constructor(
    public dialogRef: MatDialogRef<AddProductDialog>,
    private productService:ProductService,
    private platformLocation:PlatformLocation) {
    this.afuConfig.uploadAPI = {url: (platformLocation as any).location.origin + "/imageUpload"};
  }

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
