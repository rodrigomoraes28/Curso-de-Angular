import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Subject';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{

  animals: Animal[] = [];
  subjects: Subject[] = [];
  

  // animal : Animal = {
  //   name: 'Teste',
  //   type: 'Alguma coisa',
  //   age: 10
  // };
  animalDetails = '';
  subjectDetails = '';

  constructor(private listService: ListService){
    this.getAnimals()
    this.getSubjects()
  }
  ngOnInit(): void {}

  showAge(animal: Animal): void{ //posso deixar assim como void porque ele está fazendo uma alteração no meu DOM, na minha visualização, ele não retorna nada então seguindo os padrões de typescript mas não tem muito a ver com angular apesar de angular estar superligado a typescript
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  showHour(subject : Subject): void{
    this.subjectDetails =  `A matéria ${subject.name} tem uma cara horária de ${subject.totalHour} horas!`;
  }

  removeSubject(subject: Subject){
    console.log('Removendo subject...');
    this.subjects = this.listService.removeSubject(this.subjects, subject);
  }
  removeAnimal(animal: Animal){
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

  addAgeAnimal(animal : Animal){
    console.log('Aumentando a idade do animal...');
    this.animals = this.listService.addAge(this.animals, animal);
  }

  getAnimals() : void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getSubjects() : void{                       //o subjects antes da flecha podia ser X mas ele faz com o nome subjects (senao seria tipo ((x) => this.subjects = x))
    this.listService.getAllSubjects().subscribe((subjects) => (this.subjects = subjects)); //tem que fazer esse subscribe quando o evento é observavel, quer dizer que o evento vai ser concretizado, é como se ele estivesse esperando esse evento para realizar alguma coisa, então é o modulo que o Angular tem de fazer essa ação e aqui nesse subscribe tem como eu fazer algumas coisas com as propiedades do meu componente, entao ponho subjects e vou por que o this.subjects é igual ao subjects que retorna. Então como eu estou observando um array de Subject aqui(no list.service.ts) é o que vai retornar desse observsavel
  }
  
}
