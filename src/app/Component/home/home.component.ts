import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://i.pinimg.com/474x/e0/03/1b/e0031b858ccfcf7c88af8f8ff100d32d.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://c0.wallpaperflare.com/preview/956/761/225/5be97da101a3f.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg'
  ];


  // constructor(){}
  // ngOnInit(): void {}

  // logout(): void {
  //   // Your logout logic here
  //   // For example, clearing session, removing tokens, etc.

  //   // After logout, navigate to the login component
  //   this.router.navigate(['/login']);
  // }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  postMessage(form: NgForm): void {
    // Your post message logic here
  }

  logout(): void {
    // Your logout logic here
    this.router.navigate(['/login']);
  }

 
}