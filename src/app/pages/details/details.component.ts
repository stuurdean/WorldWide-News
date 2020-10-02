import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  Ref: any;
  details : any;
  constructor(public Articles: NewsService, public _route:ActivatedRoute) { }

  ngOnInit(){

    this.Ref= this._route.snapshot.paramMap.get('ref');

    console.log(this.Ref);
    this.Articles.getNews().subscribe( e =>{
      this.details = e['articles'];

      console.log(this.details);
    })
  

  }

}
