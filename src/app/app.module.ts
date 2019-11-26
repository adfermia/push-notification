import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PushNotificationsModule } from 'ng-push'; // import the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PushNotificationsModule // add it to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
