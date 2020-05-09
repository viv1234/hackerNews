import { Component, OnInit } from '@angular/core';
import { AskStoriesService } from './ask-stories.service';

@Component({
  selector: 'app-ask-stories',
  templateUrl: './ask-stories.component.html',
  styleUrls: ['./ask-stories.component.scss']
})
export class AskStoriesComponent implements OnInit {
  newsList: any = [];
  constructor(
    public askStoriesService: AskStoriesService
  ) { }

  ngOnInit() {
    this.askStoriesList();
  }
  askStoriesList() {
    this.askStoriesService.askStoriesList().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        this.askStoriesService.askStories(response[i]).subscribe(data => {
          if (data) {
            this.newsList.push(data);
          }
        });
      }
    });
  }
}
