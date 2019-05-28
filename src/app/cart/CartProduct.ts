import {Product} from "../product/product";

export class CartProduct extends Product{
  catalogueId:string;

  constructor(product:Product){
    super();
    this.catalogueId = product._id;
    this.name=product.name;
    this.quantity=1;
    this.price=product.price;
    this.image=product.image;

  };
}
