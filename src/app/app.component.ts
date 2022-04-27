import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId: any ;
  appId: any;
  signature: any;
  title = 'demo-notification-center';

  callbackFunction(message: any) {
    alert(message.title)
  }
}
