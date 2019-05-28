import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TokenStorage } from './token.storage';
import {LocalStorage} from "@ngx-pwa/local-storage";
import {Customer} from "../customer/Customer";

@Injectable()
export class AuthService {

  constructor(private http : HttpClient, private token: TokenStorage, private localStorage: LocalStorage) {}

  public $userSource = new Subject<any>();

  login(email : string, password : string) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/auth/login', {
        email,
        password
      }).subscribe((data: any) => {
        if(data){
          observer.next({user: data.user});
          this.setUser(data.user);
          this.token.saveToken(data.token);
        }else{
          observer.next();
        }
        observer.complete();
      }, (error: any) => {
          observer.next();
      })
    });
  }

  register(firstName : string, lastName : string, email : string, password : string, repeatPassword : string, roles: string[]) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/auth/register', {
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        roles
      }).subscribe((data : any) => {
        observer.next({user: data.user});
        this.setUser(data.user);
        this.token.saveToken(data.token);
        observer.complete();
      })
    });
  }

  listUsers(): Observable <Customer[]>{
    return Observable.create(observer => {
      this.http.get('/api/user/list')
        .subscribe((data : any) => {
          observer.next(data);
          observer.complete();
        })
    });
  }


  setUser(user): void {
    if (user) user.isAdmin = (user.roles.indexOf('admin') > -1);
    this.$userSource.next(user);
    (<any>window).user = user;
  }

  getUser(): Observable<any> {
    return this.$userSource.asObservable();
  }

  me(): Observable<any> {
    return Observable.create(observer => {
      const tokenVal = this.token.getToken();

      if (!tokenVal) {
        return  observer.complete();
      }
      const options = {
        headers: {
          Authentication: 'Bearer ' + tokenVal
        }
      };
      this.http.get('/api/auth/me', options).subscribe((data : any) => {
        observer.next({user: data.user});
        this.setUser(data.user);
        observer.complete();
      })
    });
  }

  signOut(): void {
    this.token.signOut();
    this.setUser(null);
    delete (<any>window).user;
    this.localStorage.removeItem("cart").subscribe(()=>{

    });
  }
}
