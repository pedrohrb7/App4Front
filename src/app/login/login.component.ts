import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public login: string;
  public passwd: string;


  validaLogin(){
    
    this.loginService.getData(this.login, this.passwd)
      .subscribe((res: any) => {
        if(res.records.length > 0){
          this.routes.navigate(['management-response']);
        } 
        else {
          window.alert("E-mail ou senha incorreto!");
        }
    });
  }

  constructor(
    private loginService: LoginService,
    private routes: Router
  ) { }

  ngOnInit(): void {
  }

}
