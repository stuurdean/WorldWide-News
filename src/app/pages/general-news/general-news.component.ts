import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.scss']
})
export class GeneralNewsComponent implements OnInit {

  news:any;
  constructor(public _News: NewsService) { }

  ngOnInit(){

    this._News.getGeneral().subscribe( e=>{

      console.log(e);
      this.news=e['articles'];
    })

  }

}
