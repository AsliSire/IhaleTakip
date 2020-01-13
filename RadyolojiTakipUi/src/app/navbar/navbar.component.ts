import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  username: string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.currentUserValue) {
      this.isLogin = true;
      this.username = this.authenticationService.currentUserSubject.value.username;
      this.username = this.username.toUpperCase();
    }
    else {
      this.isLogin = false;
    }
  }
  logout() {
    this.authenticationService.logout();
  }
}
