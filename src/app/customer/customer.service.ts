import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./Customer";

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable <Customer[]>{
    return Observable.create(observer => {
      this.http.get('/api/customer')
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
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

  createCustomer(customer): Observable <Customer>{
    return Observable.create(observer => {
      this.http.post('/api/customer', customer)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  addAddress(customerId, address): Observable <Customer>{
    return Observable.create(observer => {
      this.http.post('/api/customer/' + customerId + '/addAddress', address)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  removeAddress(customerId, addressId): Observable <Customer>{
    return Observable.create(observer => {
      this.http.delete('/api/customer/'+ customerId + "/removeAddress" + addressId)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  addContact(customerId, contact): Observable <Customer>{
    return Observable.create(observer => {
      this.http.post('/api/customer/' + customerId + "addContact", contact)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  removeContact(customerId, contactId): Observable <Customer>{
    return Observable.create(observer => {
      this.http.delete('/api/customer/'+ customerId + "/removeContact" + contactId)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }

  updateCustomer(customer): Observable <Customer>{
    return Observable.create(observer => {
      this.http.put('/api/customer/', customer)
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }
}
