import { Component , OnInit, Input} from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name : string = '';
  @Input() userData! : {email : string , role : string , salary: number, birth: string};
 
  constructor(){}
  ngOnInit(): void {
   
  }

}
