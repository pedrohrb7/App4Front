import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl = 'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&';

  constructor(private http: HttpClient) { }

  public statusLogin: boolean;

  getData(Email, Senha){  

    return this.http.get(this.loginUrl + 'filterByFormula=(AND({Email}="' + Email + '",{Senha}="' + Senha + '"))');
  }
}
