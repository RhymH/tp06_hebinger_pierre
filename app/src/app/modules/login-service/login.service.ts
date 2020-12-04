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

  public client:Client;

  public postClient(client :Client): Client {

    this.http.post<Client>('/api/login', client,{observe: 'response'})
      .subscribe(response => {

        const keys = response.headers.keys();

        console.log(response.headers.get("authorization"));

        this.client = response.body;

        alert("login succes " + JSON.stringify(this.client));

    });

    return this.client;

  }
}
