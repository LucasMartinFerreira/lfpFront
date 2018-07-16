import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../services/news/news.service";

import * as moment from 'moment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public news:any;

  constructor(public newService: NewsService) { }

  ngOnInit() {
    this.getAllNews();
  }


  /**
   * @description Get All News
   */
  getAllNews(){

    this.newService.getAllNews().subscribe(dataNews=>{

      let object ={}
      let array = [];

      for(let i=0; i< dataNews.data.length; i++){
        object ={
          "date": moment(dataNews.data[i].date).format('DD-MM-YYYY'),
          "link": dataNews.data[i].link,
          "photo": dataNews.data[i].photo,
          "reporter": dataNews.data[i].reporter,
          "subtitle" : dataNews.data[i].subtitle,
          "text": dataNews.data[i].text,
          "title":dataNews.data[i].title,
          "idNew": dataNews.data[i]._id
        }

        array.push(object);
      }
      this.news = array;
    })
  }

}
