import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { ClientStateModel } from "./client-state-model";
import { CreateClient } from "../actions/client-action";
import {Client} from '../client';

@State<ClientStateModel>({
  name: "client",
  defaults: {
    client : {
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
})
export class ClientState {
  @Selector()
  static getClient(state: ClientStateModel): Client {
    return state.client;
  }

  @Action(CreateClient)
  Create(
    { getState, patchState }: StateContext<ClientStateModel>,
    { payload }: CreateClient
  ) {
    const state = getState();
    patchState({
      client : payload
    });
  }
}
