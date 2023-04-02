import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { Subject } from 'src/app/Subject';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{

  animal?: Animal
  subject?: Subject

  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal()
    this.getSubject()
  }
  ngOnInit(): void {
    
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal)); //subscribe serve para executar a emissao de valores do Observable definido anteriormetne, no caso ae o Observable é o getItem  definido na classe list.service.ts
  }

  getSubject(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItemSubject(id).subscribe((subject) => (this.subject = subject));
  }
}
