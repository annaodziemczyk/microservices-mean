import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./Customer";

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomer(user): Observable <Customer>{
    return Observable.create(observer => {
      this.http.get('/api/customer/' + user._id)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }
}
