import { Articles } from '../models/articles-interface';

export class AddArticles {
  static readonly type = '[Articles] Add';
  constructor(public payload: Articles) {}
}
export class DelArticles {
  static readonly type = '[Articles] Del';
  constructor(public payload: Articles) {}
}
