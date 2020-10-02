import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss']
})
export class DetailSearchComponent implements OnInit {

  Ref: any;
  details : any;
  constructor( public Articles: NewsService, public _route:ActivatedRoute) { }

  ngOnInit() {

    this.Ref= this._route.snapshot.paramMap.get('ref');

console.log(this.Ref)
    this.Articles.getNew(this.Ref).subscribe( e =>{
      this.details = e['articles'];

      console.log(this.details);})
  }

}
