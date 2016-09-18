import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig, AngularFireModule  } from 'angularfire2';

// Angular 2 Material
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdGridListModule } from '@angular2-material/grid-list';

// Meus componentes
import { AppComponent } from './components/app/app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDZxwtQ-HIaHVV06mU5aG711DuIKYebNsY",
  authDomain: "web-quickstart-90eb7.firebaseapp.com",
  databaseURL: "https://web-quickstart-90eb7.firebaseio.com",
  storageBucket: "web-quickstart-90eb7.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule, MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdGridListModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    ClientesComponent,
    LoginComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]  // ver como funciona o processo de bootstrap para passar os parametros de autenticacao para o app
})
export class AppModule { }
