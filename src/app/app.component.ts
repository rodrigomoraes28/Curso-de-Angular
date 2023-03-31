import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
    salary : 8000,
    birth : '28/5/2002', //tentei usar um numero para depois por Data mas não edu muito certo

  };

 
  title = 'curso-angular';
}
