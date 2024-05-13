import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // Define your authentication logic here
   isAuthenticated(): boolean {
    // Check if the user is authenticated
    // For example, check if there's a valid token or session
    // Return true if authenticated, false otherwise
    return true; // Placeholder, replace with actual logic
}
}
