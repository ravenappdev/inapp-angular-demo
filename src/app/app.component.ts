import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userId: any = 'priyansh';
  appId: any = 'ead40fc4-34a2-4e7c-abaf-337c00eef79a';
  signature: any =
    'a5d61c6d6855a168665b9d69bb0f50318f56c6d5e22879ab8f761d7012ea9d0d';
  title = 'demo-notification-center';

  callbackFunction(message: any) {
    alert(message.title);
  }
}
