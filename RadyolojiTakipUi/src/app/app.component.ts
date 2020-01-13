import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'krommetalweb';
  isLogin: boolean = false;
  username: string;
  sicil_no: number;
  hour: string;

  constructor(private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.isLogin = true;
      this.username = this.authenticationService.currentUserSubject.value.username;
    }
    else {
      this.isLogin = false;
    }
  }

}