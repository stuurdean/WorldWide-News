import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.scss']
})
export class SportsNewsComponent implements OnInit {

  news:any;
  constructor(public _News: NewsService) { }

  ngOnInit(){

    this._News.getBusiness().subscribe( e=>{

      console.log(e);
      this.news=e['articles'];
    })

  }

}
