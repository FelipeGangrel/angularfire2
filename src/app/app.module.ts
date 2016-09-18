import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDZxwtQ-HIaHVV06mU5aG711DuIKYebNsY",
  authDomain: "web-quickstart-90eb7.firebaseapp.com",
  databaseURL: "https://web-quickstart-90eb7.firebaseio.com",
  storageBucket: "web-quickstart-90eb7.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
