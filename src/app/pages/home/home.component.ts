import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news:any;
  constructor(public _News: NewsService) { }

  ngOnInit(){

    this._News.getNews().subscribe( e=>{

      console.log(e);
      this.news=e['articles'];
    })

  }

}
