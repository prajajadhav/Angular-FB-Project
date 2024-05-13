// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

//   constructor() { }

//   registerUser(formData: any) {
//     // You can handle form submission logic here, such as sending the form data to a server.
//     console.log(formData); // For demonstration, logging form data to console.
//     // Add your logic to process the form data further, like sending it to a server.
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router) { }

  registerUser(formData: any) {
    // Perform registration logic here
    // After successful registration, navigate to the home page
    this.router.navigate(['/home']);
  }
}
