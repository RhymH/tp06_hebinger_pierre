import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: Observable<Client> = new Observable<Client>();

  constructor(private http: HttpClient) {

    this.client.subscribe(res => console.log("TestClient " + res));

  }

  public postClient(client :Client): Observable<Client> {

    this.client = this.http.post<Client>('/api/client', client);

    return this.client;

  }


}
