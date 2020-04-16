import { QuestionarioService } from './../services/questionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-response',
  templateUrl: './management-response.component.html',
  styleUrls: ['./management-response.component.css']
})
export class ManagementResponseComponent implements OnInit {

  public listar = [];

  constructor(private questionarioservice: QuestionarioService) { }

  ngOnInit() {
      this.questionarioservice.getData().subscribe((data:any) => {
      this.listar = data.records;
      console.log(this.listar);
    });
  }

}
