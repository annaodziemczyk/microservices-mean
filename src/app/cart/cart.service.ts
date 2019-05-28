import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Customer} from "../customer/Customer";
import {Cart} from "./Cart";
import {CartProduct} from "./CartProduct";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {Product} from "../product/product";
import * as _ from "lodash";

@Injectable()
export class CartService {

  public $cartSource = new Subject<any>();

  constructor(private http: HttpClient, private localStorage: LocalStorage) {
  }

  createCart(product:Product, userId?:string): Observable<Customer> {
    let cart:Cart = new Cart();
    let cartProduct:CartProduct=new CartProduct(product);
    cart.itemsInCart=[cartProduct];
    if(userId)
      cart.userId = userId;

    return Observable.create(observer => {
      this.http.post('/api/cart/products', cart)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        })
    });
  }

  viewCart(cartId): Observable<Customer> {
  return Observable.create(observer => {
      this.http.get('/api/cart/products/' + cartId)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        });
    });
  }

  viewUserCart(userId:string): Observable<Customer> {
    return Observable.create(observer => {
      this.http.get('/api/cart/products/user/' + userId)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        });
    });
  }


  combineCarts(userId:string, tempCartId:string): Observable<Customer> {
    return Observable.create(observer => {
      this.http.get('/api/cart/products/'+ tempCartId +'/combine/' + userId)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        });
    });
  }

  addProduct(cartId, product): Observable<Customer> {

    let cartProduct:CartProduct=new CartProduct(product);

    return Observable.create(observer => {
      this.http.put('/api/cart/products/' + cartId + '/addItem/', cartProduct)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        })
    });
  }

  removeProduct(cartId, product): Observable<Customer> {
    return Observable.create(observer => {
      this.http.put('/api/cart/products/' + cartId + '/removeItem/', product)
        .subscribe((data: any) => {
          this.setCart(data);
          observer.next(data);
          observer.complete();
        })
    });
  }

  setCart(cart): void {

    if(_.has(cart, "_id")){
      this.localStorage.setItem("cart", cart).subscribe((data)=>{

      });
    }

  }

  getCart(): Observable<any> {
    return this.localStorage.getItem("cart");
  }
}
