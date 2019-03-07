import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
    {path: 'oauth_callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
