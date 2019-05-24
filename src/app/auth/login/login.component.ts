import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  email: string;
  password: string;
  public loginFailed:boolean = false;

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.email, this.password)
    .subscribe(data => {
      console.log(data);
      if(data && data.user){
        this.router.navigate(['']);
      }else{
        this.loginFailed=true;
      }


    }, error => {
      this.loginFailed=true;
    })
  }

}
