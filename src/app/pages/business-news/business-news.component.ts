import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss']
})
export class BusinessNewsComponent implements OnInit {

  news:any;
  constructor(public _News: NewsService) { }

  ngOnInit(){

    this._News.getBusiness().subscribe( e=>{

      console.log(e);
      this.news=e['articles'];
    })

  }
}
