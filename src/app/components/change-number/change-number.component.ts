import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter() //o changeNumber está lá no emmiter.component.html, eu to pegando ele do emmiter para ca com o output (eu acho), usamos o any para um evento mas não é uma boa prática tipar todos os eventos como any
  constructor(){}
  ngOnInit(): void {
    
  }

  handleClick(){
    this.changeNumber.emit();
  }

}
