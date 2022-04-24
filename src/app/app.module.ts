import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RavenInAppModule } from 'raven-in-app-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenInAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
