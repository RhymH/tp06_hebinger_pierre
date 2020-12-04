import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Articles } from './models/articles-interface';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {  }

  public getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(environment.articles_url);
  }

  public getArticle(nom: string){
    return this.http.get<Articles[]>(environment.articles_url).pipe(map(articles => articles
      .filter(article => nom && article.nom.toLowerCase().includes(nom.toLowerCase()))
    ));
  }

}
