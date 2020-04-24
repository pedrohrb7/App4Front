import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionarioService } from '../services/questionario.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public name: string;
  public email: string;
  public phone: string;
  public subject: string;
  public msgContent: string;


constructor(
  private http: HttpClient,
  private questionario: QuestionarioService){
}

data:any = {
  "records": [
    {
      "fields": { 
        "Nome": " ",
        "Email": " ",
        "Telefone": " ",
        "Assunto": " ",
        "Conteúdo": " ",
        "Forma de contato": " ",
        "Disponibilidade para contato": " "
      }
    }
  ]
}

disponibilidade:any = {
  "Comercial": " ",
  "Manha": " ",
  "Tarde": " ",
  "Noite": " ",
  "Outros": ""
}

enviado: boolean = false;


cadastrar (){
  console.log('ta indo') 

  let aux = []
  
  if (this.disponibilidade["Comercial"]) {
    aux.push("comercial")
  }
  if (this.disponibilidade["Manha"]) {
    aux.push("manha")
  }
  if (this.disponibilidade["Tarde"]) {
    aux.push("tarde")
  }
  if (this.disponibilidade["Noite"]) {
    aux.push("noite")
  }
  if (this.disponibilidade["Outros"] != "" ){
    aux.push(this.disponibilidade["Outros"]);
  }
  
  this.data.records[0].fields["Disponibilidade para contato"] = JSON.stringify(aux);
  
  this.questionario.postData(this.data).subscribe(res => {
  console.log(res)
  })

  this.enviado = true;

}

  ngOnInit(): void {
  }

}