import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Articles} from '../modules/models/articles-interface';
import {AddArticles, DelArticles} from '../modules/actions/article-action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private store: Store) { }

  listArticles: Observable<Articles[]>;

  ngOnInit(): void {
    this.listArticles = this.store.select(state => state.listArticles.articles);
  }


  OnClick(item: Articles) {
    this.addArticle(item.nom, item.categorie, item.prix);
  }

  addArticle(nom: string, categorie: string, prix: string) {
    this.store.dispatch(new DelArticles({ nom, categorie, prix }));

  }
}
