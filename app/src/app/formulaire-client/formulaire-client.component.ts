import { Component, OnInit } from '@angular/core';
import { Client } from "../modules/client";
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {ClientService} from '../modules/client.service';
import {Observable} from 'rxjs';
import {CreateClient} from '../modules/actions/client-action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.scss']
})
export class FormulaireClientComponent implements OnInit {

  public client: Client;

  constructor(private router: Router, private clientService: ClientService, private store: Store) { }

  ngOnInit(): void {

    this.client = {
      nom: '',
      prenom: '',
      adresse: '',
      codepostal: undefined,
      ville: '',
      pays: '',
      tel: undefined,
      mail: '',
      login: '',
      pass: '',
      passwdConf: '',
      civilite: ''
    }
  }

  save(model: Client, isValid: boolean){
    if(isValid){

      this.client = model;

      console.log(JSON.stringify(model));
      this.clientService.postClient(model).subscribe(
        result => {
          this.store.dispatch(new CreateClient(result));
        }
        ,
        error => {
          alert("connexion refusée compte inconnu\n" + JSON.stringify(error));
        }
      );

      this.router.navigate(['recap']);
    }
    console.log("envoie" + isValid);

  }

}
