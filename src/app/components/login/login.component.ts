import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: any = {};

  constructor(public af: AngularFire) { 
    this.usuario = {
      logado: false
    }

  }

  public entrar(event: any):void {

  }

  public sair(event: any):void {

  }

  public cadastrar(event: any):void {

  }

  

  ngOnInit() {
  }

}
