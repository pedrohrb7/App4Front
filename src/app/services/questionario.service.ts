import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  private apiurl = 'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbl0WBTLYCbmd2Dd6?maxRecords=10&api_key=keyfV0AwOq2Pctb5Y';
  // private apiurl = 'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/Question%C3%A1rio?maxRecords=3&view=Grid%20view?api_key=keyfV0AwOq2Pctb5Y';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
}