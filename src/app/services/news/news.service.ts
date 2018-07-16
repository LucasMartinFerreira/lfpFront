import { Injectable } from '@angular/core';
import {Constants} from "../constants";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public httpClient: HttpClient) {
  }


  public getAllNews(): Observable<any> {
    return this.httpClient.get(Constants.HOME_DEV + '/api/v1/news');
  }
}
