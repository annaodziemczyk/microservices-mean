import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  addProduct(product): Observable <any>{
    return Observable.create(observer => {
      this.http.post('/api/catalogue/product', product)
        .subscribe((data : any) => {
        observer.next({product: data.product});
        observer.complete();
      })
    });
  }
}
