import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{

  someText = "TESTANDO O PIPE OPERATOR";
  someNumber = 1609000000000;
  notaProva = 6.75;
  today = new Date();

  constructor(){}
  ngOnInit(): void {
     
  }

}
