import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Articles} from '../modules/models/articles-interface';
import {ArticlesState} from '../modules/states/articles-state';
import { Store } from "@ngxs/store";
import {ClientService} from '../modules/client.service';
import {Client} from '../modules/client';
import {ClientState} from '../modules/states/client-state';


@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.scss']
})
export class TetiereComponent implements OnInit {

  constructor(private store: Store, private clientService: ClientService) { }

  client :Observable<Client>;

  ngOnInit(): void {
    this.ArticlesNumber = this.store.select(ArticlesState.getNbArticless);
    this.client = this.store.select(ClientState.getClient);
    //this.ArticlesNumber = this.store.select(state => state.listArticles.articles.length);
  }
  ArticlesNumber: Observable<number>;

  listArticles: Observable<Articles>;

}
