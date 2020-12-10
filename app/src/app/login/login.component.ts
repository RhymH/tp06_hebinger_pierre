import { Component, OnInit } from '@angular/core';
import {Client} from '../modules/client';
import {Router} from '@angular/router';
import {LoginService} from '../modules/login-service/login.service';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {CreateClient} from '../modules/actions/client-action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private store: Store) { }

  public client: Client = new Client();


  save(model: Client, isValid: boolean){
    if(isValid){

      console.log(model.login + " " + model.pass);

      this.loginService.postClient(model).subscribe(
        result => {
          this.store.dispatch(new CreateClient(result));
        }
        ,
        error => {
          alert("connexion refusée compte inconnu\n" + JSON.stringify(error));
        }
      );

      this.router.navigate(['home']);
    }
    console.log("envoie" + isValid);

  }

  ngOnInit(): void {
  }

}
