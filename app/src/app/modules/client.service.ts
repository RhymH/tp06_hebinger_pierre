import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {

  }

  public postClient(client :Client): Observable<Client> {

    let httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};

    let data :String =
      "login=" + client.login +
      "&" + "pass=" + client.pass +
      "&" + "nom=" + client.nom +
      "&" + "prenom=" + client.prenom +
      "&" + "adresse=" + client.adresse +
      "&" + "ville=" + client.ville +
      "&" + "pays=" + client.pays +
      "&" + "tel=" + client.tel +
      "&" + "mail=" + client.mail +
      "&" + "civilite=" + client.civilite
    ;

    return this.http.post<Client>('/api/register', data, httpOptions);

  }


}
