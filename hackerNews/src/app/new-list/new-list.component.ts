import { Component, OnInit } from '@angular/core';
import { NewListService } from './new-list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  itemid: any = [];
  newsList: any = [];
  maxNewsLists: any = [];
  constructor(
    public newListService: NewListService
  ) { }

  ngOnInit() {
    this.maxNewsList();
  }
  maxNewsList() {
    this.newListService.maxNewsList().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        this.newListService.getNewsList(response[i]).subscribe(data => {
          if (data) {
            this.newsList.push(data);
          }
        });
      }
    });
  }

}
