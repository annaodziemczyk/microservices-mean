import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable <any[]>{
    return Observable.create(observer => {
      this.http.get('/api/catalogue/product')
        .subscribe((data : any) => {
          console.log(data);
          observer.next(data);
          observer.complete();
        })
    });
  }

  addProduct(product): Observable <any>{
    return Observable.create(observer => {
      this.http.post('/api/catalogue/product', product)
        .subscribe((data : any) => {
        observer.next(data);
        observer.complete();
      })
    });
  }

  deleteProduct(productId): Observable <any>{
    return Observable.create(observer => {
      this.http.delete('/api/catalogue/product/' + productId)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  updateProduct(product): Observable <any>{
    return Observable.create(observer => {
      this.http.put('/api/catalogue/product' , product)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }
}
