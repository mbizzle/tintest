import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.scss']
})
export class FeedViewComponent implements OnInit {

  feed: any;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getFeed().then((feed) => {
      this.feed = feed;

      console.log(this.feed);
    });

  }

}
