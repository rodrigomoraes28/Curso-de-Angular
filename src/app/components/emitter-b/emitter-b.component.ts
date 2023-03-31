import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-emitter-b',
  templateUrl: './emitter-b.component.html',
  styleUrls: ['./emitter-b.component.css']
})
export class EmitterBComponent implements OnInit{

  //  myWord : String = ''
   myNumber2 : number = 0;

  constructor(){}
  ngOnInit(): void {}

  // onChangeNumber2(){
  //   console.log('teste2')
  //   this.myWord = 'Teste'
  // }

  onChangeNumber3(){
    this.myNumber2 = Math.floor(Math.random() * 67);
  }

}
