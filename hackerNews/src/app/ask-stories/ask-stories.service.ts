import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { URLS } from '../core/constant/app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskStoriesService {

  constructor(public http: HttpClient) { }
  askStories(itemid: string): Observable<any> {
    let getNewsUrl = environment.host + URLS.getNews;
    getNewsUrl = getNewsUrl.replace("{item-id}", itemid);
    return this.http.get<any>(getNewsUrl);
  }
  askStoriesList(): Observable<any> {
    let maxNewsUrl = environment.host + URLS.askStroies;
    return this.http.get<any>(maxNewsUrl);
  }
}
