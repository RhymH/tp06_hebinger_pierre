import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../client';
import {Observable} from 'rxjs';
import {ClientService} from '../client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public postClient(client :Client) : Observable<Client>{

    let httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};

    let data :String =
      "login=" + client.login +
      "&" + "pass=" + client.pass
    ;

    console.log("login data " + JSON.stringify(data));

    return this.http.post<Client>('/api/login', data, httpOptions);

  }
}
