import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private auth:AuthService) {
    //You must put this line in the constructor of the component used for login
    auth.handleAuthentication();
  }



  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
