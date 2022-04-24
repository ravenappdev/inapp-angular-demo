import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTestModule } from 'raven-notifications';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
