import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../modules/client";
import {AppComponent} from '../app.component';
import {ClientService} from '../modules/client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  client: Observable<Client>;

  constructor(private app: AppComponent, private clientService: ClientService) {}

  ngOnInit(): void {
    this.client = this.clientService.client;
  }

}
