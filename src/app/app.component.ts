import { Component } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tokenService: AngularTokenService) { }

  title = 'oauth';

  login() {
    this.tokenService.signInOAuth('google_oauth2')
  }
}
