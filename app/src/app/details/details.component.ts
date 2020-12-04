import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Articles} from '../modules/models/articles-interface';
import {ArticlesService} from '../modules/articles.service';
import {AddArticles} from '../modules/actions/article-action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private articles_service: ArticlesService, private route: ActivatedRoute, private store: Store) { }

  article: Observable<Articles[]>;

  id: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.article = this.articles_service.getArticle(this.id);
    console.log('load article');
  }

  OnClick(item: Articles) {
    this.addArticle(item.nom, item.categorie, item.prix);
  }

  addArticle(nom: string, categorie: string, prix: string) {
    this.store.dispatch(new AddArticles({ nom, categorie, prix }));

  }
}
