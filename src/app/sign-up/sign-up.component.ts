import { Component } from '@angular/core';


export class Order {
  firstname: string;
  lastname: string;
  email: string;
  password: string;


  constructor(firstname: string, lastname: string, email: string, password:string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      
// OU 

// export class Order {
//   constructor(
//       public firstname: string,
//       public lastname: string,
//       public email: string,
//   ) {}
// }
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  model: Order = new Order('', '', '', '');
  constructor(){}


  submited = false;

  onSubmit():void{
    console.log(this.model)
    this.submited = true;
  }

 

}
