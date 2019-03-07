import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {

  constructor(private tokenService: AngularTokenService, private router: Router) {}

  ngOnInit() {
    this.tokenService.processOAuthCallback();
    this.tokenService.validateToken();
    console.log(this.tokenService.userSignedIn());
    this.router.navigate(['/']);
  }

}
