import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTokenModule } from 'angular-token';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000',
      oAuthBase: 'http://localhost:3000',
      oAuthPaths: {google_oauth2: 'auth/google_oauth2'},
      oAuthWindowType: 'sameWindow',
      oAuthCallbackPath: 'oauth_callback'
    })
    // AngularTokenModule.forRoot({
    //   apiBase: 'http://localhost:4200',
    //   oAuthBase: 'http://localhost:3000',
    //   oAuthPaths: {google_oauth2: 'omniauth/google_oauth2'},
    //   oAuthWindowType: 'newWindow'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
