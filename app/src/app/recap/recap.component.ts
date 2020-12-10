import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../modules/client";
import {AppComponent} from '../app.component';
import {ClientService} from '../modules/client.service';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {ClientStateModel} from '../modules/states/client-state-model';
import {ClientState} from '../modules/states/client-state';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  client: Observable<Client>;

  constructor(private app: AppComponent, private store: Store) {}

  ngOnInit(): void {
    this.client = this.store.select(ClientState.getClient);
  }

}
