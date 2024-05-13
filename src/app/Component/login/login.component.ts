// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{
//   constructor(){

//   }
//   ngOnInit(): void {
    
//   }
//   login(form:NgForm):void{
//   }
//   openRegister():void{

//   }

// }
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {} // Inject Router service

  ngOnInit(): void {}

  login(form: NgForm): void {
    // Your login logic here

    // After successful login, navigate to the home component
    this.router.navigate(['/home']); // Navigate to home component
  }

  openRegister(): void {
    // Navigate to the register component when the button is clicked
    this.router.navigate(['/register']);
  }
  
}
