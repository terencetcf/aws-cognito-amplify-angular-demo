import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aws-cognito-amplify-angular-demo';

  logout() {
    Auth.signOut();
  }
}
