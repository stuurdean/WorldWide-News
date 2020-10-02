import { from } from 'rxjs';
import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';
import{NgForm} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  news:any;
  Ref:any;
  constructor(public _News: NewsService, public _route :ActivatedRoute) { }
search(form:NgForm)
{
  console.log(form.value.name);
  this.Ref=form.value.name;
  this._News.getNewsDetails(this.Ref).subscribe( e=>{

    console.log(e);
    this.news=e['articles'];
  })
}

  ngOnInit(){

    this.Ref= this._route.snapshot.paramMap.get('ref');
    console.log(this.Ref)

    this._News.getNewsDetails(this.Ref).subscribe( e=>{

      console.log(e);
      this.news=e['articles'];
    })

  }

}
