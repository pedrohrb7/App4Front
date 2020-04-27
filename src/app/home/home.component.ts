import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionarioService } from '../services/questionario.service';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  

constructor(
  private http: HttpClient,
  private questionario: QuestionarioService){}

data:any = {
  "records": [
    {
      "fields": { 
        "Nome": "",
        "Email": "",
        "Telefone": "",
        "Assunto": "",
        "Conteúdo": "",
        "Forma de contato": "",
        "Disponibilidade para contato": ""
      }
    }
  ]
}

auxDisponibilidade:any = {
  "Comercial": false,
  "Manha": false,
  "Tarde": false,
  "Noite": false,
  "Outros": ""
}

enviado: boolean = false;


cadastrar (){
  let aux = []
  
  if (this.auxDisponibilidade["Comercial"]) {
    aux.push("comercial")
  }
  if (this.auxDisponibilidade["Manha"]) {
    aux.push("manha")
  }
  if (this.auxDisponibilidade["Tarde"]) {
    aux.push("tarde")
  }
  if (this.auxDisponibilidade["Noite"]) {
    aux.push("noite")
  }
  if (this.auxDisponibilidade["Outros"] != "" ){
    aux.push(this.auxDisponibilidade["Outros"]);
  }

  let disponibilidade = "";

  for (let i=0; i < aux.length; i++){
    disponibilidade += aux[i] + " ";
  }

  this.data.records[0].fields["Disponibilidade para contato"] = disponibilidade;
  
  this.questionario.postData(this.data).subscribe()

  this.enviado = true;

}

  ngOnInit(): void {
  }

}