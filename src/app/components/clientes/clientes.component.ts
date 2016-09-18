import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: any;
  public preClientes: any;

  constructor(public af: AngularFire){
    this.clientes = af.database.list('clientes');

    let items = af.database.object('clientes', {preserveSnapshot: true});
    items.subscribe( snapshot => {
      this.preClientes = JSON.stringify(snapshot.val(), null, 3);
    });

  }


  ngOnInit() {
  }

  

}
