import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title: string;
  public clientes: any;
  public preClientes: any;

  constructor(public af: AngularFire){
    this.clientes = af.database.list('clientes');

    let items = af.database.object('clientes', {preserveSnapshot: true});
    items.subscribe( snapshot => {
      this.preClientes = JSON.stringify(snapshot.val(), null, 3);
    });

    console.log(this.clientes);
  }

}
