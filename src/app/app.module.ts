import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RavenInAppModule } from '@ravenapp/raven-inapp-angular'
=======
import { RavenInAppModule } from '@ravenapp/raven-inapp-angular';
>>>>>>> 83a7b8057c49094b15f44ed7635bb61cfe04f257
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RavenInAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
