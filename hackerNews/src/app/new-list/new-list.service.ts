import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { URLS } from '../core/constant/app.constant';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewListService {

  constructor(public http: HttpClient) { }
  getNewsList(itemid: string): Observable<any> {
    let getNewsUrl = environment.host + URLS.getNews;
    getNewsUrl = getNewsUrl.replace("{item-id}", itemid);
    return this.http.get<any>(getNewsUrl);
  }
  maxNewsList(): Observable<any> {
    let maxNewsUrl = environment.host + URLS.maxNews;
    return this.http.get<any>(maxNewsUrl);
  }

}
