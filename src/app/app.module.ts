import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HomeComponent } from './home/home.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthenticatedComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
