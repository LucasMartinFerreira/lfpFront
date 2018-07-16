import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Constants} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(public httpClient :HttpClient) { }


  public getPlayers() :Observable <any>{

    return this.httpClient.get(Constants.HOME_DEV +'/api/v1/players');

  }
}
