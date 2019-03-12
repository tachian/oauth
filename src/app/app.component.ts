import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private tokenService: AngularTokenService) { }

  title = 'oauth';

  ngOnInit() {
  }

  login() {
    this.tokenService.signInOAuth('google_oauth2');
  }

  logout() {
    this.tokenService.signOut().subscribe(
      (x) => console.log('Successful logout')
    );
  }
}
