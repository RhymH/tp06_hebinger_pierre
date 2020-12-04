import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { ArticlesStateModel } from './articles-state-models';
import { AddArticles, DelArticles } from '../actions/article-action';

@State<ArticlesStateModel>({
  name: 'listArticles',
  defaults: {
    articles: []
  }
})
export class ArticlesState {
  @Selector()
  static getNbArticless(state: ArticlesStateModel): number {
    return state.articles.length;
  }

  @Action(AddArticles)
  add(
    { getState, patchState }: StateContext<ArticlesStateModel>,
    { payload }: AddArticles
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      articles: [...state.articles, payload]
    });
  }

  @Action(DelArticles)
  del(
    { getState, patchState }: StateContext<ArticlesStateModel>,
    { payload }: DelArticles
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans users
      articles: state.articles.filter(
        item => item.nom !== payload.nom
      )
    });
  }
}
