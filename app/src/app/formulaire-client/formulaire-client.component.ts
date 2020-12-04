import { Component, OnInit } from '@angular/core';
import { Client } from "../modules/client";
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {ClientService} from '../modules/client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.scss']
})
export class FormulaireClientComponent implements OnInit {

  public client: Client;

  constructor(private router: Router, private clientService: ClientService) { }

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
      passwd: '',
      passwdConf: '',
      civilite: ''
    }
  }


  obsclient: Observable<Client>;

  save(model: Client, isValid: boolean){
    if(isValid){

      this.client = model;

      this.obsclient = this.clientService.postClient(model);
      this.obsclient.subscribe(res => console.log(res));

      this.router.navigate(['recap']);
    }
    console.log("envoie" + isValid);

  }

}
