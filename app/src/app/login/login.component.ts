import { Component, OnInit } from '@angular/core';
import {Client} from '../modules/client';
import {Router} from '@angular/router';
import {LoginService} from '../modules/login-service/login.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  public client: Client = new Client();


  save(model: Client, isValid: boolean){
    if(isValid){

      console.log(model.mail + " " + model.passwd);

      this.loginService.postClient(model);

      this.router.navigate(['home']);
    }
    console.log("envoie" + isValid);

  }

  ngOnInit(): void {
  }

}
