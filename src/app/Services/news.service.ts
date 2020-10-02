import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( public _http: HttpClient) { }


  getNews()
  {
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc')
  }

  getNew(ref)
  {
    return this._http.get("https://newsapi.org/v2/everything?qInTitle="+"'"+ref+"'"+"&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc")
  }

  getBusiness()
  {
    return this._http.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc')
  }
  getGeneral()
  {
    return this._http.get('https://newsapi.org/v2/top-headlines?category=general&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc')
  }
  getSports()
  {
    return this._http.get('https://newsapi.org/v2/top-headlines?category=sports&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc')
  }

  getNewsDetails(ref)
  {
    return this._http.get("https://newsapi.org/v2/everything?q="+ref+"&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc")
  }


  searchNews(ref)
  {
    return this._http.get("https://newsapi.org/v2/everything?qInTitle="+"'"+ref+"'"+"&apiKey=e4b263f6fd5d4bd5a0c72e8e90c9fecc")
  }
}
